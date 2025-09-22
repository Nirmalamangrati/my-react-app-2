import React, { useEffect } from 'react';

const Movies = () => {
  useEffect(() => {
    async function fetchMovies() {
      try {
        const dataFromServer = await fetch("https://yts.mx/api/v2/list_movies.json");
        const jsonData = await dataFromServer.json();//raw string harulai JS objectmaa convert gareko
        console.log(dataFromServer); // raw Response object
        console.log(jsonData);       // parsed JSON(raw format maa vako data JSON string maa aako)
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies(); // Call the function
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <p>Check the console to see the fetched movies.</p>
    </div>
  );
};

export default Movies;
