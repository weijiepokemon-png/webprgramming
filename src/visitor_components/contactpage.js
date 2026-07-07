import React, { useState } from "react";
import HomeButton from "./homeButton";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    orderNumber: "",
    enquiry: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.subject ||
      !form.enquiry
    ) {
      alert("Please complete all required fields.");
      return;
    }

    alert("Thank you! Your enquiry has been submitted.");

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      orderNumber: "",
      enquiry: "",
    });
  };

  return (
    <div>
        <HomeButton/>

      <h1>Contact Us</h1>

      <p>
        Need help? Fill out the contact form below and our customer support team
        will respond within 24 hours.
      </p>

      <hr />

      <form onSubmit={handleSubmit}>

        <h2>Personal Information</h2>

        <label>First Name *</label><br />
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="Enter first name"
        />

        <br /><br />

        <label>Last Name *</label><br />
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Enter last name"
        />

        <br /><br />

        <label>Email Address *</label><br />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@email.com"
        />

        <br /><br />

        <label>Phone Number</label><br />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+61 400 123 456"
        />

        <hr />

        <h2>Enquiry Details</h2>

        <label>Subject *</label><br />
        <select
          name="subject"
          value={form.subject}
          onChange={handleChange}
        >
          <option value="">Select Subject</option>
          <option>General Question</option>
          <option>Product Information</option>
          <option>Order Issue</option>
          <option>Shipping</option>
          <option>Payment</option>
          <option>Return & Refund</option>
          <option>Technical Support</option>
        </select>

        <br /><br />

        <label>Order Number (Optional)</label><br />
        <input
          type="text"
          name="orderNumber"
          value={form.orderNumber}
          onChange={handleChange}
          placeholder="EG123456"
        />

        <br /><br />

        <label>Your Message *</label><br />
        <textarea
          rows="8"
          cols="70"
          name="enquiry"
          value={form.enquiry}
          onChange={handleChange}
          placeholder="Please describe your enquiry..."
        ></textarea>

        <br /><br />

        <input type="checkbox" required />
        <label>
          I agree that Entertainment Guild may contact me regarding my enquiry.
        </label>

        <br /><br />

        <button type="reset">Reset</button>

        <button type="submit">Submit Enquiry</button>

      </form>

      <hr />

      <h2>Customer Support</h2>

      <p><strong>Email:</strong> support@entertainmentguild.com</p>

      <p><strong>Phone:</strong> +61 1800 123 456</p>

      <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM</p>

      <p><strong>Response Time:</strong> Within 24 Hours</p>

    </div>
  );
}

export default Contact;