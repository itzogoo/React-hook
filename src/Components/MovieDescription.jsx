import PropTypes from "prop-types"
import React from "react";
import { Link, useParams } from "react-router-dom";


const MovieDescription = ({title, description, trailerURL,}) => {
    const {id} = useParams((m) => m.id ===
    parseInt(id))


    return (
        <div>
            <Link to="/App">Back to Home</Link>
            <div className="movie-card">
                <img src={trailerURL} alt={title} />
                <h2>{title}</h2>
                <p>{description}</p>
                {/*<p>Rating:{rating}</p>*/}
            </div>
        </div>
    );
}

MovieDescription.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  trailerURL: PropTypes.string
}

export default MovieDescription