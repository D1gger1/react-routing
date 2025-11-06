import React from "react";
import Breadcrumb from "../../components/Breadcrumb";

export default function ShippingInformation() {
    return (
        <div>
            <div className={styles.breadcrumb}>
                <Breadcrumb />
            </div>
            <h1>Shipping Information</h1>
        </div>
    )
}