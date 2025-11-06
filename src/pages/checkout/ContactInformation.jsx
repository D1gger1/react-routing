import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import styles from "./ContactInformation.module.css"

export default function ContactInformation() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = "Required";
      }
      if (!values.lastName) {
        errors.lastName = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.phone) {
        errors.phone = "Required";
      } else if (!/^\+?[1-9]\d{1,14}$/i.test(values.phone)) {
        errors.phone = "Invalid phone number";
      }
      return errors;
    },

    onSubmit: (values) => {
      console.log("Contact Information", values);
      navigate("/checkout/ShipmentInformation");
    },
  });

  return (
    <div className={styles.contact}>
      <div className={styles.breadcrumbs}>
        <span>Cart</span> &gt;
        <span>Contact Information</span> &gt;
        <span>Shipment Information</span>
      </div>
      <h1>Contact Information</h1>

      <form action="" onSubmit={formik.handleSubmit} className={styles.form}>
        <label>
          First Name*
        </label>
        <input type="text"
          name="firstName"
          placeholder="Enter your first name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName && <div className={styles.error}>{formik.errors.firstName}</div>}
        <label>
          Last Name*
        </label>
        <input type="text"
          name="lastName"
          placeholder="Enter your last name"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName && <div className={styles.error}>{formik.errors.lastName}</div>}
        <label>
          Email*
        </label>
        <input type="email"
          name="email"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <div className={styles.error}>{formik.errors.email}</div>}
        <label>
          Phone*
        </label>
        <input type="tel"
          name="phone"
          placeholder="Enter your phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        {formik.errors.phone && <div className={styles.error}>{formik.errors.phone}</div>}
        <button className={styles.nextStep} type="submit">
          Next Step
        </button>
      </form>
    </div>


  )
}