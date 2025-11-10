import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { useFormik } from "formik";
import * as Yup from "yup"
import { useNavigate } from "react-router-dom";
import { useCheckoutStore } from "../../store/chekoutStore";
import styles from './ShipmentInformation.module.css'

export default function ShipmentInformation() {
    const navigate = useNavigate();

    const setShipmentInfo = useCheckoutStore((state) => state.setShipmentInfo);

    const formik = useFormik({
        initialValues: {
            address: "",
            apartment: "",
            city: "",
            country: "",
            state: "",
            zip: "",
        },
        validationSchema: Yup.object({
            address: Yup.string().required("Required"),
            apartment: Yup.string(),
            city: Yup.string().required("Required"),
            country: Yup.string().required("Required"),
            state: Yup.string().required("Required"),
            zip: Yup.string().required("Required"),
        }),
        onSubmit: (values) => {
            console.log('Shipment Information', values);
            setShipmentInfo(values);
            navigate("/checkout/FinalOrder");
        },
    });

    return (
        <div className={styles.container}>
            <div className={styles.breadcrumb}>
                <Breadcrumb currentStepIndex={2} isStepSubmitted={false} />
            </div>
            <h1 className={styles.title}>Shipment Information</h1>

            <form onSubmit={formik.handleSubmit} className={styles.form}>
                <div className={styles.containerForm}>

                    <div className={styles.fieldColumn}>
                        <label className={styles.labelField}>Address (No P. O. Boxes)*</label>
                        <input type="text"
                            name="address"
                            placeholder="Enter your address"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                            className={`${styles.inputField} ${formik.errors.address ? styles.errorInput : ""}`}
                        />
                        {formik.errors.address && <div className={styles.errors}>{formik.errors.address}</div>}
                    </div>

                    <div className={styles.fieldColumn}>
                        <label className={styles.labelField}>Apartment, suite etc. (optional)</label>
                        <input type="text"
                            name="apartment"
                            placeholder="Enter your apartment information"
                            onChange={formik.handleChange}
                            value={formik.values.apartment}
                            className={styles.inputField}
                        />
                    </div>

                    <div className={styles.fieldColumn}>
                        <label className={styles.labelField}>City*</label>
                        <input type="text"
                            name="city"
                            placeholder="Enter your city"
                            onChange={formik.handleChange}
                            value={formik.values.city}
                            className={`${styles.inputField} ${formik.errors.city ? styles.errorInput : ""}`}
                        />
                        {formik.errors.city && <div className={styles.errors}>{formik.errors.city}</div>}

                    </div>
                    <div className={styles.fieldRows}>
                        <div className={styles.field}>
                            <label className={styles.labelField}>Country/Region*</label>
                            <select
                                name="country"
                                onChange={formik.handleChange}
                                value={formik.values.country}
                                className={`${styles.inputFieldRow} ${formik.errors.country ? styles.errorInput : ""}`}
                            >
                                <option value="">Select your country/region</option>
                                <option value="Germany">Germany</option>
                                <option value="United States">United States</option>
                                <option value="France">France</option>
                                <option value="Italy">Italy</option>
                            </select>
                            {formik.errors.country && <div className={styles.errors}>{formik.errors.country}</div>}

                        </div>

                        <div className={styles.field}>
                            <label className={styles.labelField}>State*</label>
                            <select
                                name="state"
                                onChange={formik.handleChange}
                                value={formik.values.state}
                                className={`${styles.inputFieldRow} ${formik.errors.state ? styles.errorInput : ""}`}
                            >
                                <option value="">Select your state</option>
                                <option value="Thuringia">Thuringia</option>
                                <option value="Bavaria">Bavaria</option>
                                <option value="Berlin">Berlin</option>
                                <option value="North Rhine-Westphalia">North Rhine-Westphalia</option>
                                <option value="Baden-Württemberg">Baden-Württemberg</option>
                            </select>
                            {formik.errors.state && <div className={styles.errors}>{formik.errors.state}</div>}
                        </div>

                        <div className={styles.field}>
                            <label className={styles.labelField}>ZIP code*</label>
                            <input
                                type="text"
                                name="zip"
                                placeholder="Enter your ZIP code"
                                onChange={formik.handleChange}
                                value={formik.values.zip}
                                className={`${styles.inputFieldRow} ${formik.errors.zip ? styles.errorInput : ""}`}
                            />
                            {formik.errors.zip && <div className={styles.errors}>{formik.errors.zip}</div>}
                        </div>
                    </div>
                </div>

                <button type="submit" className={styles.submit}>
                    Submit order
                </button>
            </form>
        </div>
    );
}