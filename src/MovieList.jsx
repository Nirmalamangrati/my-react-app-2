import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const movies = [
  { title: "The Legend of Ochi", img: "/1.jpg" },
  { title: "Rosario", img: "/2.jpg" },
  { title: "A Breed Apart", img: "/4.jpg" }
];

const MovieList = () => (
  <section className="movies">
    <h2 className='h2'>⭐ Popular Downloads</h2>
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} title={movie.title} img={movie.img} />
      ))}
    </div>
  </section>
);

export default MovieList;
