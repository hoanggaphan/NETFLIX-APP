import axios from 'axios';
import { likeReq, updateUserReq } from '../types';
import { ipLocal } from './Constants';

export async function likeEpisode(likeReq: likeReq) {
  const res = await axios.post(
    `http://${ipLocal}:3000/api/v1/users/like-episode`,
    likeReq
  );
  return res.data;
}

export async function updateInfo(
  userId: string,
  token: string,
  updateUserReq: updateUserReq
) {
  const res = await axios.put(
    `http://${ipLocal}:3000/api/v1/users/${userId}`,
    updateUserReq,
    {
      headers: {
        'x-access-token': token,
      },
    }
  );
  return res.data;
}
