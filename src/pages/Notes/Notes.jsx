

export default function Notes({ notes }) {
    return (
        <ul>
            {notes.length ? 
            notes.map((n, idx) => <li key={idx}>{n.text}</li>): 
            <h1>No notes yet!</h1>
            }
        </ul>
    )
    
}