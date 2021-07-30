import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

const Movie = ({id, title, poster_path, release_date}) => {

    const history = useHistory();
    
    const handleClick = () => {
        history.push(`/${id}`)
    }
    
    return (
        <div className="Movie animate__animated animate__fadeIn">
            <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face"+ poster_path} 
                alt={title}
                onClick={handleClick}
            />
            <p>{title}</p>
            <p>Release: {release_date}</p>
        </div>
    )
}

export default Movie