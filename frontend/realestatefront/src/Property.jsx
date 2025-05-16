import React,{useState,useEffect} from 'react'
import { getData } from './ApiServises'
import { useNavigate } from 'react-router-dom'
import './style.css';


const Property = () => {
    // const navigate=useNavigate();
      const [Data, SetData] = useState([]);

    const fetchData=async()=>{
        const result = await getData();
        SetData(result);
    }
    
    useEffect(()=>{
        fetchData()
    },[]);


  return (
    <>
         <div>
  <h2>Property Listings</h2>
  <div className="property-grid">
    {Data.map((item) => (
      <div key={item.id} className="property-card">
        <h3>{item.title}</h3>
        <p><strong>Description:</strong> {item.description}</p>
        <p><strong>Type:</strong> {item.property_type}</p>
        <p><strong>Price:</strong> ₹{item.price}</p>
        <p><strong>Location:</strong> {item.location}, {item.city}, {item.state} - {item.zipcode}</p>
        <p><strong>Bedrooms:</strong> {item.bedrooms}</p>
        <p><strong>Bathrooms:</strong> {item.bathrooms}</p>
        <p><strong>Area:</strong> {item.area_sqft} sq. ft.</p>
        <p><strong>Available:</strong> {item.available ? 'Yes' : 'No'}</p>
        <p><strong>Date Posted:</strong> {new Date(item.date_posted).toLocaleDateString()}</p>
        {item.image && (
          <img
            src={`http://localhost:8000${item.image}`}
            alt={item.title}
            width="200"
            height="150"
          />
        )}
      </div>
    ))}
  </div>
</div>
    </>
  )
}

export default Property
