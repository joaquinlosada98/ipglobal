import * as types from './action-types';

export function actSetTitle(title){
    return {
        type: types.ACT_SET_TITLE,
        title: title
    }
}

export function actSetMovies(movies){
    return {
        type: types.ACT_SET_MOVIES,
        movies: movies
    }
}

export function actSetMyList(movie){
    return {
        type: types.ACT_SET_MYLIST,
        movie: movie
    }
}

export function actSetSelected(id){
    return {
        type: types.ACT_SET_SELECTED,
        id: id 
    }
}