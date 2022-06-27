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
