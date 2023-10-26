

import PropTypes from "prop-types"
import MovieCard from './MovieCard';


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

MovieList.propTypes = {
  movies: PropTypes.shape({
    map: PropTypes.func
  })
}
  
  export default MovieList;