import React from 'react';
import MovieGrid from '../Movies/MovieGrid/MovieGrid';
import AddMovies from '../Movies/AddMovie/AddMovie';

const Search = () => {

    return (
        <div>
            <AddMovies/>
            <MovieGrid/> 
        </div>
    );
}
 
export default Search;