import './ProductCard.scss';

function ProductCard({ product }) {
  console.log('Rendering product:', product);
  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="buy-button">Add to Cart</button>
      </div>
    </div>
  );
}
export default ProductCard;
