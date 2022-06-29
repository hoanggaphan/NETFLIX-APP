import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types';
import { RootState } from '../store';

interface AuthState {
  user: User | null;
  accessToken: string;
  refreshToken: string;
}

const initialState: AuthState = {
  user: null,
  accessToken: '',
  refreshToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, accessToken, refreshToken },
      }: PayloadAction<{
        user: User | null;
        accessToken: string;
        refreshToken: string;
      }>
    ) => {
      state.user = user;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    },
    setUser: (
      state,
      {
        payload: { user },
      }: PayloadAction<{
        user: User | null;
      }>
    ) => {
      state.user = user;
    },
  },
});

export const { setCredentials, setUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectAccessToKen = (state: RootState) => state.auth.accessToken;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;

export default authSlice.reducer;
