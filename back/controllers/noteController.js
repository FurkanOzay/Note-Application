import pool from '../config/db.js';

export const getAllNotes = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM notes');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    await pool.query('INSERT INTO notes (title, content) VALUES (?, ?)', [title, content]);
    res.status(201).json({ message: 'Note created' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    await pool.query('UPDATE notes SET title = ?, content = ? WHERE id = ?', [title, content, id]);
    res.status(200).json({ message: 'Note updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM notes WHERE id = ?', [id]);
    res.status(200).json({ message: 'Note deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};