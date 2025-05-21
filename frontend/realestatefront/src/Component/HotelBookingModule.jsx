import React, { useEffect, useState } from 'react';
import { fetchAvailableRooms,createBooking } from '../HotelAPI';

const HotelBooking = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    // Fetch rooms when component mounts
    const loadRooms = async () => {
      try {
        const data = await fetchAvailableRooms();
        setRooms(data);
      } catch (error) {
        console.error('Failed to fetch rooms:', error);
      }
    };
    loadRooms();
  }, []);

  const handleBooking = async () => {
    if (!selectedRoomId) {
      alert('Please select a room to book.');
      return;
    }

    const bookingData = {
      user: 1, // Replace with actual logged-in user ID
      room: selectedRoomId,
      check_in: '2025-05-25',
      check_out: '2025-05-30',
      total_price: 5000, // Sample price
    };

    try {
      await createBooking(bookingData);
      setBookingSuccess(true);
      alert('Booking successful!');
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Rooms</h2>
      {rooms.length === 0 ? (
        <p>No rooms available right now.</p>
      ) : (
        <ul>
          {rooms.map((room) => (
            <li key={room.id}>
              <input
                type="radio"
                name="selectedRoom"
                value={room.id}
                onChange={() => setSelectedRoomId(room.id)}
              />
              Hotel: {room.hotel} | Room: {room.room_number} | Bed: {room.bed_type} | Price: ₹{room.price_per_day}
            </li>
          ))}
        </ul>
      )}

      <button onClick={handleBooking} disabled={!selectedRoomId}>
        Book Selected Room
      </button>

      {bookingSuccess && <p style={{ color: 'green' }}>Booking completed!</p>}
    </div>
  );
};

export default HotelBooking;
