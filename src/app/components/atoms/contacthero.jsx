"use client";

import React, { useState } from "react";
import styles from "./contacthero.module.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Can't be empty!";
    if (!formData.email) newErrors.email = "Can't be empty!";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form data
      console.log("Form submitted:", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <h1>Contact Us</h1>
          <p>
            Ready to take it to the next level? Let&apos;s talk about your
            project or idea and find out how we can help your business grow. If
            you are looking for unique digital experiences that&apos;s relatable
            to your users, drop us a line.
          </p>
        </div>
        <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && (
                <span className={styles.error}>
                  {errors.name} <i className="fa fa-exclamation-circle"></i>
                </span>
              )}
            </div>

            <div className={styles.inputWrapper}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <span className={styles.error}>
                  {errors.email} <i className="fa fa-exclamation-circle"></i>
                </span>
              )}
            </div>

            <div className={styles.inputWrapper}>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.inputWrapper}>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export { ContactForm };
