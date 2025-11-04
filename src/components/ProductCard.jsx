import React from "react";
import { useCartStore } from "../store/cartStore";
import styles from './ProductCard.module.css';
import addIcon from '../assets/add.png';
import addedIcon from '../assets/added.png';

export const ProductCard = ({ product }) => {
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <img src={product.thumbnail} alt={product.title} className={styles.thumbnail} />
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
            </div>
            <strong className={styles.price}>${product.price}</strong>
            <button className={styles.button} onClick={() => addToCart(product)}>
                <img src={addIcon} alt="Add to Cart" className={styles.addIcon} />
                Add to Cart
            </button>
        </div>
    )
}

