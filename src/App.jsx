// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersPage from './pages/UsersPage'; 
import RecommendationsPage from './pages/RecommendationsPage'; // Import the RecommendationsPage component
import CreateUserPage from './pages/CreateUserPage'; 
import RestaurantsPage from './pages/RestaurantsPage'; 
import RateRestaurantPage from './pages/RateRestaurantPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/create-user" element={<CreateUserPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/rate" element={<RateRestaurantPage />} />
        <Route path="/recommendations/:userId" element={<RecommendationsPage />} /> {/* Route for Recommendations */}
      </Routes>
    </Router>
  );
}

export default App;
