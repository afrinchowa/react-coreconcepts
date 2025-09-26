import React, { useState } from "react";

function ColorBox() {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [copied, setCopied] = useState(false);

  // Function to generate a random hex color
  const generateRandomColor = () => {
    const randomColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    setBgColor(randomColor);
    setCopied(false);
  };

  // Copy color code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(bgColor);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={{ ...containerStyle, backgroundColor: bgColor }}>
      <h2 style={titleStyle}>🎨 Random Color Generator</h2>

      <button onClick={generateRandomColor} style={buttonStyle}>
        🎲 Generate Color
      </button>

      <p style={textStyle}>
        Current Color:{" "}
        <strong
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={copyToClipboard}
        >
          {bgColor}
        </strong>
      </p>

      {copied && <p style={copiedStyle}>✅ Copied to clipboard!</p>}
    </div>
  );
}

const containerStyle = {
  padding: "50px",
  borderRadius: "16px",
  textAlign: "center",
  marginTop: "60px",
  transition: "background-color 0.6s ease",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
};

const titleStyle = {
  fontSize: "24px",
  marginBottom: "20px",
  color: "#222",
};

const buttonStyle = {
  padding: "12px 24px",
  fontSize: "16px",
  fontWeight: "600",
  backgroundColor: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const textStyle = {
  marginTop: "25px",
  fontSize: "18px",
  color: "#111",
};

const copiedStyle = {
  marginTop: "12px",
  fontSize: "16px",
  color: "green",
  fontWeight: "bold",
};


export default ColorBox;
