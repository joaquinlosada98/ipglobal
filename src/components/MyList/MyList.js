import React from 'react';
import { useSelector } from 'react-redux';
import MyMovie from './MyMovie/MyMovie';
import './style.css';

const MyList = () => {

    const myList = useSelector(state => state.mylist)
    
    return (
        <div className="MyList">
            <h2 className="animate__animated animate__fadeIn">My List</h2>
            {
                (myList.length === 0) ? 
                    <h3 className="animate__animated animate__fadeIn">You haven't commented or rated a movie</h3>
                : 
                (
                    <div className="MyListGroup">
                       { myList.map((movie) => (
                                
                            <MyMovie
                                key={movie.id} 
                                {...movie}
                            />
                        ))}
                    </div>
                )
            }
         </div>
    );
}
 
export default MyList;