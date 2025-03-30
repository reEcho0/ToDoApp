import React from "react";

function Note() {
    const NoteFunc = ({ note }) => {
        return (
            <div className="note">
                <h3>{note.title}</h3>
                <p>{note.text}</p>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
}

export default Note;