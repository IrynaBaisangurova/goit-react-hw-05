import axios from 'axios';

export const fetchMovies = async () => {
  const response = await axios.get('https://api.themoviedb.org/3');
  return response.data;
}
