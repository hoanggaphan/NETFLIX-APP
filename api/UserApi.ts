import axios from 'axios';
import { likeReq } from '../types';
import { ipLocal } from './Constants';

export async function likeEpisode(likeReq: likeReq) {
  const res = await axios.post(
    `http://${ipLocal}:3000/api/v1/users/like-episode`,
    likeReq
  );
  return res.data;
}
