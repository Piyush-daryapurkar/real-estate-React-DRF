import axios from "axios";

// Update this if your backend URL is different
const API_URL = "http://127.0.0.1:8000/api/";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ Get all properties
export const getData = async () => {
  const response = await api.get('property/');
  return response.data;
};

// ✅ Update a property
export const updateData = async (id, updatedProperty) => {
  const response = await api.put(`property/${id}/`, updatedProperty);
  return response.data;
};

// ✅ Create a new property
export const createData = async (newProperty) => {
  const response = await api.post('property/', newProperty);
  return response.data;
};
