import React, { useState } from "react";

function CharCounter() {
  const [text, setText] = useState("");

  // This function updates state when user types
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={containerStyle}>
      <h2>✍️ Live Character Counter</h2>

      <textarea
        style={textareaStyle}
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
      />

      <p style={{ marginTop: "15px", fontSize: "18px" }}>
        Characters: <strong>{text.length}</strong>
      </p>
    </div>
  );
}

const containerStyle = {
  maxWidth: "500px",
  margin: "50px auto",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  backgroundColor: "#fff",
  textAlign: "center"
};

const textareaStyle = {
  width: "100%",
  height: "100px",
  padding: "10px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

export default CharCounter;
