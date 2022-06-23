import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
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
    async function getMovies() {
      try {
        const res = await axios.get(
          'https://62a9a4c63b3143855437cc70.mockapi.io/api/v1/movies'
        );
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getMovies();
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
