// src/pages/RecommendationsPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get userId from the URL

function RecommendationsPage() {
  const { userId } = useParams(); // Get userId from the route params
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch(`http://localhost:3000/recommendations/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setRecommendations(data);
        } else {
          console.error("Error fetching recommendations");
        }
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    };

    fetchRecommendations();
  }, [userId]); // Re-fetch when the userId changes

  return (
    <div>
      <h1>Restaurant Recommendations for User {userId}</h1>
      <ul>
        {recommendations.map((restaurant, index) => (
          <li key={index}>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
            <p>City: {restaurant.city}</p>
            <p>Rating: {restaurant.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationsPage;
