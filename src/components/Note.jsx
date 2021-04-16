import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Zoom from "@material-ui/core/Zoom";

function Note(props) {
  function handleDelete() {
    props.delete(props.index);
  }

  return (
    <Zoom in={true}>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    </Zoom>
  );
}

export default Note;
