import { useState } from 'react';
import "./Home.css";
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import cardsData from "../../../../assets/Cards.json";

const Home = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Feedback submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="home-feedback-container">
        <div className="home-feedback-card">
          <h1 className="home-feedback-title">
            Thank you for your feedback!
          </h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="home-main-container">

        <div className="home-hero-section">
          <div className="home-hero-content">
            <h1 className="home-hero-title">Your Health, Our Priority</h1>
            <p className="home-hero-description">
              At CityCare Hospital, we are dedicated to providing world-class healthcare services with a personal touch. Our experienced team of doctors and state-of-the-art facilities ensure you receive the best care possible.
            </p>
            <NavLink
              to="/landing-page/sign-up"
              className="home-appointment-button"
            >
              Book an Appointment
            </NavLink>
          </div>
          <div className="home-hero-branding">
            <h1 className="home-branding-title">CityCare Hospital</h1>
            <p className="home-branding-slogan">
              <span>Compassionate Care. Advanced Medicine.</span>
              Close to Home.
            </p>
          </div>
        </div>

        <div className="home-cards-grid">
          {cardsData.map(card => (
            <div
              key={card.title}
              className="home-card-item"
            >
              <h2 className="home-card-title">{card.title}</h2>
              <p className="home-card-description">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="home-feedback-form-container">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="home-form">
            <h1 className="home-form-title">We Value Your Feedback</h1>

            <div>
              <label htmlFor="name" className="home-form-label">Full Name</label>
              <input
                autoCapitalize="on"
                autoComplete="on"
                placeholder="Full Name"
                id="name"
                className="home-form-input"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <span className="home-form-error">{errors.name.message}</span>}
            </div>

            <div>
              <label htmlFor="email" className="home-form-label">Email Address</label>
              <input
                autoComplete="on"
                placeholder="Email Address"
                id="email"
                type="email"
                className="home-form-input"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <span className="home-form-error">{errors.email.message}</span>}
            </div>

            <div>
              <label htmlFor="rating" className="home-form-label">Rate Your Experience</label>
              <select
                id="rating"
                className="home-form-select"
                {...register("rating", { required: "Please select a rating" })}
              >
                <option value="">Select Rating</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Average</option>
                <option>Poor</option>
              </select>
              {errors.rating && <span className="home-form-error">{errors.rating.message}</span>}
            </div>

            <div>
              <label htmlFor="comments" className="home-form-label">Your Comments</label>
              <textarea
                placeholder="Your Comments"
                id="comments"
                rows="4"
                className="home-form-input"
                {...register("comments", { required: "Comments are required" })}
              />
              {errors.comments && <span className="home-form-error">{errors.comments.message}</span>}
            </div>

            <button
              type="submit"
              className="home-submit-button"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;