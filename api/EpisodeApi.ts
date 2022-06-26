import axios from 'axios';
import { ipLocal } from './Constants';

export async function getEpisodes() {
  const res = await axios.get(
    `https://62a9a4c63b3143855437cc70.mockapi.io/api/v1/episodes`
  );
  return res.data;
}

export async function getEpisode(id: string) {
  const res = await axios.get(
    `https://62a9a4c63b3143855437cc70.mockapi.io/api/v1/episodes/${id}`
  );
  return res.data;
}

export async function getEpisodeByMovieId(id: string) {
  const res = await axios.get(`http://${ipLocal}:3000/api/v1/episodes/${id}`);
  return res.data;
}
