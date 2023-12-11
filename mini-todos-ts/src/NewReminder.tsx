import React, { useState } from 'react'

interface NewReminderProps {
    onAddReminder: (title: string) => void 
}

export default function NewReminder({onAddReminder}: NewReminderProps): JSX.Element {
    const [title, setTitle] = useState('');

    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if(!title) return;
        onAddReminder(title);
        setTitle('')
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title"></label>
            <input type="text" onChange={handleOnchange} className="form-control" />
            <button type="submit" className="btn btn-primary my-3 rounded-pill">Add Reminder</button>
        </form>
    )
}
