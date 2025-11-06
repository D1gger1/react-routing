import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
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
      <div className={styles.breadcrumb}>
        <Breadcrumb />
      </div>
      <h1 className={styles.title}>Contact Information</h1>
      <form action="" onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.containerForm}>
            <div className={styles.field}>
              <label className={styles.titleField}>First Name*</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                className={styles.inputField}
              />
              {formik.errors.firstName && <div className={styles.error}>{formik.errors.firstName}</div>}
            </div>

            <div className={styles.field}>
              <label className={styles.titleField}>Last Name*</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                className={styles.inputField}
              />
              {formik.errors.lastName && <div className={styles.error}>{formik.errors.lastName}</div>}
            </div>

            <div className={styles.field}>
              <label className={styles.titleField}>Email*</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={styles.inputField}
              />
              {formik.errors.email && <div className={styles.error}>{formik.errors.email}</div>}
            </div>

            <div className={styles.field}>
              <label className={styles.titleField}>Phone*</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                className={styles.inputField}
              />
              {formik.errors.phone && <div className={styles.error}>{formik.errors.phone}</div>}
          </div>
        </div>
        <button className={styles.nextStep} type="submit">
          Next Step
        </button>
      </form>
    </div>
  )
}