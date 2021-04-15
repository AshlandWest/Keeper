import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleDelete() {
    props.delete(props.index);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <IconButton>
        <DeleteIcon onClick={handleDelete} />
      </IconButton>
    </div>
  );
}

export default Note;
