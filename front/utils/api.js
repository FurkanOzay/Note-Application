export const fetchNotes = async () => {
    const response = await fetch('/api/notes');
    if (!response.ok) {
        throw new Error('Failed to fetch notes');
    }
    return await response.json();
};

export const createNote = async (note) => {
    const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    });
    if (!response.ok) {
        throw new Error('Failed to create note');
    }
};

export const updateNote = async (note) => {
    const response = await fetch(`/api/notes/${note.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    });
    if (!response.ok) {
        throw new Error('Failed to update note');
    }
};

export const deleteNote = async (id) => {
    const response = await fetch(`/api/notes/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete note');
    }
};
