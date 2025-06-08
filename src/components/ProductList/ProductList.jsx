import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.scss';

function ProductList({ apiBase }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${apiBase}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        if (data.products) {
          setProducts(data.products);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [apiBase]);

  if (products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
