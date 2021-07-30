import React from 'react';
import './style.css'
const MyMovie = ({poster_path ,title, score, review}) => {
    return (
   
        <div className="MyMovie animate__animated animate__pulse">
            <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face"+ poster_path} 
                alt={title}
            />
            <p>{title}</p>

            <p>My Review: {review}</p>
            <p>My score: {score}</p>
        </div>
    );
}
 
export default MyMovie;