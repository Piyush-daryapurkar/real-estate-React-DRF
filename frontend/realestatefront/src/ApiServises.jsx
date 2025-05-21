// ApiServises.jsx

import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/";

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getData = async () => {
    const response = await api.get('property/');
    return response.data;
};

export const createData = async (formData) => {
  const response = await api.post('property/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};
