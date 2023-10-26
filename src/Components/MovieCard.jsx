
import PropTypes from "prop-types"
import React from 'react'
import "./MovieList.css"

function MovieCard ({ title, description, posterURL, rating }) {
    return (
      <div className="container">
        <img src={posterURL} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Rating: {rating}</p>
      </div>
    );
  }

  MovieCard.PropTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    posterURL: PropTypes.string,
    rating: PropTypes.number
  }

  
  export default MovieCard;