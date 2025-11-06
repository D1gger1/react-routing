import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import styles from "./ShipmentInformation.module.css"

export default function ShippingInformation() {
    return (
        <div className={styles.container}>
            <div className={styles.breadcrumb}>
                <Breadcrumb />
            </div>
            <h1 className={styles.title}>Shipping Information</h1>
        </div>
    )
}