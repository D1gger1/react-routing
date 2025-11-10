import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Breadcrumb from "../../components/Breadcrumb";
import { useCheckoutStore } from "../../store/chekoutStore";
import styles from "./ContactInformation.module.css";

export default function ContactInformation() {
  const navigate = useNavigate();

  const setCustomerInfo = useCheckoutStore((state) => state.setCustomerInfo);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    phone: Yup.string()
      .min(10, "Must be at least 10 digits")
      .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Contact Information", values);
      setCustomerInfo(values);
      navigate("/checkout/ShipmentInformation");
    },
  });

  return (
    <div className={styles.contact}>
      <div className={styles.breadcrumb}>
        <Breadcrumb currentStepIndex={1} isStepSubmitted={false} />

      </div>
      <h1 className={styles.title}>Contact Information</h1>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.containerForm}>
          <div className={styles.field}>
            <label className={styles.titleField}>First Name*</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              className={`${styles.inputField} ${formik.errors.firstName ? styles.errorInput : ""}`}
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
              className={`${styles.inputField} ${formik.errors.lastName ? styles.errorInput : ""}`}
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
              className={`${styles.inputField} ${formik.errors.email ? styles.errorInput : ""}`}
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
              className={`${styles.inputField} ${formik.errors.phone ? styles.errorInput : ""}`}
            />
            {formik.errors.phone && <div className={styles.error}>{formik.errors.phone}</div>}
          </div>
        </div>
        <button className={styles.nextStep} type="submit">
          Next Step
        </button>
      </form>
    </div>
  );
}
