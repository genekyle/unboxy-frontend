import { useEffect, useState } from 'react';

function ProductList({ apiBase }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (products.length === 0) return <p>No products available.</p>;

  return (
    <div>
      <h2>Unboxy Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <img src={product.image_url} alt={product.name} style={{ width: '100%', objectFit: 'cover' }} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
