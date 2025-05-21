import React, { useState } from 'react';
import { createData } from '../ApiServises';
import '../style.css';

const AddProperty = () => {
  const [formData, setFormData] = useState({
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
  });

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    if (imageFile) {
      data.append('image', imageFile);
    }

    try {
      await createData(data); // send FormData
      alert('Property created successfully!');
      setFormData({
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
      });
      setImageFile(null);
    } catch (error) {
      console.error('Error creating property:', error);
      alert('Failed to create property');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Property</h2>
      <form onSubmit={handleSubmit} className="property-form" encType="multipart/form-data">
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="text" name="property_type" placeholder="Type" value={formData.property_type} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
        <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
        <input type="text" name="zipcode" placeholder="Zipcode" value={formData.zipcode} onChange={handleChange} required />
        <input type="number" name="bedrooms" placeholder="Bedrooms" value={formData.bedrooms} onChange={handleChange} required />
        <input type="number" name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} required />
        <input type="number" name="area_sqft" placeholder="Area (sq. ft.)" value={formData.area_sqft} onChange={handleChange} required />
        <label>
          Available:
          <input type="checkbox" name="available" checked={formData.available} onChange={handleChange} />
        </label>
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
