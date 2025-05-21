import React, { useState, useEffect } from 'react';
import { getData, createData } from './ApiServises';
import './style.css';

const Property = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    property_type: '',
    price: '',
    location: '',
    city: '',
    state: '',
    zipcode: '',
    bedrooms: '',
    bathrooms: '',
    area_sqft: '',
    available: true,
    date_posted: '',
    image: ''
  });

  const fetchData = async () => {
    const result = await getData();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createData(form);
      fetchData();
      alert("Property added successfully!");
      setForm({
        title: '',
        description: '',
        property_type: '',
        price: '',
        location: '',
        city: '',
        state: '',
        zipcode: '',
        bedrooms: '',
        bathrooms: '',
        area_sqft: '',
        available: true,
        date_posted: '',
        image: ''
      });
    } catch (error) {
      alert("Error adding property");
      console.error(error);
    }
  };

  return (
    <div className="property-container">
      <h2 className="property-heading">Add Property</h2>
      <form onSubmit={handleSubmit} className="property-form">
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <input name="property_type" placeholder="Property Type" value={form.property_type} onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
        <input name="city" placeholder="City" value={form.city} onChange={handleChange} required />
        <input name="state" placeholder="State" value={form.state} onChange={handleChange} required />
        <input name="zipcode" placeholder="Zipcode" value={form.zipcode} onChange={handleChange} required />
        <input name="bedrooms" type="number" placeholder="Bedrooms" value={form.bedrooms} onChange={handleChange} required />
        <input name="bathrooms" type="number" placeholder="Bathrooms" value={form.bathrooms} onChange={handleChange} required />
        <input name="area_sqft" type="number" placeholder="Area (sqft)" value={form.area_sqft} onChange={handleChange} required />
        <input name="date_posted" type="date" value={form.date_posted} onChange={handleChange} required />
        <label>
          <input name="available" type="checkbox" checked={form.available} onChange={handleChange} />
          Available
        </label>
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />
        <button type="submit">Add Property</button>
      </form>

      <h2 className="property-heading">Property Listings</h2>
      <div className="property-grid">
        {data.map((item) => (
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
