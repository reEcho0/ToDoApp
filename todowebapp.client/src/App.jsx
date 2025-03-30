import React, { /*useEffect,*/ useState } from 'react';
import './App.css';
import Note from "./Note";

function App() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({ title: "", text: "" });

    const addNote = () => {
        if (newNote.title && newNote.text) {
            const newID = Date.now().toString();//изменить создание ID
            setNotes([...notes, { ...newNote, id: newID }]);
            setNewNote({ title: "", text: "" });
        }
    };

    const delteNote = (id) => {

    };

    const editNote = (id, newText) => {

    };

    return (
        <div className="App">
            <h1>App for notes</h1>
            <div className="FormForNote">
                <input
                    type="text"
                    placeholder="title"
                    value={newNote.title}
                    onChange={(e) => setNewNote({ ...newNote, title:e.target.value })}
                />
                <textarea
                    rows="4"
                    cols="50"
                    placeholder="text"
                    value={newNote.text}
                    onChange={(e) => setNewNote({ ...newNote, text: e.target.value })}
                />
                <button onClick={addNote}>Add note</button>
            </div>
        </div>
    )
}

export default App;