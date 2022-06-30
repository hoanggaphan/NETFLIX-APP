import axios from 'axios';
import { likeReq, updatePassReq, updateUserReq } from '../types';
import { ipLocal } from './Constants';

export async function likeEpisode(token: string, likeReq: likeReq) {
  const res = await axios.post(
    `http://${ipLocal}:3000/api/v1/users/like-episode`,
    likeReq,
    {
      headers: {
        'x-access-token': token,
      },
    }
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

export async function updateNewPass(
  token: string,
  updatePassReq: updatePassReq
) {
  const res = await axios.post(
    `http://${ipLocal}:3000/api/v1/users/change-password`,
    updatePassReq,
    {
      headers: {
        'x-access-token': token,
      },
    }
  );
  return res.data;
}
