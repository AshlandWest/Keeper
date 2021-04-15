import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function createNote(note) {
    const newNotes = [];
    setNotes((prevNotes) => {
      newNotes.push(...prevNotes);
      newNotes.unshift({
        title: note.title,
        content: note.content,
      });
      return newNotes;
    });
  }

  return (
    <div>
      <Header />
      <CreateArea createNote={createNote} />
      {notes.map((note, index) => {
        return <Note key={index} title={note.title} content={note.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
