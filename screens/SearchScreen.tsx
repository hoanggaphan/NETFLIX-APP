import { useNavigation } from '@react-navigation/native';
import { Image, SearchBar } from '@rneui/base';
import { LinearGradient } from 'expo-linear-gradient';
import { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { BaseText } from '../components';
import { useTheme } from '../context/ThemeProvider';
import { Movie } from '../types/movie';
import { DetailScreenNavigationProp } from '../types/navigation';

const data = [
  {
    createdAt: '2022-06-19T09:03:09.455Z',
    name: 'Nancy Wehner',
    description: '9=93gCk\\e=',
    cover_img: 'http://loremflickr.com/640/480/people',
    banner_img: 'http://loremflickr.com/640/480/business',
    format: 36683,
    status: 9766,
    start_date: '2073-10-09T10:25:47.236Z',
    trailer_url: '@LtUnj)>+9',
    eposides_count: 68292,
    eposide_duration: 48622,
    score: 2243,
    genres: [],
    recommendations: [],
    actors: [],
    creators: [],
    episodes: [],
    id: '1',
  },
  {
    createdAt: '2022-06-20T08:05:14.342Z',
    name: 'Dr. Rochelle Stracke',
    description: 'AnCskuC+mh',
    cover_img: 'http://loremflickr.com/640/480/city',
    banner_img: 'http://loremflickr.com/640/480/cats',
    format: 64343,
    status: 71908,
    start_date: '2061-05-27T01:36:47.789Z',
    trailer_url: '*=zO||Kxe"',
    eposides_count: 53667,
    eposide_duration: 6647,
    score: 77849,
    genres: [],
    recommendations: [],
    actors: [],
    creators: [],
    episodes: [],
    id: '2',
  },
  {
    createdAt: '2022-06-19T18:32:11.999Z',
    name: 'Kelly Graham Sr.',
    description: 'zl8JMN9QZE',
    cover_img: 'http://loremflickr.com/640/480/nature',
    banner_img: 'http://loremflickr.com/640/480/transport',
    format: 58029,
    status: 30719,
    start_date: '2006-06-05T10:08:00.081Z',
    trailer_url: 'Xfz!.MNvv|',
    eposides_count: 58606,
    eposide_duration: 84154,
    score: 97148,
    genres: [],
    recommendations: [],
    actors: [],
    creators: [],
    episodes: [],
    id: '3',
  },
  {
    createdAt: '2022-06-19T20:59:16.020Z',
    name: 'Vickie Bruen',
    description: '7g0I*a[^q/',
    cover_img: 'http://loremflickr.com/640/480/nature',
    banner_img: 'http://loremflickr.com/640/480/city',
    format: 41197,
    status: 84784,
    start_date: '2059-07-29T05:18:09.929Z',
    trailer_url: 'iil/3*M/_N',
    eposides_count: 12383,
    eposide_duration: 35195,
    score: 3553,
    genres: [],
    recommendations: [],
    actors: [],
    creators: [],
    episodes: [],
    id: '4',
  },
  {
    createdAt: '2022-06-19T21:44:28.189Z',
    name: 'Ollie Predovic',
    description: "|_.IcC#3V'",
    cover_img: 'http://loremflickr.com/640/480/people',
    banner_img: 'http://loremflickr.com/640/480/cats',
    format: 36552,
    status: 48549,
    start_date: '1996-07-16T20:25:04.789Z',
    trailer_url: 'npD)#S(rSy',
    eposides_count: 94686,
    eposide_duration: 2606,
    score: 10800,
    genres: [],
    recommendations: [],
    actors: [],
    creators: [],
    episodes: [],
    id: '5',
  },
  {
    createdAt: '2022-06-19T14:59:03.978Z',
    name: 'Eva Bayer',
    description: 'iUVt<q^$i3',
    cover_img: 'http://loremflickr.com/640/480/city',
    banner_img: 'http://loremflickr.com/640/480/fashion',
    format: 88441,
    status: 39818,
    start_date: '2093-07-26T02:52:21.509Z',
    trailer_url: '*tZG;U>"tC',
    eposides_count: 50228,
    eposide_duration: 33491,
    score: 15025,
    genres: [],
    recommendations: [],
    actors: [],
    creators: [],
    episodes: [],
    id: '6',
  },
];

const SearchScreen: React.FC = () => {
  const theme = useTheme();
  const [search, setSearch] = useState('');
  const navigation = useNavigation<DetailScreenNavigationProp>();

  const handleChange = (search: string) => {
    setSearch(search);
  };

  const MovieItem = ({ item, index }: { item: Movie; index: number }) => {
    const handlePress = () => {
      navigation.navigate('Detail', { id: item.id, title: item.name });
    };

    return (
      <TouchableOpacity
        key={index}
        style={{
          marginBottom: 20,
        }}
        onPress={handlePress}
      >
        <Image
          style={styles.size}
          source={{ uri: item.cover_img }}
          PlaceholderContent={<ActivityIndicator />}
        />

        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,.7)']}
          style={styles.background}
        />

        <BaseText
          numberOfLines={1}
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

  const MemoizedMovieItem = useMemo(() => MovieItem, [data, theme]);

  return (
    <View style={{ flex: 1, backgroundColor: theme?.theme.backgroundColor }}>
      <SearchBar
        placeholder='Tìm kiếm phim...'
        onChangeText={handleChange}
        value={search}
        containerStyle={{
          backgroundColor: theme?.theme.themeMode === 'dark' ? '#333' : 'white',
          borderTopColor: theme?.theme.themeMode === 'dark' ? '#333' : 'white',
          borderBottomColor:
            theme?.theme.themeMode === 'dark' ? '#333' : 'white',
        }}
        inputContainerStyle={{
          backgroundColor:
            theme?.theme.themeMode === 'dark' ? '#4d4d4d' : '#E5E5E5',
        }}
        placeholderTextColor={
          theme?.theme.themeMode === 'dark'
            ? 'rgba(255,255,255,.5)'
            : 'rgba(0,0,0,.5)'
        }
        inputStyle={{
          color: theme?.theme.themeMode === 'dark' ? 'white' : 'black',
        }}
        searchIcon={{
          color: theme?.theme.themeMode === 'dark' ? 'white' : 'black',
          size: 30,
        }}
        clearIcon={{
          color: theme?.theme.themeMode === 'dark' ? 'white' : 'black',
          size: 30,
        }}
      />

      <FlatList
        data={data}
        renderItem={MemoizedMovieItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    position: 'absolute',
    left: 10,
    bottom: 10,
    paddingRight: 10
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  img: {
    width: 122,
    height: 180,
    borderRadius: 10,
  },
  size: {
    width: '100%',
    height: 220,
  },
});
