import React, { useState } from "react";

const QuickNotes = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");

  const addNote = () => {
    if (noteText.trim()) {
      setNotes([...notes, { text: noteText, date: new Date().toLocaleString() }]);
      setNoteText("");
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>📝 Quick Notes</h3>
      <div style={styles.form}>
        <textarea
          style={styles.textarea}
          placeholder="Type your note..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        ></textarea>
        <button style={styles.button} onClick={addNote}>
          ➕ Add Note
        </button>
      </div>
      <ul style={styles.list}>
        {notes.map((note, index) => (
          <li key={index} style={styles.listItem}>
            <p style={{ margin: "0" }}>{note.text}</p>
            <small style={{ color: "#666" }}>{note.date}</small>
            <button
              style={styles.deleteBtn}
              onClick={() => deleteNote(index)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    maxWidth: "500px",
    margin: "0 auto",
  },
  title: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "15px",
  },
  textarea: {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    resize: "none",
    minHeight: "60px",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    backgroundColor: "#f9fafb",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "8px",
    position: "relative",
  },
  deleteBtn: {
    position: "absolute",
    right: "8px",
    top: "8px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default QuickNotes;
