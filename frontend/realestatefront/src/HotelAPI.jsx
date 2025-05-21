import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch available rooms
export const fetchAvailableRooms = async () => {
  try {
    const response = await api.get('rooms/available/');
    return response.data;
  } catch (error) {
    console.error("Error fetching available rooms:", error);
    throw error;
  }
};

// Create a new booking
// bookingData = { user: userId, room: roomId, check_in: 'YYYY-MM-DD', check_out: 'YYYY-MM-DD', total_price: number }
export const createBooking = async (bookingData) => {
  try {
    const response = await api.post('bookings/', bookingData);
    return response.data;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};
