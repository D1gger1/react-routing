import React from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./Breadcrumb.module.css";

export default function Breadcrumb() {
  const location = useLocation();

  const steps = [
    { path: "/checkout/Cart", label: "Cart" },
    { path: "/checkout/ContactInformation", label: "Contact Information" },
    { path: "/checkout/ShipmentInformation", label: "Shipment Information" },
  ];

  return (
    <div className={styles.breadcrumbs}>
      {steps.map((step, index) => {
        const isActive = location.pathname === step.path;

        return (
          <span key={step.path}>
            {isActive ? (
              <span className={styles.active}>{step.label}</span>
            ) : (
              <Link to={step.path} className={styles.link}>{step.label}</Link>
            )}
            {index < steps.length - 1 && " > "}
          </span>
        );
      })}
    </div>
  );
}
