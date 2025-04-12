import { Link } from 'react-router-dom';
import Stars from '../Stars/StarsComponent';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="product-card">
    
      <img src={product.image} alt={product.title} />
      <div className="product-info">
       <div className="product-title">
          Name: {product.title}
          </div>
        <div className="product-price">Price: {product.price}$</div>
        <Stars rating={product.rating.rate} />
      </div>
 
    </Link>
  );
};

export default ProductCard;