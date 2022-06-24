import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getMovies } from '../api/MovieApi';
import { Body, Screen } from '../components';
import CarouselCards from '../components/Carousel';
import Header from '../components/Header';
import MoviesRow from '../components/MoviesRow';
import { useTheme } from '../context/ThemeProvider';
import { Movie } from '../types/movie';

const HomeScreen: React.FC = () => {
  const theme = useTheme();
  const [data, setData] = useState<Movie[]>([]);

  useEffect(() => {
    getMovies()
      .then((res) => setData(res))
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
            <MoviesRow title='Phổ biến trên Netflix' data={data} />
          </View>
          <View style={{ marginTop: 35 }}>
            <MoviesRow title='Hiện đang thịnh hành' data={data} />
          </View>
        </View>
      </Body>
    </Screen>
  );
};

export default HomeScreen;
