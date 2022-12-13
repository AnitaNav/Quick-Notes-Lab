
export default function Notes({ notes }) {
    const date = new Date(notes.createdAt)
    return (
        <ul>
            {notes.length ? 
            notes.map((n, idx) => <li key={idx}>{n.text} {date.toLocaleString('UTC-09:00')}</li>): 
            <h1>No notes yet!</h1>
            }
        </ul>
    )
    
}