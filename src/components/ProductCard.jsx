import React from "react";
import { useCartStore } from "../store/cartStore";

export const ProductCard = ({ product, onAddToCart }) => {
    return(
        <div className="card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <strong>${product.price}</strong>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    )
}