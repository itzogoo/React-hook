import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import "./MovieList.css";

const MovieCard = ({ title, description, trailerURL, rating , id}) => {
  return (
    <Link to={`/movie/${id}`}>
        <div className="container">  
          <iframe src={trailerURL} allowFullScreen/>
           
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Rating: {rating}</p>
      </div>
    </Link>



    
  );
}

MovieCard.propTypes = {
  description: PropTypes.number,
  trailerURL: PropTypes.string,
  rating: PropTypes.number,
  title: PropTypes.string
}



export default MovieCard;
