import React, { useEffect, useState } from "react";
import { useCheckoutStore } from "../store/chekoutStore";
import { useCartStore } from "../store/cartStore";
import { useNavigate } from "react-router-dom";
import checkMark from "../assets/checkmark.png";
import contactImg from "../assets/contactimg.png";
import shipImg from "../assets/shipimg.png";
import infoImg from "../assets/infoimg.png";
import styles from "./FinalOrder.module.css";

export default function FinalOrder() {

  const customerInfo = useCheckoutStore((state) => state.customerInfo);
  const shipmentInfo = useCheckoutStore((state) => state.shipmentInfo);
  const cart = useCheckoutStore((state) => state.cart);
  const lastOrderId = useCheckoutStore((state) => state.lastOrderId);
  const incrementOrderId = useCheckoutStore((state) => state.incrementOrderId);
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();

  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    setOrderId(lastOrderId + 1);
    incrementOrderId();
  }, []);

  const handleContinueShopping = () => {
    clearCart();        
    navigate("/");       
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const orderDate = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <div className={styles.titleImage}><img src={checkMark} alt="checkMark" className={styles.checkMark} /></div>
        <h1 className={styles.title}>Thank you for your order!</h1>
        <p className={styles.subtitle}>
          The order confirmation email with details of your order and a link to track its progress has been sent to your email address.
        </p>
        <p className={styles.orderMeta}>
          <strong className={styles.orderId}>Order ID # is {String(orderId).padStart(10, "0")} - <span className={styles.pending}>PENDING</span></strong>
          <p className={styles.orderDate}>Order Date:{orderDate}</p>
        </p>
      </div>

      <div className={styles.containerInfo}>
        <div className={styles.sectionContact}>
          <h2><img src={contactImg} alt="contact" className={styles.contactImg} />Customer Information</h2>
          <p>{customerInfo?.firstName} {customerInfo?.lastName}</p>
          <p>{customerInfo?.email}</p>
          <p>{customerInfo?.phone}</p>
        </div>

        <div className={styles.sectionShip}>
          <h2><img src={shipImg} alt="ship" className={styles.shipImg} /> Shipment Information</h2>
          <p>{shipmentInfo?.address}{shipmentInfo?.apartment && `, ${shipmentInfo.apartment}`}</p>
          <p>{shipmentInfo?.city}, {shipmentInfo?.state} {shipmentInfo?.zip}</p>
          <p>{shipmentInfo?.country}</p>
        </div>
      </div>
      <div className={styles.contSum}>
        <div className={styles.sectionOrder}>
          <h2 className={styles.titleSum}><img src={infoImg} alt="info" className={styles.infoImg} />Order Summary</h2>
          <ul className={styles.itemList}>
            {cart.map((item, index) => (
              <li key={index} className={styles.item}>
                <img src={item.thumbnail} alt={item.title} className={styles.thumbnail} />
                <div className={styles.contTxt}>
                  <p className={styles.orderTitle}>{item.title}</p>
                  <strong>${item.price.toFixed(2)}, {item.quantity} product</strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sectionPrice}>
          <div className={styles.priceRow}>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className={styles.priceRow}>
            <span>Shipping & Handling</span>
            <span>$0.00</span>
          </div>
          <div className={styles.priceRow}>
            <span>Tax</span>
            <span>$0.00</span>
          </div>
          <div className={`${styles.priceRow} ${styles.total}`}>
            <strong>Grand Total:</strong>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.button} onClick={() => window.location.href = "/"}>
          Continue shopping
        </button>
      </div>
    </div>
  );
}
