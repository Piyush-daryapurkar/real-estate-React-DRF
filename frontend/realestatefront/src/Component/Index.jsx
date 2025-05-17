import React from 'react';
import '../style.css';

const Home = () => {
  return (
    <div className="home-container">

      <section className="section bg-properties">
        <div className="card-box">
          <h2>Properties</h2>
          <p>View all available properties with location & type.</p>
          <a href="/properties" className="btn">Go to Properties</a>
        </div>
      </section>

      <section className="section bg-pg">
        <div className="card-box">
          <h2>PG & Hostel</h2>
          <p>See vacant rooms, bed availability & generate monthly bill.</p>
          <a href="/pg" className="btn">Visit PG Module</a>
        </div>
      </section>

      <section className="section bg-buy">
        <div className="card-box">
          <h2>Buy / Sell / Rent</h2>
          <p>Submit your request to buy, sell or rent properties.</p>
          <a href="/form" className="btn">Fill the Form</a>
        </div>
      </section>

      <section className="section bg-contact">
        <div className="card-box">
          <h2>Contact Us</h2>
          <p>Have questions? Reach out to our support team.</p>
          <a href="/contact" className="btn">Contact Page</a>
        </div>
      </section>

    </div>
  );
};

export default Home;
