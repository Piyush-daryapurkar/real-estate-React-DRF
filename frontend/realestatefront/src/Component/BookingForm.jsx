// src/components/BookingForm.jsx
import React, { useState } from 'react';
import API from '../api';

function BookingForm() {
  const [room, setRoom] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const bookRoom = async () => {
    const userId = 1; // Replace with actual user ID from auth
    const res = await API.post('bookings/', {
      user: userId,
      room: parseInt(room),
      check_in: checkIn,
      check_out: checkOut,
    });
    alert('Booked successfully! Total bill: ₹' + res.data.total_price);
  };

  return (
    <div className="p-4">
      <h2>Book Room</h2>
      <input type="number" placeholder="Room ID" value={room} onChange={e => setRoom(e.target.value)} />
      <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
      <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
      <button onClick={bookRoom}>Book Now</button>
    </div>
  );
}

export default BookingForm;
