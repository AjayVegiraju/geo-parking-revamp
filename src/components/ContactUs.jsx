import React from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => (
  <section className="contact-us" id="contact-us">
    <div className="contact-us-info">
      <div className="contact-us-details">
        <h2>Get In Touch</h2>
        <p className="contact-description">
          Interested in learning more about how GeoParking can help you contribute to a greener future? Contact us today!
        </p>
        <p className="contact-detail"><strong>Email:</strong> Parking@GeoParking.com</p>
        <p className="contact-detail"><strong>Phone:</strong> +1-425-459-8400</p>
        <p className="contact-detail"><strong>Address:</strong> 800 Bellevue Way NE, Suite #500, Bellevue, WA 98004, USA</p>
        <button className="contact-button">Contact Us</button>
      </div>
      <div className="contact-us-map">
        <iframe
          title="GeoParking Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.4981205682467!2d-122.20136018439434!3d47.61635127918438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906aba7cf8b51f%3A0x8c6f57a6e1f94618!2s800%20Bellevue%20Way%20NE%20%23500%2C%20Bellevue%2C%20WA%2098004%2C%20USA!5e0!3m2!1sen!2s!4v1605741556880!5m2!1sen!2s"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  </section>
);

export default ContactUs;
