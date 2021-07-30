import * as types from './action-types';

export default function mainReducer(state, action){
    const newState = {...state}

    switch(action.type){
        
        case(types.ACT_SET_TITLE):
            newState.title = action.title
            break

        case(types.ACT_SET_MOVIES):
            newState.movies = action.movies
            break

        case(types.ACT_SET_MYLIST):
            newState.mylist = [
                action.movie,
                ...newState.mylist
            ]
            break

        case(types.ACT_SET_SELECTED):
            newState.selected = 
                newState.movies.filter((movie) => (
                    movie.id == action.id
                ))
            break

        default:
            break
    }
    return newState
}