import React from 'react'
import styles from "./pricing.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
  return (
    <section className="pricing">
      <h1 className="heading">Våra Priser</h1>
      <div className="box-container">
        <div className="box">
          <h3>Basic Plan</h3>
          <div className="price">2500:-</div>
          <div className="list">
            <p><i className="fas fa-check"></i> Photography</p>
            <p><i className="fas fa-check"></i> Bride Makeup</p>
            <p><i className="fas fa-check"></i> Wedding Ceremony</p>
            <p><i className="fas fa-check"></i> Meals & Drinks</p>
            <p><i className="fas fa-check"></i> Guest Invitations</p>
          </div>
          <a href="contact.html" className="btn">Choose Plan</a>
        </div>
        <div className="box">
          <h3>Premium Plan</h3>
          <div className="price">6500:-</div>
          <div className="list">
            <p><i className="fas fa-check"></i> Photography</p>
            <p><i className="fas fa-check"></i> Bride Makeup</p>
            <p><i className="fas fa-check"></i> Wedding Ceremony</p>
            <p><i className="fas fa-check"></i> Meals & Drinks</p>
            <p><i className="fas fa-check"></i> Guest Invitations</p>
          </div>
          <a href="contact.html" className="btn">Välj Plan</a>
        </div>
        <div className="box">
          <h3>Ultimate Plan</h3>
          <div className="price">12500:-</div>
          <div className="list">
            <p><i className="fas fa-check"></i> Photography</p>
            <p><i className="fas fa-check"></i> Bride Makeup</p>
            <p><i className="fas fa-check"></i> Wedding Ceremony</p>
            <p><i className="fas fa-check"></i> Meals & Drinks</p>
            <p><i className="fas fa-check"></i> Guest Invitations</p>
          </div>
          <a href="contact.html" className="btn">Välj Plan</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
