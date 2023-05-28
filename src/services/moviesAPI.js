import axios from 'axios';

const API_KEY = '?api_key=1119a115908e1b3ec65f53aa52c34c18';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fechMoviesTranding() {
  const response = await axios.get(`${BASE_URL}trending/movie/day${API_KEY}`);
  return response.data.results;
};

export async function fechMoviesQuery(query) {
  const response = await axios.get(`${BASE_URL}search/movie${API_KEY}&query=${query}`);
  return response.data.results;
};

export async function fechMoviesDetails(id) {
  const response = await axios.get(`${BASE_URL}movie/${id}${API_KEY}`);
  return response.data;
};

export async function fechMoviesCast(id) {
  const response = await axios.get(`${BASE_URL}movie/${id}/credits${API_KEY}`);
  return response.data;
};

export async function fechMoviesReviews(id) {
  const response = await axios.get(`${BASE_URL}movie/${id}/reviews${API_KEY}`);
  return response.data.results;
};
  
