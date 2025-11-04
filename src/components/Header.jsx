import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

export const Header = () => {
    const cartItems = useCartStore((state) => state.cartItems);

    const totalCount = cartItems.length;

    return (
        <header>
            <nav>
                <Link to='/Cart'>Cart
                    {totalCount > 0 && (
                        <span> ({totalCount})</span>
                    )}
                </Link>
            </nav>
        </header>
    )

}