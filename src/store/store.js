import { createStore } from "redux";
import mainReducer from './reducer';

const defaultData = {
    title: null,
    movies: [],
    mylist: [],
    selected: [],
    loading: true,
    
}

const appStore = createStore(mainReducer, defaultData);

export default appStore