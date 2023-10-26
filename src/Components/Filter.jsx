
import React from 'react';


function Filter ({ titleFilter, onTitleChange, ratingFilter, onRatingChange })  {
    return (
      <div className="filter">
        <input
          type="text"
          placeholder="Filter by Title"
          value={titleFilter}
          onChange={onTitleChange}
        />
        <input
          type="number"
          placeholder="Filter by Title"
          value={ratingFilter}
          onChange={onRatingChange}
        />
      </div>
    );
  }

  export default Filter;