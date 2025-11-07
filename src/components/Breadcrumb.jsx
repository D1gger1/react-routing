import React from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./Breadcrumb.module.css";

export default function Breadcrumb({ currentStepIndex, isStepSubmitted }) {
  const location = useLocation();

  const steps = [
    { path: "/Cart", label: "Cart" },
    { path: "/checkout/ContactInformation", label: "Contact Information" },
    { path: "/checkout/ShipmentInformation", label: "Shipment Information" },
  ];

  return (
    <div className={styles.breadcrumbs}>
      {steps.map((step, index) => {
        const isActive = location.pathname === step.path;
        const isClickable = index <= currentStepIndex || isStepSubmitted;

        return (
          <span key={step.path}>
            {isActive ? (
              <span className={styles.active}>{step.label}</span>
            ) : isClickable ? (
              <Link to={step.path} className={styles.link}>
                {step.label}
              </Link>
            ) : (
              <span className={styles.disabled}>{step.label}</span>
            )}
            {index < steps.length - 1 && " > "}
          </span>
        );
      })}
    </div>
  );
}
