import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import styles from './Header.module.css';
import cartLogo from '../assets/cart.png';
import headerLogoLeft from '../assets/headerLeft.png';
import headerLogoRight from '../assets/headerRight.png';

export const Header = () => {
    const cartItems = useCartStore((state) => state.cartItems);

    const totalCount = cartItems.length;

    return (
        <header className={styles.header}>
            <div>
                    <img src={headerLogoLeft} alt="Header Left" className={styles.headerLogoLeft} />
                    <img src={headerLogoRight} alt="Header Right" className={styles.headerLogoRight} />
                <h1 className={styles.title}>
                    OnlineStore
                </h1>
            </div>
            <nav>
                <Link to='/Cart' className={styles.cart}>
                    <img src={cartLogo} alt="Cart" className={styles.cartLogo} />
                    Cart
                    {totalCount > 0 && (
                        <span> ({totalCount})</span>
                    )}
                </Link>
            </nav>
        </header>
    )

}