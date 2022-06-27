import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {
  getGoodMovies,
  getMovies,
  getMoviesPopularInNetflix,
  getNewUpdatedMovies,
  getRandomMovies,
} from '../api/MovieApi';
import { Body, Screen } from '../components';
import CarouselCards from '../components/Carousel';
import Header from '../components/Header';
import MoviesRow from '../components/MoviesRow';
import { useTheme } from '../context/ThemeProvider';
import { Movie } from '../types/movie';

const HomeScreen: React.FC = () => {
  const theme = useTheme();
  const [data, setData] = useState<Movie[]>([]);
  const [moviesRandom, setMoviesRandom] = useState<Movie[]>([]);
  const [netflix, setNetflix] = useState<Movie[]>([]);
  const [goodMovie, setGoodMovie] = useState<Movie[]>([]);
  const [newMovie, setNewMovie] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies()
      .then((res) => setData(res))
      .catch((err) => console.error(err));
    getRandomMovies()
      .then((res) => setMoviesRandom(res))
      .catch((err) => console.error(err));
    getMoviesPopularInNetflix()
      .then((res) => setNetflix(res))
      .catch((err) => console.error(err));
    getGoodMovies()
      .then((res) => setGoodMovie(res))
      .catch((err) => console.error(err));
    getNewUpdatedMovies()
      .then((res) => setNewMovie(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Screen style={{ backgroundColor: theme?.theme.backgroundColor }}>
      <Header />

      <Body>
        <View style={{ marginTop: 15 }}>
          <CarouselCards />

          <View style={{ marginTop: 35 }}>
            <MoviesRow title='Phim đã xem' data={data} />
          </View>
          <View style={{ marginTop: 35 }}>
            <MoviesRow title='Mới cập nhật' data={newMovie} />
          </View>
          <View style={{ marginTop: 35 }}>
            <MoviesRow title='Phổ biến trên Netflix' data={netflix} />
          </View>
          <View style={{ marginTop: 35 }}>
            <MoviesRow title='Phim hay' data={goodMovie} />
          </View>
          <View style={{ marginTop: 35 }}>
            <MoviesRow title='Ngẫu nhiên' data={moviesRandom} />
          </View>
        </View>
      </Body>
    </Screen>
  );
};

export default HomeScreen;
