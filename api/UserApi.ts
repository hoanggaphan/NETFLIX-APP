import axios from 'axios';
import { likeReq, updatePassReq, updateUserReq } from '../types';
import { apiUrl } from './Constants';

export async function likeEpisode(token: string, likeReq: likeReq) {
  const res = await axios.post(
    // `http://${ipLocal}:3000/api/v1/users/like-episode`,
    `${apiUrl}/api/v1/users/like-episode`,
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
    // `http://${ipLocal}:3000/api/v1/users/${userId}`,
    `${apiUrl}/api/v1/users/${userId}`,
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
    // `http://${ipLocal}:3000/api/v1/users/change-password`,
    `${apiUrl}/api/v1/users/change-password`,
    updatePassReq,
    {
      headers: {
        'x-access-token': token,
      },
    }
  );
  return res.data;
}

export async function getLikeList(token: string, userId: string) {
  const res = await axios.get(
    // `http://${ipLocal}:3000/api/v1/users/like-list/${userId}`,
    `${apiUrl}/api/v1/users/like-list/${userId}`,
    {
      headers: {
        'x-access-token': token,
      },
    }
  );
  return res.data;
}
