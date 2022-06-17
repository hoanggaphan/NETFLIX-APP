import { Icon, Image } from '@rneui/base';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { BaseText, BoldText } from '.';
import { useTheme } from '../context/ThemeProvider';

const styles = StyleSheet.create({
  container: {
    marginRight: 7,
  },
  img: {
    width: 122,
    height: 180,
    borderRadius: 10,
  },
});

const MovieItem = ({ item, index }: any) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        style={styles.img}
        source={{ uri: item.cover_img }}
        PlaceholderContent={<ActivityIndicator />}
      />
    </View>
  );
};

export default ({ title }: { title: string }) => {
  const [data, setData] = useState<any>([]);
  const theme = useTheme();

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
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
        }}
      >
        <BoldText
          style={{
            color: theme?.theme.textColor,
            textTransform: 'capitalize',
            fontSize: 13,
          }}
        >
          {title}
        </BoldText>

        <BaseText
          style={{
            color: theme?.theme.primary,
            fontSize: 13,
            marginRight: 10,
          }}
        >
          Xem thêm
        </BaseText>
      </View>

      <FlatList
        data={data}
        renderItem={MovieItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
