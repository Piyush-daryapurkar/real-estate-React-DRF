import React from 'react';
import '../style.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Feel free to reach out!</p>
      </div>

      <div className="contact-content">
        {/* Contact Info Section */}
        <div className="contact-info">
          <h2>Our Office</h2>
          <p>
            📍 Bhopal, Madhya Pradesh<br />
            🏢 EstateHub Pvt. Ltd.<br />
            🕐 Mon - Sat: 10AM - 6PM
          </p>

          <h2>Contact Details</h2>
          <p>
            📞 +91 9876543210<br />
            📧 support@estatehub.com
          </p>

          <h2>Follow Us</h2>
          <p>
            🔗 Instagram | Facebook | LinkedIn
          </p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" className="contact-input" />
            <input type="email" placeholder="Your Email" className="contact-input" />
            <input type="text" placeholder="Subject" className="contact-input" />
            <textarea placeholder="Message" rows="5" className="contact-textarea"></textarea>
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
