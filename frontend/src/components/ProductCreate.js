import React, { useState } from 'react';
import axios from 'axios';

const ProductCreate = () => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    image_url: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/products/', form)
      .then(() => alert('Product created!'))
      .catch(err => alert('Error creating product'));
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '30px' }}>
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required /><br />
        <input name="price" type="number" placeholder="Price" onChange={handleChange} required /><br />
        <textarea name="description" placeholder="Description" onChange={handleChange} required /><br />
        <input name="image_url" placeholder="Image URL" onChange={handleChange} /><br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default ProductCreate;
