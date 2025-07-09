import React, { useState } from 'react';
import "../style/Logout.css";  // ✅ Fix the import path
import SignUp from './SignUp';  // ✅ No need for 'components/' if in same folder

export default function Logout() {
  const [currentPage, setCurrentPage] = useState("logout");

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email && username && password;

  if (currentPage === "SignUp") {
    return <SignUp />;
  }

  return (
    <div className="uuu">
      <div className="lg">
        <div className="kk">
          <h2 className="ss">Email</h2>
          <input
            className="ee"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h2 className="ss">User Name</h2>
          <input
            className="ee"
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <h2 className="ss">Password</h2>
          <input
            className="ee"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          style={{
            marginTop: "40px",
            width: "150px",
            height: "30px",
            background: "linear-gradient(#223046 5%, #2563eb 80%)",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "0.8rem",
            cursor: "pointer",
            transition: "background 0.2s ease-in-out",
          }}
          disabled={!isFormValid}
          onClick={() => setCurrentPage("SignUp")}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
