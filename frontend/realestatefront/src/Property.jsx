import React, { useState, useEffect } from 'react';
import { getData } from './ApiServises';
import './style.css';

const Property = () => {
  const [Data, SetData] = useState([]);

  const fetchData = async () => {
    const result = await getData();
    SetData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="property-container">
      <h2 className="property-heading">Property Listings</h2>
      <div className="property-grid">
        {Data.map((item) => (
        <div key={item.id} className="property-card text-black">
  <h3 className="property-title">{item.title}</h3>
  <p><span className="label">Description:</span> {item.description}</p>
  <p><span className="label">Type:</span> {item.property_type}</p>
  <p><span className="label">Price:</span> ₹{item.price}</p>
  <p><span className="label">Location:</span> {item.location}, {item.city}, {item.state} - {item.zipcode}</p>
  <p><span className="label">Bedrooms:</span> {item.bedrooms}</p>
  <p><span className="label">Bathrooms:</span> {item.bathrooms}</p>
  <p><span className="label">Area:</span> {item.area_sqft} sq. ft.</p>
  <p><span className="label">Available:</span> {item.available ? 'Yes' : 'No'}</p>
  <p><span className="label">Date Posted:</span> {new Date(item.date_posted).toLocaleDateString()}</p>
  {item.image && (
    <img
      src={item.image}
      alt={item.title}
      className="property-image"
    />
  )}
</div>

        ))}
      </div>
    </div>
  );
};

export default Property;
