import React from "react";
import { useCartStore } from "../../store/cartStore";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import styles from './Cart.module.css';
import deleteImg from '../../assets/deleteImg.png';

export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const navigate = useNavigate();

  const handleNextStep = () => {
    navigate('/checkout/ContactInformation');
  }

  return (
    <div className={styles.cart}>
      <div className={styles.breadcrumb}>
        <Breadcrumb />
      </div>

      <h2 className={styles.titleCart}>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className={styles.list}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.item}>
                <img src={item.thumbnail} alt={item.title} className={styles.itemImage} />
                <div className={styles.info}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <p className={styles.description}>{item.description}</p>
                  <div className={styles.controls}>
                    <div className={styles.quantity}>
                      <button onClick={() => decreaseQuantity(item.id)} className={styles.decreaseButton}>-</button>
                      <strong className={styles.quantityValue}>{item.quantity}</strong>
                      <button onClick={() => increaseQuantity(item.id)} className={styles.increaseButton}>+</button>
                    </div>
                    <p className={styles.titlePrice}>Price: <span className={styles.price}>${item.price}</span></p>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>
                  <img src={deleteImg} alt="Delete" />
                  <span>Delete</span>
                </button>
              </li>
            ))}
          </ul>
          <div className={styles.summary}>
            <div className={styles.together}>
              <p>Together: <strong>{totalQuantity} products.</strong></p>
            </div>
            <div className={styles.total}>
              <p>Sum: <strong>${totalPrice.toFixed(2)}</strong></p>
            </div>
            <div>
              <button onClick={handleNextStep} className={styles.nextButton}>Next Step</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
