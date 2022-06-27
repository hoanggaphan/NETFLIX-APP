import axios from 'axios';
import { ipLocal } from './Constants';

export async function getEpisode(id: string) {
  const res = await axios.get(`http://${ipLocal}:3000/api/v1/episodes/${id}`);
  return res.data;
}
