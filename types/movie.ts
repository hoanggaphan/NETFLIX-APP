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
};

export type Episode = {
  id: string;
  movieId: string;
  name: string;
  img: string;
  subName: string;
  duration: number;
  video_url: string;
};
