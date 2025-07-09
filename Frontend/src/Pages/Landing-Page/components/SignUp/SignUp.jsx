import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './SignUp.css';

function SignUp() {
    const [isLogin, setIsLogin] = useState(false);
    const [message, setMessage] = useState('');

    const { register: registerLogin, handleSubmit: handleSubmitLogin, formState: { errors: errorsLogin }, reset: resetLoginForm } = useForm();
    const { register: registerSignup, handleSubmit: handleSubmitSignup, formState: { errors: errorsSignup }, reset: resetSignupForm } = useForm();

    useEffect(() => {
        resetLoginForm();
        resetSignupForm();
        setMessage('');
    }, [isLogin, resetLoginForm, resetSignupForm]);

    const onLoginSubmit = async (data) => {
        setMessage('');
        try {
            const res = await fetch(`http://localhost:3000/users?email=${encodeURIComponent(data.loginEmail)}`);
            const users = await res.json();
            const user = users[0];
            if (user && user.password === data.loginPassword) {
                setMessage('Login successful!');
            } else {
                setMessage('Invalid email or password.');
            }
        } catch (err) {
            setMessage('Login failed. Please try again.');
        }
    };

    const onSignupSubmit = async (data) => {
        setMessage('');
        if (data.signupPassword !== data.confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }
        try {
            // Check if email already exists
            const res = await fetch(`http://localhost:3000/users?email=${encodeURIComponent(data.signupEmail)}`);
            const existing = await res.json();
            if (existing.length > 0) {
                setMessage('Email already registered.');
                return;
            }
            // Register new user
            await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.signupName,
                    email: data.signupEmail,
                    password: data.signupPassword
                })
            });
            setMessage('Signup successful!');
            setIsLogin(true);
        } catch (err) {
            setMessage('Signup failed. Please try again.');
        }
    };

    return (
        <>
            <div className="signup-page-container">
                <div
                    id="authContainer"
                    className={`signup-auth-card ${!isLogin ? 'signup-enter-active' : ''}`}
                >
                    <h1 className="signup-title">
                        {isLogin ? 'Welcome Back!' : 'Create Account'}
                    </h1>

                    {message && (
                        <div className="signup-message-box" role="alert">
                            <span className="signup-message-text">{message}</span>
                        </div>
                    )}

                    {isLogin ? (
                        <form onSubmit={handleSubmitLogin(onLoginSubmit)} className="signup-form">
                            <div>
                                <label htmlFor="loginEmail" className="signup-form-label">Email Address</label>
                                <input
                                    type="email"
                                    id="loginEmail"
                                    placeholder="you@example.com"
                                    className="signup-form-input"
                                    {...registerLogin("loginEmail", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                                {errorsLogin.loginEmail && <span className="signup-form-error">{errorsLogin.loginEmail.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="loginPassword" className="signup-form-label">Password</label>
                                <input
                                    type="password"
                                    id="loginPassword"
                                    placeholder="••••••••"
                                    className="signup-form-input"
                                    {...registerLogin("loginPassword", { required: "Password is required" })}
                                />
                                {errorsLogin.loginPassword && <span className="signup-form-error">{errorsLogin.loginPassword.message}</span>}
                            </div>
                            <button type="submit" className="signup-submit-button">
                                Login
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmitSignup(onSignupSubmit)} className="signup-form">
                            <div>
                                <label htmlFor="signupName" className="signup-form-label">Full Name</label>
                                <input
                                    type="text"
                                    id="signupName"
                                    placeholder="John Doe"
                                    className="signup-form-input"
                                    {...registerSignup("signupName", { required: "Name is required" })}
                                />
                                {errorsSignup.signupName && <span className="signup-form-error">{errorsSignup.signupName.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="signupEmail" className="signup-form-label">Email Address</label>
                                <input
                                    type="email"
                                    id="signupEmail"
                                    placeholder="you@example.com"
                                    className="signup-form-input"
                                    {...registerSignup("signupEmail", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                />
                                {errorsSignup.signupEmail && <span className="signup-form-error">{errorsSignup.signupEmail.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="signupPassword" className="signup-form-label">Password</label>
                                <input
                                    type="password"
                                    id="signupPassword"
                                    placeholder="••••••••"
                                    className="signup-form-input"
                                    {...registerSignup("signupPassword", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters"
                                        }
                                    })}
                                />
                                {errorsSignup.signupPassword && <span className="signup-form-error">{errorsSignup.signupPassword.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="signup-form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="••••••••"
                                    className="signup-form-input"
                                    {...registerSignup("confirmPassword", {
                                        required: "Confirm Password is required",
                                        validate: (value, formValues) =>
                                            value === formValues.signupPassword || "Passwords do not match"
                                    })}
                                />
                                {errorsSignup.confirmPassword && <span className="signup-form-error">{errorsSignup.confirmPassword.message}</span>}
                            </div>
                            <button type="submit" className="signup-submit-button">
                                Sign Up
                            </button>
                        </form>
                    )}

                    <p className="signup-toggle-text">
                        {isLogin ? (
                            <>
                                Don't have an account?{' '}
                                <button onClick={() => setIsLogin(false)} className="signup-toggle-button">
                                    Sign Up
                                </button>
                            </>
                        ) : (
                            <>
                                Already have an account?{' '}
                                <button onClick={() => setIsLogin(true)} className="signup-toggle-button">
                                    Login
                                </button>
                            </>
                        )}
                    </p>
                </div>
            </div>
        </>
    );
}

export default SignUp;
