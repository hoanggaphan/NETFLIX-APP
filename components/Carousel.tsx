import { useNavigation } from '@react-navigation/native';
import { Image } from '@rneui/base';
import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { getMoviesCarousel } from '../api/MovieApi';
import { Movie } from '../types/movie';
import { RootStackNavigationProp } from '../types/navigation';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.78);

type CarouselCardItem = {
  item: Movie;
  index: number;
};

const CarouselCards = () => {
  const isCarousel = useRef(null);
  const [data, setData] = useState<any>([]);
  const navigation = useNavigation<RootStackNavigationProp>();

  const handlePress = (item: Movie) => {
    navigation.navigate('Detail', { id: item._id, title: item.name });
  };

  useEffect(() => {
    getMoviesCarousel()
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  const CarouselCardItem = ({ item, index }: CarouselCardItem) => {
    return (
      <TouchableOpacity
        onPress={() => handlePress(item)}
        style={styles.container}
        key={index}
      >
        <Image
          style={styles.img}
          source={{ uri: item.bannerImg }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Carousel
        layout={'default'}
        ref={isCarousel}
        data={data}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        firstItem={1}
        renderItem={CarouselCardItem}
        centerContent
      />
    </View>
  );
};

export default CarouselCards;

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    elevation: 7,
  },
  img: {
    width: ITEM_WIDTH,
    height: 200,
    borderRadius: 25,
  },
});
