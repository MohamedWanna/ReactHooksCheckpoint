import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  console.log(movies)
  return (
    <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
      {movies.map((el, i) => (
        <MovieCard el ={el} key={i}/>
      ))}
    </div>
  );
};

export default MovieList;
