export type registerReq = {
  username: string;
  password: string;
  password_confirmation: string;
};

export type loginReq = {
  username: string;
  password: string;
};

export type likeReq = {
  userId: string;
  episodeId: string;
};

export type updateUserReq = {
  avatar?: string;
  fullName?: string;
  email?: string;
  phone?: string;
};

export type updatePassReq = {
  userId: string;
  oldPass: string;
  newPass: string;
};

export type loginRes = {
  _id: string;
  username: string;
  fullName: string;
  email: string;
  phone: string;
  avatar: string;
  roles: string[];
  likeList: string[];
  accessToken: string;
  refreshToken: string;
};

export type User = {
  _id: string;
  username: string;
  fullName: string;
  email: string;
  phone: string;
  avatar: string;
  roles: string[];
  likeList: string[];
};

export type Movie = {
  _id: string;
  name: string;
  description: string;
  coverImg: string;
  bannerImg: string;
  trailerUrl: string;
  episodesCount: number;
  score: number;
  genres: string[];
  actors: string[];
  creators: string[];
  createdAt: number;
  updatedAt: number;
  episodes: Episode[];
};

export type Episode = {
  _id: string;
  name: string;
  movieId: string;
  img: string;
  subName: string;
  duration: number;
  videoUrl: string;
  episodes: Episode[];
};
