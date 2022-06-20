export type Movie = {
  id: string;
  name: string;
  description: string;
  cover_img: string;
  banner_img: string;
  format: number;
  status: number;
  start_date: string;
  trailer_url: string;
  eposides_count: number;
  eposide_duration: number;
  score: number;
  genres: string[];
  recommendations: Movie[];
  actors: string[];
  creators: string[];
  episodes: Episode[];
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
