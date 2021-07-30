import { useEffect, useState } from 'react';
import { getMovies } from '../helpers/getMovies';

export const useFetchMovies = (title) => {
    const [state, setState] = useState({
        data: []
    })
    useEffect(() => {
        if(title) { 
            getMovies(title)
            .then(results => {
                setState({
                    data: results
                })
            })
        }
    }, [title]);

    return state
}