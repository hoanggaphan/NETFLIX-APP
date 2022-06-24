import axios from 'axios';
import { ipLocal } from './Constants';

export async function getMovies() {
  const res = await axios.get(`http://${ipLocal}:3000/api/v1/movies`);
  return res.data;
}

export async function getMovie(id: string) {
  const res = await axios.get(
    `https://62a9a4c63b3143855437cc70.mockapi.io/api/v1/movies/${id}`
  );
  return res.data;
}

export async function getMoviesCarousel() {
  const res = await axios.get(
    'https://62a9a4c63b3143855437cc70.mockapi.io/api/v1/carousels'
  );
  return res.data;
}
