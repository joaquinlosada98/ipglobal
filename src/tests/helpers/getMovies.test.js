import { getMovies } from "../../helpers/getMovies";

describe('Pruebas con getMovies', () => {
    test('debe de traer al menos 20 elementos', async() => {
        const movies = await getMovies('Star Wars');
        expect(movies.length).toBe(20);
    })
})