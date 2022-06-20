import { useNavigation } from '@react-navigation/native';
import { Icon, Image } from '@rneui/base';
import { useMemo } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { BoldText } from '.';
import { useTheme } from '../context/ThemeProvider';
import { Movie } from '../types/movie';
import { DetailScreenNavigationProp } from '../types/navigation';

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

export default ({ title, data }: { title: string; data: Movie[] }) => {
  const theme = useTheme();
  const navigation = useNavigation<DetailScreenNavigationProp>();

  const MovieItem = ({ item, index }: { item: Movie; index: number }) => {
    const handlePress = () => {
      navigation.navigate('Detail', { id: item.id, title: item.name });
    };

    return (
      <View style={styles.container} key={index}>
        <Image
          onPress={handlePress}
          style={styles.img}
          source={{ uri: item.cover_img }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
    );
  };

  const MemoizedMovieItem = useMemo(() => MovieItem, [data]);

  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: 15,
        }}
      >
        <BoldText
          style={{
            color: theme?.theme.textColor,
            textTransform: 'capitalize',
            fontSize: 13,
            marginRight: 7,
          }}
        >
          {title}
        </BoldText>

        <Icon
          size={22}
          color={theme?.theme.iconColor}
          name='keyboard-arrow-right'
          type='MaterialIcons'
        />
      </View>

      <FlatList
        data={data}
        renderItem={MemoizedMovieItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
