import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewNotesPage({ handleAddNote }) {
  const [formData, setFormData] = useState({text: ''});
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddNote(formData);
    setFormData({
      text: ""
    })
    navigate('/');
  }
  function handleChange(evt) {
    const newNote = {...formData,[evt.target.name]: evt.target.value}
    setFormData(newNote);
  }
  return (
    <form onSubmit={handleSubmit}>
       <textarea onChange={handleChange}  name="text" value={formData.text} id="" cols="30" rows="10"></textarea>
       <button>Add Note</button>
    </form>

  );
}