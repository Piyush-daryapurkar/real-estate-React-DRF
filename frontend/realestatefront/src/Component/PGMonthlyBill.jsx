// src/components/PGMonthlyBill.jsx
import React, { useState } from 'react';
import API from '../api';

function PGMonthlyBill() {
  const [room, setRoom] = useState('');
  const [month, setMonth] = useState('');

  const generateBill = async () => {
    const userId = 1; // Replace with real user auth ID
    const res = await API.post('pg/monthly-bill/', {
      user: userId,
      room: parseInt(room),
      month,
    });
    alert('PG Bill Generated: ₹' + res.data.amount);
  };

  return (
    <div className="p-4">
      <h2>PG Monthly Bill</h2>
      <input type="number" placeholder="Room ID" value={room} onChange={e => setRoom(e.target.value)} />
      <input type="month" value={month} onChange={e => setMonth(e.target.value)} />
      <button onClick={generateBill}>Generate</button>
    </div>
  );
}

export default PGMonthlyBill;
