import PropTypes from "prop-types"
import "./MovieList.css";

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div className="container">
      <img src={posterURL} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
}

MovieCard.propTypes = {
  description: PropTypes.number,
  posterURL: PropTypes.string,
  rating: PropTypes.number,
  title: PropTypes.string
}



export default MovieCard;
