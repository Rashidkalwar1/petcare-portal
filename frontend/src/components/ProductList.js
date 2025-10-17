import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  // Inside component:
const navigate = useNavigate();
// Replace alert with:
<button onClick={() => navigate(`/edit-product/${product.id}`)}>Edit</button>

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/products/${id}/`)
      .then(() => {
        setProducts(products.filter(p => p.id !== id));
      })
      .catch(error => console.error('Delete failed:', error));
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>Bark Buds Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '20px',
            width: '250px',
            background: '#fff'
          }}>
            <img src={product.image_url} alt={product.name} style={{ width: '100%', borderRadius: '4px' }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>${product.price}</strong>
            <div style={{ marginTop: '10px' }}>
              <button onClick={() => alert('Edit coming soon')} style={{ marginRight: '10px' }}>Edit</button>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
