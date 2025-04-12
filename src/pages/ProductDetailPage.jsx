import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Stars from '../components/Stars/StarsComponent';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      })
  
  }, [id]);

  if(!product) return <>Not found</>

  return (
    <div className="product-detail">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>
      <div className="product-detail-container">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-info">
          <h1>{product.title}</h1>
          <div className="product-price">${product.price}</div>
          <Stars rating={product.rating?.rate || 0} />
          <p className="product-description">{product.description}</p>
          <div className="product-category">Category: {product.category}</div>
        </div>
      </div>
    </div>
  );
};
