import React, { use } from "react";
import { useCartStore } from "../store/cartStore";
import { useState, useEffect } from "react";
import styles from './ProductCard.module.css';
import addIcon from '../assets/add.png';
import addedIcon from '../assets/added.png';

export const ProductCard = ({ product }) => {
    const addToCart = useCartStore((state) => state.addToCart);
    const [isAdded, setIsAdded] = useState(false);

    const handleaAdd = () => {
        addToCart(product);
        setIsAdded(true);
    }

    useEffect(() => {
        if (isAdded) {
            const timer = setTimeout(() => setIsAdded(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [isAdded]);

    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <img src={product.thumbnail} alt={product.title} className={styles.thumbnail} />
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.description}>{product.description}</p>
            </div>
            <strong className={styles.price}>${product.price}</strong>
            <button className={styles.button} onClick={handleaAdd} disabled={isAdded}>
                <img
                    src={isAdded ? addedIcon : addIcon}
                    alt={isAdded ? 'Added to cart' : 'Add to cart'}
                    className={styles.addIcon} />
                {isAdded ? 'Added' : 'Add to Cart'}
            </button>
        </div>
    )
}

