import React, { useState } from "react";

function PasswordInput() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div style={containerStyle}>
      <h2>🔐 Password Visibility Toggle</h2>

      <div style={inputWrapper}>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={handleChange}
          placeholder="Enter your password"
          style={inputStyle}
        />
        <button onClick={toggleVisibility} style={toggleButton}>
          {showPassword ? "🙈 Hide" : "👁️ Show"}
        </button>
      </div>

      <p style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
        Password: {password}
      </p>
    </div>
  );
}

const containerStyle = {
  maxWidth: "400px",
  margin: "50px auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  textAlign: "center",
  backgroundColor: "#fefefe",
};

const inputWrapper = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  justifyContent: "center",
};

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  width: "70%",
  borderRadius: "6px",
  border: "1px solid #aaa",
};

const toggleButton = {
  padding: "8px 12px",
  fontSize: "14px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default PasswordInput;
