import axios from 'axios';
import { apiUrl } from './Constants';

export async function getMovies(queries: string = '') {
  const res = await axios.get(
    // `http://${ipLocal}:3000/api/v1/movies${queries}`
    `${apiUrl}/api/v1/movies${queries}`
  );
  return res.data;
}

export async function getRandomMovies(limit: string = '') {
  const res = await axios.get(
    // `http://${ipLocal}:3000/api/v1/movies/random?limit${limit}`
    `${apiUrl}/api/v1/movies/random?limit${limit}`
  );
  return res.data;
}

export async function getMoviesPopularInNetflix(limit: string = '') {
  const res = await axios.get(
    // `http://${ipLocal}:3000/api/v1/movies/popular-in-netflix?limit${limit}`
    `${apiUrl}/api/v1/movies/popular-in-netflix?limit${limit}`
  );
  return res.data;
}

export async function getGoodMovies(limit: string = '') {
  const res = await axios.get(
    // `http://${ipLocal}:3000/api/v1/movies/good?limit${limit}`
    `${apiUrl}/api/v1/movies/good?limit${limit}`
  );
  return res.data;
}

export async function getNewUpdatedMovies(limit: string = '') {
  const res = await axios.get(
    // `http://${ipLocal}:3000/api/v1/movies/new-updated?limit${limit}`
    `${apiUrl}/api/v1/movies/new-updated?limit${limit}`
  );
  return res.data;
}

export async function getMovie(id: string) {
  const res = await axios.get(
    // `http://${ipLocal}:3000/api/v1/movies/${id}`
    `${apiUrl}/api/v1/movies/${id}`
  );
  return res.data;
}
