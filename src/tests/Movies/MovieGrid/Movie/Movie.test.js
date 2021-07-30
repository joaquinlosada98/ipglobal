import React from 'react';
import { shallow } from 'enzyme';
import Movie from '../../../../components/Movies/MovieGrid/Movie/Movie'

describe('Pruebas en <Movie/>', () => {
    const id = 123;
    const title = "Un titulo";
    const poster_path = "https://www.themoviedb.org/t/p/w220_and_h330_face/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg";
    const release_date = "un fecha";


    const wrapper = shallow(<Movie
        id
        title 
        poster_path
        release_date
    />)

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })


})