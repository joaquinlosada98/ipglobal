export const getMovies = async (title) => {
    const api_key = "8f781d70654b5a6f2fa69770d1d115a3"
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${encodeURI(title)}`
    const resp = await fetch(url)
    const {results} = await resp.json();
  
    return results
}
