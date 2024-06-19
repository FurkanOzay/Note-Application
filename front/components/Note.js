import styles from '../styles/Home.module.css';

const Note = ({ note, onEdit, onDelete }) => (
    <div>
        <div className={styles.notesContent}>
            <h2> {note.title} </h2>
            <p> {note.content} </p>
        </div>
        <div className={styles.notesButton}>
            <button onClick={() => onEdit(note)}>Edit</button>
            <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
    </div>
);

export default Note;
// Compare this snippet from front/utils/api.js: