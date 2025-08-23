import React, { useState } from "react";

export default function RegistrationForm() {
  // state for each input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic validation
    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }
    setError("");

    // simulate sending to API
    console.log("User registered:", { username, email, password });
    alert("Registration successful!");

    // reset form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px", maxWidth: "300px" }}>
      <h2>Register (Controlled)</h2>
      
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Register</button>
    </form>
  );
}
