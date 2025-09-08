import { useState, useEffect } from "react";
import axios from "axios";
import "./Notes.css";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios.get("/api/notes")
      .then(res => setNotes(res.data))
      .catch(err => console.error(err));
  }, []);

  const addNote = () => {
    if (input.trim() === "") return;
    axios.post("/api/notes", { content: input })
      .then(res => {
        setNotes([...notes, res.data]);
        setInput("");
      });
  };

  const deleteNote = (id) => {
    axios.delete(`/api/notes/${id}`)
      .then(() => setNotes(notes.filter(note => note.id !== id)));
  };

  return (
    <div className="notes-container">
      <h2 className="notes-header">My Notes</h2>
      <div className="notes-input-area">
        <input
          type="text"
          placeholder="Write a note..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="notes-input"
        />
        <button onClick={addNote} className="notes-button">
          Add
        </button>
      </div>

      <ul className="notes-list">
        {notes.map((note) => (
          <li key={note.id} className="notes-item">
            {note.content}
            <button
              onClick={() => deleteNote(note.id)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
