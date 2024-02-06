import React, { useState } from 'react';
import styles from "./contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'basic', 
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Här kan du hantera inskick av formulärdata, t.ex. skicka till en server
    console.log(formData);
  };

  return (
    <section className="contact">
      <h1 className="heading">Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          {/* Input för namn */}
          <div className="inputBox">
            <span>Namn</span>
            <input type="text" placeholder="Jane Doe" name="name" required onChange={handleChange} value={formData.name} />
          </div>
          {/* Input för email */}
          <div className="inputBox">
            <span>Email</span>
            <input type="email" placeholder="example@example.com" name="email" required onChange={handleChange} value={formData.email} />
          </div>
          {/* Input för telefon */}
          <div className="inputBox">
            <span>Telefon</span>
            <input type="phone" placeholder="070-0000000" name="phone" required onChange={handleChange} value={formData.phone} />
          </div>
          {/* Select för plan */}
          <div className="inputBox">
            <span>Plan</span>
            <select name="plan" onChange={handleChange} value={formData.plan}>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="ultimate">Ultimate</option>
            </select>
          </div>
          {/* Textarea för meddelande */}
          <div className="inputBox">
            <span>Meddelande</span>
            <textarea name="message" placeholder="Message" required cols="30" rows="10" onChange={handleChange} value={formData.message}></textarea>
          </div>
        </div>
        <input type="submit" value="send message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
