import React from 'react';
import { Rating } from 'react-simple-star-rating';


const Search = ({searchValue,SearchRating,handleRating,handleSearch}) => {
    return (
    <div className="header-container">
        <h1 className="sitetitle">Home Of Movies</h1>
        <div>
            <input value={searchValue} onChange={handleSearch} className="inputsearch" type="text" placeholder="Enter a movie to search..." />
            <Rating onClick={handleRating} ratingValue={SearchRating} /* Available Props */ />
        </div>
    </div>
    );
};

export default Search;
