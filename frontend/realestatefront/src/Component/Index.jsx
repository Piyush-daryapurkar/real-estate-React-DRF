import React from "react";
import '../style.css';

function Home() {
  return (
    <div>

      {/* Page 1 - Hero Section */}
      <div id="main">
        <div id="page1">
          <h1>FIND YOUR DREAM</h1>
          <h1>HOME WITH <span>EstateHub.com</span></h1>
          <p>Connecting buyers, sellers, and renters on a single real estate platform</p>
          <div className="page1-btn">
            <button>Buy Property</button>
            <button>Sell/Rent Property</button>
          </div>
        </div>

        {/* Scrolling Features */}
        <div id="moving-div">
          <div id="blur-left"></div>
          <div className="move">
            <h2>Affordable Homes</h2>
            <h2>Luxury Villas</h2>
            <h2>Commercial Spaces</h2>
            <h2>Rental Apartments</h2>
            <h2>Verified Listings</h2>
            <h2>Easy EMI Options</h2>
          </div>
          <div className="move">
            <h2>Affordable Homes</h2>
            <h2>Luxury Villas</h2>
            <h2>Commercial Spaces</h2>
            <h2>Rental Apartments</h2>
            <h2>Verified Listings</h2>
            <h2>Easy EMI Options</h2>
          </div>
          <div id="blur-right"></div>
        </div>
      </div>

      {/* Image Slider */}
      <div className="main-slider">
        <div className="slider-container">
          <div className="slider" id="slider">
            <div className="slide"><img src="/realestate/house1.jpg" alt="House 1" /></div>
            <div className="slide"><img src="/realestate/house2.jpg" alt="House 2" /></div>
            <div className="slide"><img src="/realestate/house3.jpg" alt="House 3" /></div>
            <div className="slide"><img src="/realestate/house4.jpg" alt="House 4" /></div>
            <div className="slide"><img src="/realestate/house1.jpg" alt="House 5" /></div>
            <div className="slide"><img src="/realestate/house2.jpg" alt="House 6" /></div>
          </div>
        </div>
      </div>

      {/* Page 2 - Feature Section */}
      <div className="main-page2">
        <div className="page2">
          <div className="text">
            <h1 className="mb">
              Explore Properties For <br />
              <span>Buy, Rent & Investment</span>
            </h1>
            <p className="mb">
              We help you find residential and commercial properties at the best prices.
            </p>
          </div>
          <div className="visual">
            <img src="/realestate/home-visual.png" alt="Real Estate Visual" />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="about-page">
        <div className="abt">
          <div className="text-contant">
            <h1>Why Choose EstateHub?</h1>
            <ul>
              <li><span>Verified Listings:~</span> 100% verified properties for trust and transparency</li>
              <li><span>Affordable Deals:~</span> Best price guarantees for budget-friendly choices</li>
              <li><span>Property for Everyone:~</span> Residential, commercial, and rentals</li>
              <li><span>Easy Search:~</span> Location, budget, and type filters</li>
              <li><span>Trusted Agents:~</span> Connect with top local realtors</li>
              <li><span>24/7 Support:~</span> Property experts always ready to help</li>
            </ul>

            <div className="abt-grid">
              <div className="abt-box">
                <h1>Our Mission</h1>
                <p>To make property buying, selling, and renting simple, transparent, and hassle-free for everyone.</p>
              </div>
              <div className="abt-box">
                <h1>Join Us</h1>
                <p>Thousands of happy families trust EstateHub. List your property or find your dream home today!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section / Stats */}
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
}

export default Home;
