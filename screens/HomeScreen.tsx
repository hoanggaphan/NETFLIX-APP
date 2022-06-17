// import { useNavigation } from '@react-navigation/native';
// import { Button } from '@rneui/base';
import React from 'react';
import { Body, Screen } from '../components';
import Header from '../components/Header';
import { useTheme } from '../context/ThemeProvider';
// import { RootStackParamList } from '../types/navigation';
import { Button } from '@rneui/base';
import { View } from 'react-native';
import CarouselCards from '../components/Carousel';
import MoviesRow from '../components/MoviesRow';

// type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen: React.FC = () => {
  // const navigation = useNavigation<HomeScreenNavigationProp>();
  const theme = useTheme();

  return (
    <Screen style={{ backgroundColor: theme?.theme.backgroundColor }}>
      <Header />

      <Body>
        {/* <Button
          title='Go to One piece movie detail'
          onPress={() => navigation.navigate('Detail', { name: 'One piece' })}
        /> */}

        {/* <Button
          title='Đổi màu'
          onPress={() => theme?.updateTheme(theme.theme.themeMode)}
        /> */}

        <View style={{ marginTop: 15 }}>
          <CarouselCards />

          <View style={{ marginTop: 35 }}>
            <MoviesRow title='Phim đã xem' />
          </View>
          <View style={{ marginTop: 35 }}>
            <MoviesRow title='Phổ biến trên Netflix' />
          </View>
          <View style={{ marginTop: 35 }}>
            <MoviesRow title='Hiện đang thịnh hành' />
          </View>
          <View style={{ marginTop: 35 }}>
            <MoviesRow title='Netflix bản quyèn' />
          </View>
        </View>
      </Body>
    </Screen>
  );
};

export default HomeScreen;
