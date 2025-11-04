import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "./ProductCard"

export const ProductList = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const urls = [
          'https://dummyjson.com/products/category/furniture',
          'https://dummyjson.com/products/category/home-decoration',
          'https://dummyjson.com/products/category/lighting',
        ];
        const responses = await Promise.all(urls.map(url => axios.get(url)));
        const data = responses.map(res => res.data.products);
        const combined = data.flat();
        const limited = combined.slice(0, 10);

        setProduct(limited);
      } catch (err) {
        setError('Error loading ' + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);
  if (loading) return <p>Loading...</p>
  if (error) return <p style={{ color: 'red' }}>{error}</p>

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}