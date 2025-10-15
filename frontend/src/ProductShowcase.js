function ProductShowcase() {
  return (
    <div className="container mt-4">
      <h2>Featured Product</h2>
      <img src="/images/dog-bed.jpg" alt="Dog Bed" className="img-fluid mb-3" />
      <p>Comfortable dog bed for all breeds. Soft, washable, and stylish.</p>
      <p><strong>Price:</strong> $29.99</p>
      <button className="btn btn-success">Add to Cart</button>
    </div>
  );
}

export default ProductShowcase;
