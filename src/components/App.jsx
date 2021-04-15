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

  function deleteNote(index) {
    const newNotes = [];
    setNotes((prevNotes) => {
      newNotes.push(...prevNotes);
      newNotes.splice(index, 1);
      return newNotes;
    });
  }

  //testing only
  function addTests() {
    const newNotes = [];
    setNotes((prevNotes) => {
      newNotes.push(...prevNotes);
      newNotes.push(
        {
          title: "Test title 1",
          content: "Test content 1",
        },
        {
          title: "Test title 2",
          content: "Test content 2",
        },
        {
          title: "Test title 3",
          content: "Test content 3",
        },
        {
          title: "Test title 4",
          content: "Test content 4",
        },
        {
          title: "Test title 5",
          content: "Test content 5",
        }
      );
      return newNotes;
    });
  }

  return (
    <div>
      <Header />
      <CreateArea createNote={createNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            index={index}
            title={note.title}
            content={note.content}
            delete={deleteNote}
          />
        );
      })}
      <div>
        <button onClick={addTests}>Add Tests</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
