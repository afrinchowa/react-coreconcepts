import React, { useState } from "react";

function PasswordInput() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple strength checker
  const getStrength = () => {
    if (password.length === 0) return "";
    if (password.length < 6) return "Weak";
    if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.length >= 8)
      return "Strong";
    return "Medium";
  };

  const strength = getStrength();

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: "15px", color: "#0c4a6e" }}>
        🔐 Password Visibility Toggle
      </h2>

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
        <button
          onClick={copyToClipboard}
          style={{ ...toggleButton, backgroundColor: "#10b981" }}
          disabled={!password}
        >
          📋 Copy
        </button>
      </div>

      {/* Password Strength */}
      {password && (
        <div style={{ marginTop: "12px" }}>
          <p style={{ fontSize: "14px", marginBottom: "5px" }}>
            Strength:{" "}
            <b
              style={{
                color:
                  strength === "Weak"
                    ? "#dc2626"
                    : strength === "Medium"
                    ? "#f59e0b"
                    : "#16a34a",
              }}
            >
              {strength}
            </b>
          </p>
          <div
            style={{
              height: "6px",
              borderRadius: "4px",
              backgroundColor: "#e5e7eb",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width:
                  strength === "Weak"
                    ? "33%"
                    : strength === "Medium"
                    ? "66%"
                    : "100%",
                height: "100%",
                backgroundColor:
                  strength === "Weak"
                    ? "#dc2626"
                    : strength === "Medium"
                    ? "#f59e0b"
                    : "#16a34a",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>
      )}

      {/* Show live password */}
      <p style={{ marginTop: "12px", fontSize: "14px", color: "#666" }}>
        Password: {password || "••••••"}
      </p>

      {/* Copy message */}
      {copied && (
        <p style={{ fontSize: "13px", color: "#16a34a", marginTop: "5px" }}>
          ✅ Password copied!
        </p>
      )}
    </div>
  );
}

const containerStyle = {
  maxWidth: "450px",
  margin: "50px auto",
  padding: "25px",
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  textAlign: "center",
  backgroundColor: "#f9fafb",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
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
  width: "60%",
  borderRadius: "8px",
  border: "1px solid #bbb",
  outline: "none",
};

const toggleButton = {
  padding: "8px 12px",
  fontSize: "14px",
  backgroundColor: "#3b82f6",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default PasswordInput;
