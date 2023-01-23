import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Login from "../routes/Login";
import SignUp from "../routes/SignUp";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      {/* <Router>
          <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/SignUp' element={<SignUp/>} />
        </Routes>
    </Router> */}
      <Header/>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
