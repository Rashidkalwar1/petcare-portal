import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PetList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    document.title = "Pet List | PetCare Portal";

    axios
      .get(`${process.env.REACT_APP_API_URL}list/`)
      .then((res) => setPets(res.data))
      .catch((err) => {
        console.error('Error fetching pets:', err);
        alert('Failed to load pet list. Please try again later.');
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Registered Pets</h2>
      {pets.length === 0 ? (
        <p>No pets registered yet.</p>
      ) : (
        <ul className="list-group">
          {pets.map((pet, index) => (
            <li key={index} className="list-group-item">
              <strong>{pet.name}</strong> ({pet.breed}) — Age: {pet.age}, Owner: {pet.owner_email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PetList;
