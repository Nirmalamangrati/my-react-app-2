import React from 'react';

const MovieCard = ({ title, img }) => (
  <div className="movie-card">
    <img 
      src={img} 
      alt={title} 
      onError={e => e.target.src = "https://via.placeholder.com/200x300?text=No+Image"} 
    />
    <h3>{title}</h3>
  </div>
);

export default MovieCard;
