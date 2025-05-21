import React from 'react';
import '../style.css'; // Make sure your CSS file includes footer styles

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About Section */}
       <div className="footer-about">
  <h3>About Us</h3>
  <p>
    We help you find your dream property with ease and confidence. Whether you're buying, selling, or renting — we've got you covered.
  </p><br />
  <p>
    Wide Range of Listings: Explore properties across residential, commercial, and rental spaces in prime locations.
  </p><br />
  <p>
    Verified Properties: All our listings are verified to ensure safety, transparency, and trust.
  </p><br />
  <p>
    Expert Guidance: Our team of professionals is here to assist you at every step of your real estate journey.
  </p><br />
  <p>
    Affordable Deals: We offer the best value for your investment with competitive pricing and flexible options.
  </p>
</div>


        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3><br />
          <p>Email: touterbug@gmail.com</p><br />
          <p>Phone: +91 46457890</p><br />
          <p>Address: Rigal Town, Office No. 152, Awadhpuri, Bhopal 462022</p><br />

          {/* Social Media Links */}
          <div className="footer-social"><br />
            <a href="https://www.facebook.com/profile.php?id=61572935632998" target="_blank" rel="noreferrer">
              <img src="/photoss/fb.jpeg" alt="Facebook" />
            </a><br /><br />
            <a href="https://www.instagram.com/touterbug?igsh=MW4xNno4bzBpYmN6Ng==" target="_blank" rel="noreferrer">
              <img src="/photoss/insta.webp" alt="Instagram" />
            </a><br /><br />
            <a href="https://wa.me/message/NK6WJEFZ4JVRH1" target="_blank" rel="noreferrer">
              <img src="/photoss/wtsp.webp" alt="WhatsApp" />
            </a><br /><br />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Ad Connect Website. All Rights Reserved. Made By hariom</p>
      </div>
    </footer>
  );
}

export default Footer;
