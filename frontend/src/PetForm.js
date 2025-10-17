import React, { useState } from 'react';

const PetForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    breed: '',
    owner_email: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setMessage(result.message || 'Pet registered!');
      setFormData({ name: '', age: '', breed: '', owner_email: '' });
    } catch (error) {
      console.error('Error:', error);
      setMessage('Something went wrong!');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Register a Pet</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" type="text" name="name" placeholder="Pet Name" value={formData.name} onChange={handleChange} required />
        <input className="form-control mb-2" type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input className="form-control mb-2" type="text" name="breed" placeholder="Breed" value={formData.breed} onChange={handleChange} required />
        <input className="form-control mb-2" type="email" name="owner_email" placeholder="Owner Email" value={formData.owner_email} onChange={handleChange} required />
        <button className="btn btn-primary" type="submit">Register Pet</button>
      </form>
    </div>
  );
};

export default PetForm;
