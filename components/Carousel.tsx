import { Image } from '@rneui/base';
import { useRef } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);

const data = [
  {
    imgUrl:
      'https://photo-cms-giaoduc.zadn.vn/w700/Uploaded/2022/rutmne/2013_02_19/nguoi-nhen.jpg',
  },
  {
    imgUrl:
      'https://photo-cms-giaoduc.zadn.vn/w700/Uploaded/2022/rutmne/2013_02_19/nguoi-nhen.jpg',
  },
  {
    imgUrl:
      'https://photo-cms-giaoduc.zadn.vn/w700/Uploaded/2022/rutmne/2013_02_19/nguoi-nhen.jpg',
  },
];

const CarouselCardItem = ({ item, index }: any) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        style={styles.img}
        source={{ uri: item.imgUrl }}
        PlaceholderContent={<ActivityIndicator />}
      />
    </View>
  );
};

const CarouselCards = () => {
  const isCarousel = useRef(null);

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
