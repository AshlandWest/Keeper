import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  function buildNote(event) {
    const note = {};
    const target = event.target;
    if (target.name === "title") {
      setNewNote((prevValue) => {
        note.title = target.value;
        note.content = prevValue.content;
        return note;
      });
    } else {
      setNewNote((prevValue) => {
        note.title = prevValue.title;
        note.content = target.value;
        return note;
      });
    }
  }

  function submitNote(event) {
    event.preventDefault();
    props.createNote(newNote);
    setNewNote({ title: "", content: "" });
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          placeholder="Title"
          onChange={buildNote}
          value={newNote.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={buildNote}
          value={newNote.content}
        />
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
