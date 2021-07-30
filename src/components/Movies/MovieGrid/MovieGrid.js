import React, { useEffect } from 'react';
import Movie from './Movie/Movie';
import { useSelector, useDispatch } from 'react-redux';
import { useFetchMovies } from '../../../hooks/useFetchMovies';
import { actSetMovies } from '../../../store/action-creators';

import './style.css';

const MovieGrid = () => {
    const dispatch = useDispatch();
    const title = useSelector(state => state.title);
    const movies = useSelector(state => state.movies)

    const {data} = useFetchMovies(title);
   
    useEffect(() => {
        dispatch(actSetMovies(data));
    }, [data, dispatch])
    
    return (
        <div className="Movies">
            <h2 className="animate__animated animate__fadeIn">{title}</h2>

            <div  className="MoviesGroup">
            {
                (movies.length === 0) ? <h2>Hi! Search something </h2> :
                (
                     movies.map((movie) => (
                            
                        <Movie
                            key={movie.id} 
                            {...movie}
                        />
                    )
                ))
            }   
            </div>
        </div>
    )
}

export default MovieGrid