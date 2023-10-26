

import React from 'react';


function MovieList ({movies})  {
  return (
    <>
      <div>
        {movies.map(({movie, index}) => (
          <MovieCard
            key={index}
            title={movie.title}
            description={movie.description}
            posterURL={movie.posterURL}
            rating={movie.rating}
          />
    ))}
      </div>
    </>
  )
}
  
  export default MovieList;