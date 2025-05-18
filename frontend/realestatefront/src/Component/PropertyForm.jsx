import React, { useState } from 'react';
import axios from 'axios';
import '../style.css';

const initialForm = {
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
  date_posted: new Date().toISOString(),
  image: '',      // for preview only
  imageFile: null // actual file to upload
};

const PropertyAddForm = () => {
  const [formData, setFormData] = useState(initialForm);

  // Handle text, number, checkbox changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle file upload: save file and preview image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, imageFile: file }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit form as multipart/form-data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();

      // Append all fields except image & imageFile
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'image' && key !== 'imageFile') {
          form.append(key, value);
        }
      });

      // Append image file
      if (formData.imageFile) {
        form.append('image', formData.imageFile);
      }

      // Post data to API
      const response = await axios.post('http://127.0.0.1:8000/api/property/', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Property added successfully!');
      setFormData(initialForm);

    } catch (error) {
      console.error('Failed to add property:', error);
      alert('Failed to add property');
    }
  };

  return (
    <div className="property-add-form-container">
      <h2>Add New Property</h2>
      <form onSubmit={handleSubmit} className="property-add-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="input-field"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="text"
          name="property_type"
          placeholder="Property Type"
          value={formData.property_type}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="text"
          name="zipcode"
          placeholder="Zipcode"
          value={formData.zipcode}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="number"
          name="bedrooms"
          placeholder="Bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="number"
          name="bathrooms"
          placeholder="Bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="number"
          name="area_sqft"
          placeholder="Area (sq. ft.)"
          value={formData.area_sqft}
          onChange={handleChange}
          className="input-field"
        />

        <label className="checkbox-label">
          Available:
          <input
            type="checkbox"
            name="available"
            checked={formData.available}
            onChange={handleChange}
            className="checkbox-input"
          />
        </label>

        <label className="file-upload-label">
          Upload Photo:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="file-input"
          />
        </label>

        {formData.image && (
          <div className="preview-image">
            <img src={formData.image} alt="Preview" style={{ width: '120px', marginTop: '10px' }} />
          </div>
        )}

        <button type="submit" className="submit-btn">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default PropertyAddForm;