function ProductShowcase() {
  const product = {
    name: "Comfortable Dog Bed",
    description: "Soft, washable, and stylish — perfect for cozy naps and happy tails 🐶🛏️",
    price: "$29.99",
    image: "/images/dog-bed.jpg",
    affiliateLink: "#", // 👈 Placeholder for future Amazon link
  };

  return (
    <div className="container mt-4">
      <h2>Featured Product</h2>
      <img
        src={product.image}
        alt={product.name}
        className="img-fluid mb-3 rounded shadow-sm"
      />
      <p>{product.description}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <a
        href={product.affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success"
      >
        Buy on Amazon 🛒
      </a>
      <p className="text-muted small mt-3">
        As an Amazon Associate, we may earn from qualifying purchases.
      </p>
    </div>
  );
}

export default ProductShowcase;
