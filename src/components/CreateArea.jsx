import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  function handleFocus() {
    onFocus();
  }

  //React's synthetic onBlur event behaves like the DOM's on-focus-out event, and they offer no onBlur alternitive.
  //The following code essentally rebuilds the DOM's native on-blur functionality.
  const handleBlur = (e) => {
    const currentTarget = e.currentTarget;
    // Check the newly focused element in the next tick of the event loop
    setTimeout(() => {
      // Check if the new activeElement is a child of the original container
      if (!currentTarget.contains(document.activeElement)) {
        // Invoke a callback
        onBlur();
      }
    }, 0);
  };

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
    onBlur();
  }

  return (
    <div>
      <form className="create-note" onFocus={handleFocus} onBlur={handleBlur}>
        <input
          name="title"
          placeholder={focused ? "Title" : "Add note..."}
          onChange={buildNote}
          value={newNote.title}
        />
        {focused && (
          <span>
            <hr />
            <textarea
              id="textArea"
              name="content"
              placeholder="Note"
              rows={3}
              onChange={buildNote}
              value={newNote.content}
            />
            <Zoom in={true}>
              <Fab onClick={submitNote}>
                <AddIcon />
              </Fab>
            </Zoom>
          </span>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
