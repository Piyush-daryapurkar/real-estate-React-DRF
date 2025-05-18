import React from 'react'
import '../style.css'

const Serviese = () => {
  return (
    <>
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

    </>
  )
}

export default Serviese
