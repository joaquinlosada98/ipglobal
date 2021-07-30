import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { actSetSelected, actSetMyList } from '../../../store/action-creators';
import './style.css';

const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const history = useHistory()

    const [loading, setLoading]= useState(true);
    const [formInput, setFormInput] = useState({
        score: '',
        review: ''
    })
    const details = useSelector(state => state.selected);

    useEffect(() => {
        dispatch(actSetSelected(id))
    }, [id, dispatch])
    
    useEffect(() => {
        setLoading(true)
        if(details.length > 0){
            setLoading(false)
        }
    }, [details])

    const handleChange = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formInput.score || formInput.review){
            const newMovie = {
                ...details[0],
                ...formInput
            }
    
            dispatch(actSetMyList(newMovie))
    
            setFormInput({
                score: '',
                review: ''
            })
    
            history.push("/mylist")
        }
    }


    return (
        <div className="Details animate__animated animate__pulse">
            {
                loading ? <h3>"Loading..."</h3> : 
                    ( 
                    <div className="DetailsSection">
                            <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face"+ details[0].poster_path}
                                alt={details[0].title}
                            />

                            <div>
                                <h2>{details[0].original_title}</h2>
                               
                                <div className="description">
                                    <h4>Description: </h4>
                                    <p>{details[0].overview}</p>
                                </div>

                                <div className="description2">
                                    <div>
                                        <h4>Realeased date: </h4>
                                        <p>{details[0].release_date}</p>
                                    </div>
                                    <div>
                                        <h4>Vote Avarage: </h4>
                                        <p>{details[0].vote_average}</p>
                                    </div>
                                    <div>
                                        <h4>Vote Count: </h4>
                                        <p>{details[0].vote_count}</p>
                                    </div>
                                </div>

                                <form className="Form" onSubmit={handleSubmit}>
                                    <div className="Inputs">
                                        <div>
                                            <label htmlFor="score">Your Score</label>
                                            <input type="number" min="0" max="10" name="score" id="score" onChange={handleChange} value={formInput.score}/>
                                        </div>
                                        <div>
                                            <label htmlFor="review">Your Review</label>
                                            <textarea id="review" name="review" rows="3" cols="50" onChange={handleChange} value={formInput.review}/>
                                        </div>
                                    </div>
                                    <button type="submit">Send you review</button>
                                </form>

                            </div>
                    </div>
                    
                )
            }
        
            
        </div>
    );
}
 
export default MovieDetails;