// src/pages/RestaurantsPage.js
import React, { useEffect, useState } from "react";

function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:3000/restaurants");
        if (response.ok) {
          const data = await response.json();
          setRestaurants(data);
        } else {
          console.error("Error fetching restaurants");
        }
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      <h1>Restaurants List</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name} - {restaurant.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantsPage;
