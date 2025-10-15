import React from 'react';
import axios from 'axios';

function RegisterPet() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      age: e.target.age.value,
      breed: e.target.breed.value,
      owner_email: e.target.email.value,
    };
    try {
      await axios.post('http://localhost:8000/api/register/', data);
      alert('Pet registered successfully!');
    } catch (error) {
      alert('Error registering pet');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Register Your Pet</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Pet Name" className="form-control mb-2" required />
        <input type="number" name="age" placeholder="Age" className="form-control mb-2" required />
        <input type="text" name="breed" placeholder="Breed" className="form-control mb-2" required />
        <input type="email" name="email" placeholder="Owner Email" className="form-control mb-2" required />
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default RegisterPet;
