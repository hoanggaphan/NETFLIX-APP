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
import { getMovies } from '../api/MovieApi';
import { BaseText } from '../components';
import { useTheme } from '../context/ThemeProvider';
import { Movie } from '../types/index';
import { MainStackNavigationProp } from '../types/navigation';

const SearchScreen: React.FC = () => {
  const theme = useTheme();
  const [search, setSearch] = useState('');
  const navigation = useNavigation<MainStackNavigationProp>();
  const [data, setData] = useState([]);
  const [errMess, setErrMess] = useState('');

  const handleChange = (search: string) => {
    setSearch(search);
  };

  const handleSubmit = async () => {
    let result = [];
    if (search == '') return;
    setErrMess('');
    try {
      result = await getMovies(`?keyword=${search}&limit=30`);
    } catch (err: any) {
      if (err.response.data && err.response.data.message)
        return setErrMess(err.response.data.message);
      console.error(err);
    } finally {
      setData(result);
    }
  };

  const MovieItem = ({ item, index }: { item: Movie; index: number }) => {
    const handlePress = () => {
      navigation.navigate('Detail', { id: item._id, title: item.name });
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
          source={{ uri: item.coverImg }}
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
        onSubmitEditing={handleSubmit}
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

      {errMess.length > 0 && (
        <BaseText
          style={{
            color: theme?.theme.textColor,
            paddingLeft: 10,
            paddingTop: 10,
          }}
        >
          {errMess}
        </BaseText>
      )}

      <FlatList
        data={data}
        renderItem={MemoizedMovieItem}
        keyExtractor={(item) => item._id}
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
    paddingRight: 10,
    color: 'white',
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
