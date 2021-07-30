import {useFetchMovies} from '../../hooks/useFetchMovies';
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchMovies', () => {

    test('debe de retornar el estado inicial', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchMovies('Star Wars') );
        const { data } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
    })

    test('debe de retornar un arreglo de objetos', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchMovies('Kill Bill') );
        await waitForNextUpdate();

        const { data } = result.current;

        expect( data.length ).toBe( 10 );
    })
    

})