// src/pages/RateRestaurantPage.js
import React, { useState } from "react";

function RateRestaurantPage() {
  const [userId, setUserId] = useState("");
  const [restaurantId, setRestaurantId] = useState("");
  const [stars, setStars] = useState(1);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const ratingData = { userId, restaurantId, stars };

    try {
      const response = await fetch("http://localhost:3000/rate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ratingData),
      });

      if (response.ok) {
        console.log("Rating added successfully!");
      } else {
        console.error("Error adding rating");
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  return (
    <div>
      <h1>Rate a Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <div>
          <label>Restaurant ID:</label>
          <input type="text" value={restaurantId} onChange={(e) => setRestaurantId(e.target.value)} />
        </div>
        <div>
          <label>Stars (1-5):</label>
          <input type="number" value={stars} min="1" max="5" onChange={(e) => setStars(e.target.value)} />
        </div>
        <button type="submit">Rate Restaurant</button>
      </form>
    </div>
  );
}

export default RateRestaurantPage;
