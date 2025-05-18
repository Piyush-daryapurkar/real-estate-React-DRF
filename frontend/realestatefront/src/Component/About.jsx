import React from 'react';
import '../style.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="abt">
        <div className="text-contant">
          <h1>Why Choose Us?</h1>
          <ul>
            <li><span>Affordable Properties:~</span> We offer a wide range of budget-friendly properties that suit every need.</li>
            <li><span>Verified Listings:~</span> All our properties are verified and legally compliant for your peace of mind.</li>
            <li><span>Local Expertise:~</span> We have deep knowledge of local areas to help you find your ideal property.</li>
            <li><span>Trusted Agents:~</span> Our experienced real estate professionals guide you through every step.</li>
            <li><span>Custom Solutions:~</span> Whether you're buying, selling, or renting—we tailor services to your goals.</li>
            <li><span>Investment Advice:~</span> We help you make informed property investment decisions with real returns.</li>
            <li><span>24/7 Support:~</span> Our dedicated support team is here to assist you anytime.</li>
          </ul>
          <div className="abt-grid">
            <div className="abt-box">
              <h1>Our Mission</h1>
              <p>To make real estate simple, transparent, and accessible to everyone—whether it's a dream home or a profitable investment.</p>
            </div>
            <div className="abt-box">
              <h1>Join Us</h1>
              <p>If you're a buyer, seller, agent, or investor—partner with us to experience real estate the smart way.</p>
            </div>
          </div>
        </div>
      </div>
        <div className="about-section">
        <h1 id="abt-h1">About EstateHub Platform</h1>
        <p id="abt-para">India's trusted platform for buying, selling, and renting properties across cities and towns.</p>
        <div className="stats-grid">
          <div className="stat-box">
            <h1>Properties Listed</h1>
            <h3>5,000+</h3>
            <p>Across India</p>
          </div>
          <div className="stat-box">
            <h1>Happy Clients</h1>
            <h3>2,500+</h3>
            <p>Families & Investors</p>
          </div>
          <div className="stat-box">
            <h1>Real Estate Agents</h1>
            <h3>800+</h3>
            <p>Trusted Professionals</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default AboutPage;
