import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css';


const NoteForm = ({ currentNote, onSave }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if(currentNote) {
            setTitle(currentNote.title);
            setContent(currentNote.content);
        }
    },[currentNote]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ id:currentNote?.id, title, content });
        setTitle('');
        setContent('');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            >
            </textarea>
            <button type="submit">Save Note</button>
        </form>
    );
};

export default NoteForm;