import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({});

  function buildNote(event) {
    const target = event.target;
    if (target.name === "title") {
      setNewNote((prevValue) => {
        prevValue.title = target.value;
        return prevValue;
      });
    } else {
      setNewNote((prevValue) => {
        prevValue.content = target.value;
        return prevValue;
      });
    }
  }

  function submitNote(event) {
    event.preventDefault();
    props.createNote(newNote);
    setNewNote({});
  }

  return (
    <div>
      <form>
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
          value={newNote.contnet}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
