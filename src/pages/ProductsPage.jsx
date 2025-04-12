import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard/ProductCardComponent';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
  }, []);

  return (
    <div className="products-page">
      <h1>All Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

