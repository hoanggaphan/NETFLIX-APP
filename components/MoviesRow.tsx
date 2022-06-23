import { useNavigation } from '@react-navigation/native';
import { Icon, Image } from '@rneui/base';
import { LinearGradient } from 'expo-linear-gradient';
import { useMemo } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { BaseText, BoldText } from '.';
import { useTheme } from '../context/ThemeProvider';
import { Movie } from '../types/movie';
import { RootStackNavigationProp } from '../types/navigation';

const styles = StyleSheet.create({
  container: {
    marginRight: 7,
  },
  img: {
    width: 122,
    height: 180,
    borderRadius: 10,
  },
  title: {
    fontSize: 11,
    position: 'absolute',
    left: 10,
    bottom: 10,
    paddingRight: 10,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
  },
});

export default ({ title, data }: { title: string; data: Movie[] }) => {
  const theme = useTheme();
  const navigation = useNavigation<RootStackNavigationProp>();

  const MovieItem = ({ item, index }: { item: Movie; index: number }) => {
    const handlePress = () => {
      navigation.navigate('Detail', { id: item.id, title: item.name });
    };

    return (
      <TouchableOpacity
        onPress={handlePress}
        style={styles.container}
        key={index}
      >
        <Image
          style={styles.img}
          source={{ uri: item.cover_img }}
          PlaceholderContent={<ActivityIndicator />}
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,.7)']}
          style={styles.background}
        />
        <BaseText
          numberOfLines={2}
          style={{
            ...styles.title,
            color: theme?.theme.textColor,
          }}
        >
          {item.name}
        </BaseText>
      </TouchableOpacity>
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
