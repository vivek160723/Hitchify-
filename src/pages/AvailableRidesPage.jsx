import React, { useState, useEffect } from 'react';

const AvailableRidesPage = () => {
  // State to store the available rides
  const [availableRides, setAvailableRides] = useState([]);

  // Function to fetch available rides (You can replace this with your API call)
  const fetchAvailableRides = async () => {
    try {
      // Fetch data from your API endpoint
      const response = await fetch('http://localhost:3004/rides');
      if (!response.ok) {
        throw new Error('Failed to fetch available rides');
      }
      const data = await response.json();
      // Update state with fetched data
      setAvailableRides(data);
    } catch (error) {
      console.error('Error fetching available rides:', error);
    }
  };

  // Call the fetchAvailableRides function when the component mounts
  useEffect(() => {
    fetchAvailableRides();
  }, []);

  return (
    <div>
    <h2>Available Rides</h2>
    {availableRides.length > 0 ? (
      <div className="rides-grid">
        {availableRides.map((ride) => (
          <div key={ride._id} className="ride-container">
            <h3>{ride.startLocation} to {ride.endLocation}</h3>
            <p>Date: {ride.date}</p>
            <p>Time: {ride.time}</p>
            <p>Available Seats: {ride.seatsAvailable}</p>
            {/* <p>Phone Number: {ride.phoneNumber}</p> */}
            <p>Car Name: {ride.carName}</p>
            <button>Book Ride</button>
          </div>
        ))}
      </div>
    ) : (
      <p>No available rides found</p>
    )}
    <style jsx>{`
      .rides-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
      }
      
      .ride-container {
        background-color: #f2f2f2;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
      }
      
      h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        text-align: center;
      }
      
      button {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 20px;
      }
      
      button:hover {
        background-color: #3e8e41;
      }
    `}</style>
  </div>
);
};

export default AvailableRidesPage;
