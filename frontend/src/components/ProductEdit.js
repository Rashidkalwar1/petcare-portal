import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    image_url: ''
  });

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/products/${id}/`)
      .then(res => setForm(res.data))
      .catch(err => console.error('Fetch failed:', err));
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8000/api/products/${id}/`, form)
      .then(() => {
        alert('Product updated!');
        navigate('/product');
      })
      .catch(err => alert('Update failed'));
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '30px' }}>
      <h3>Edit Product</h3>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} required /><br />
        <input name="price" type="number" value={form.price} onChange={handleChange} required /><br />
        <textarea name="description" value={form.description} onChange={handleChange} required /><br />
        <input name="image_url" value={form.image_url} onChange={handleChange} /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ProductEdit;
