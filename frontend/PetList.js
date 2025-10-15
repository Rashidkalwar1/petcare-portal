import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PetList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/list/')
      .then(res => setPets(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Registered Pets</h2>
      <ul className="list-group">
        {pets.map((pet, index) => (
          <li key={index} className="list-group-item">
            <strong>{pet.name}</strong> ({pet.breed}) - Age: {pet.age}, Owner: {pet.owner_email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PetList;
