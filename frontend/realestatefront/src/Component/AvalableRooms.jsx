// src/components/AvailableRooms.jsx
import React, { useState } from 'react';
import API from '../api';

function AvailableRooms() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async () => {
    const res = await API.get(`rooms/available/?check_in=${checkIn}&check_out=${checkOut}`);
    setRooms(res.data);
  };

  return (
    <div className="p-4">
      <h2>Check Available Rooms</h2>
      <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
      <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
      <button onClick={fetchRooms}>Search</button>
      <ul>
        {rooms.map(room => (
          <li key={room.id}>{room.hotel} - Room {room.room_number} - ₹{room.price_per_day}</li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableRooms;
