import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Note from '../components/Note';
import NoteForm from '../components/NoteForm';
import { fetchNotes, createNote, updateNote, deleteNote } from '../utils/api';
import styles from '../styles/Home.module.css';




export default function Home() {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState(null);

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async () => {
        const notesData = await fetchNotes();
        setNotes(notesData);
    };

    const handleSaveNote = async (note) => {
        if (note.id) {
            await updateNote(note);
        } else {
            await createNote(note);
        }
        loadNotes();
        setCurrentNote(null);
    };

    const handleEditNote = (note) => {
        setCurrentNote(note);
    };

    const handleDeleteNote = async (id) => {
        await deleteNote(id);
        loadNotes();
    };

    return (
        <Layout>
            <NoteForm currentNote={currentNote} onSave={handleSaveNote} />
            <div className={styles.notes}>
                {notes.map((note) => (
                    <Note
                        key={note.id}
                        note={note}
                        onEdit={handleEditNote}
                        onDelete={handleDeleteNote}
                    />
                ))}
            </div>
        </Layout>
    );
}
