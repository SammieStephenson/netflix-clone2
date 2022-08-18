const API_KEY = 'e1381035d92ebad7f940d398e162b952';

// add category  requests that we are going to be fetching from TMDB. This is basically
// a dictionary and we will be using the keys to access the link to that category.
const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;
