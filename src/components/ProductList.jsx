import { useEffect, useState } from 'react';

function ProductList({ apiBase }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Fetching from:", `${apiBase}/api/products`);
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
    <div>
      <h2>Available Products</h2>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            {prod.name} - ${prod.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
