import React, { useState, useEffect } from "react";

const QuickNotes = () => {
  const [notes, setNotes] = useState(() => {
    // Load saved notes from localStorage
    const saved = localStorage.getItem("quickNotes");
    return saved ? JSON.parse(saved) : [];
  });
  const [noteText, setNoteText] = useState("");

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("quickNotes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (noteText.trim()) {
      const newNote = { text: noteText, date: new Date().toLocaleString() };
      setNotes([newNote, ...notes]); // add new note on top
      setNoteText("");
    }
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    if (window.confirm("Are you sure you want to delete all notes?")) {
      setNotes([]);
    }
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
        <div style={styles.actions}>
          <button style={styles.button} onClick={addNote}>
            ➕ Add Note
          </button>
          {notes.length > 0 && (
            <button style={styles.clearBtn} onClick={clearAll}>
              🗑 Clear All
            </button>
          )}
        </div>
      </div>

      {notes.length === 0 ? (
        <p style={styles.empty}>No notes yet. Start writing!</p>
      ) : (
        <ul style={styles.list}>
          {notes.map((note, index) => (
            <li key={index} style={styles.listItem}>
              <p style={{ margin: "0 0 4px 0" }}>{note.text}</p>
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
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "520px",
    margin: "20px auto",
    fontFamily: "sans-serif",
    transition: "0.3s",
  },
  title: {
    fontSize: "20px",
    marginBottom: "12px",
    textAlign: "center",
    color: "#111827",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "15px",
  },
  textarea: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    resize: "none",
    minHeight: "70px",
    fontSize: "14px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  button: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.2s",
  },
  clearBtn: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#dc2626",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.2s",
  },
  list: {
    listStyle: "none",
    padding: "0",
    margin: 0,
  },
  listItem: {
    backgroundColor: "#f9fafb",
    padding: "12px",
    borderRadius: "10px",
    marginBottom: "10px",
    position: "relative",
    transition: "0.2s",
  },
  deleteBtn: {
    position: "absolute",
    right: "10px",
    top: "10px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
  },
  empty: {
    textAlign: "center",
    color: "#6b7280",
    fontStyle: "italic",
    marginTop: "20px",
  },
};

export default QuickNotes;
