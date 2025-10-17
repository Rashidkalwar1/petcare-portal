import React from 'react';

const products = [
  {
    name: "Chew Toy",
    price: 9.99,
    description: "Durable rubber toy for dogs.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Pet Bed",
    price: 29.99,
    description: "Soft and cozy bed for pets.",
    image: "https://images.unsplash.com/photo-1604908177522-3f4b1b3c6f4e?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Leash & Collar Set",
    price: 14.99,
    description: "Stylish and strong leash combo.",
    image: "https://images.unsplash.com/photo-1619983081563-4f3b1a3e4e3f?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Pet Shampoo",
    price: 12.49,
    description: "Gentle shampoo for shiny fur.",
    image: "https://images.unsplash.com/photo-1621607514819-5e6c4e2c1c5f?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Treat Jar",
    price: 7.99,
    description: "Cute jar to store pet treats.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1a4b4b2?auto=format&fit=crop&w=400&q=80"
  },
];

function ProductList() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Shop Pet Accessories</h2>
      <div className="row">
        {products.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="text-success fw-bold">${item.price}</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
