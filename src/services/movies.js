import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmEyMDMxNTExYTZjOTQ0NTY3Zjk2N2Q0ZWU2MWViMCIsIm5iZiI6MTczODA3MjIxMi4yMjIwMDAxLCJzdWIiOiI2Nzk4ZTA5NDlhMzBhODViMjcyNDM2NWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.uHpysovH4p_4Exv9dnSwubcia1Q6rzHtGt53rYsLXgo",
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get("/trending/movie/week");
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await instance.get("/search/movie", {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
  });
  return data.results;
};

export const moviesDetails = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}`);
  return data;
};

export const moviesCast = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const getMoviesReviews = async (movieId) => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`);
  return data.results;
};
