

import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div style={styles.container}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button} >Sign In</button>
      </form>
      <hr></hr>
      <h1>PLEASE SIGN IN BEFORE</h1>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "50px" },
  form: { display: "flex", flexDirection: "column", alignItems: "center" },
  input: { width: "250px", padding: "10px", margin: "10px 0", fontSize: "16px" },
  button: { padding: "10px 20px", background: "red", color: "white", border: "none", cursor: "pointer", fontSize: "16px" },
};

export default SignIn;
