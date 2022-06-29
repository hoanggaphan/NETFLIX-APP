import axios from 'axios';
import { loginReq, loginRes, registerReq } from '../types';
import { ipLocal } from './Constants';

export async function register(registerReq: registerReq) {
  const res = await axios.post(
    `http://${ipLocal}:3000/api/v1/register`,
    registerReq
  );
  return res.data;
}

export async function login(loginReq: loginReq): Promise<loginRes> {
  const res = await axios.post(`http://${ipLocal}:3000/api/v1/login`, loginReq);
  return res.data;
}
