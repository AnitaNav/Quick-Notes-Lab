import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Notes from '../Notes/Notes';
import NewNotesPage from '../NewNotesPage/NewNotesPage';
import NavBar from '../../components/NavBar/NavBar';
import * as NotesAPI from '../../utilities/notes-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  useEffect(()=> {
    async function getAllNotes(){
      const notes = await NotesAPI.getAll()
      setNotes(notes);
    }
    getAllNotes();
  },[])

  async function handleAddNote(note) {
    const newNote = await NotesAPI.addNote(note);
    setNotes([...notes,newNote]);
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<Notes notes={notes}/>} />
              <Route path="/new" element={<NewNotesPage handleAddNote={handleAddNote} />} />

            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
