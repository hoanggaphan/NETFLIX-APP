import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, Skeleton } from '@rneui/base';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { getEpisodes } from '../api/EpisodeApi';
import { getMovie } from '../api/MovieApi';
import { BaseText, BoldText, Screen } from '../components';
import { useTheme } from '../context/ThemeProvider';
import useIsMounted from '../hooks/useIsMounted';
import { Episode, Movie } from '../types/movie';
import {
  RootStackNavigationProp,
  RootStackRouteProp,
} from '../types/navigation';

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 200,
  },
});

const actors = [
  'AlizaBeth',
  'John Wick',
  'AlizaBeth',
  'John Wick',
  'AlizaBeth',
  'John Wick',
];

const creators = ['AlizaBeth', 'John Wick'];
const genres = ['hành động', 'tình cảm', 'hành động', 'tình cảm'];

const DetailScreen: React.FC = () => {
  const route = useRoute<RootStackRouteProp>();
  const theme = useTheme();
  const [data, setData] = useState<Movie>();
  const navigation = useNavigation<RootStackNavigationProp>();
  const [episodes, setEpisodes] = useState<Episode[]>();
  const isMounted = useIsMounted();

  useEffect(() => {
    if (route.params?.id) {
      getMovie(route.params.id)
        .then((res) => isMounted() && setData(res))
        .catch((err) => console.error(err));
    }
  }, []);

  useEffect(() => {
    getEpisodes()
      .then((res) => isMounted() && setEpisodes(res))
      .catch((err) => console.error(err));
  }, []);

  const handlePress = (id: string, title: string) => {
    navigation.navigate('Watch', { id, title });
  };

  return (
    <Screen style={{ backgroundColor: theme?.theme.backgroundColor }}>
      <View style={{ position: 'relative' }}>
        <Image
          style={styles.bg}
          source={{ uri: data?.cover_img }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        {data ? (
          <>
            <BaseText
              style={{
                color: theme?.theme.textColor,
                fontSize: 25,
                marginTop: 15,
              }}
            >
              {data?.name}
            </BaseText>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <BaseText
                style={{
                  flexBasis: 120,
                  color: theme?.theme.textColor,
                }}
              >
                Thể loại:
              </BaseText>

              <View
                style={{
                  flexBasis: 'auto',
                  flexShrink: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
              >
                {genres.map((item, i) => (
                  <BaseText
                    key={i}
                    style={{ color: theme?.theme.subTextColor, lineHeight: 20 }}
                  >
                    {item}
                    {i < genres.length - 1 ? ', ' : ''}
                  </BaseText>
                ))}
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <BaseText
                style={{
                  flexBasis: 120,
                  color: theme?.theme.textColor,
                }}
              >
                Điểm:
              </BaseText>

              <BaseText
                style={{ color: theme?.theme.subTextColor, lineHeight: 20 }}
              >
                {data?.score}
              </BaseText>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <BaseText
                style={{
                  flexBasis: 120,
                  color: theme?.theme.textColor,
                }}
              >
                Diễn viên:
              </BaseText>

              <View
                style={{
                  flexBasis: 'auto',
                  flexShrink: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
              >
                {actors.map((item, i) => (
                  <BaseText
                    key={i}
                    style={{ color: theme?.theme.subTextColor, lineHeight: 20 }}
                  >
                    {item}
                    {i < actors.length - 1 ? ', ' : ''}
                  </BaseText>
                ))}
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <BaseText
                style={{
                  flexBasis: 120,
                  color: theme?.theme.textColor,
                }}
              >
                Đạo diễn:
              </BaseText>

              <View
                style={{
                  flexBasis: 'auto',
                  flexShrink: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
              >
                {creators.map((item, i) => (
                  <BaseText
                    key={i}
                    style={{ color: theme?.theme.subTextColor, lineHeight: 20 }}
                  >
                    {item}
                    {i < creators.length - 1 ? ', ' : ''}
                  </BaseText>
                ))}
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <BaseText
                style={{
                  flexBasis: 120,
                  color: theme?.theme.textColor,
                }}
              >
                Số tập:
              </BaseText>

              <BaseText style={{ color: theme?.theme.subTextColor }}>
                {data?.eposides_count}
              </BaseText>
            </View>

            <BoldText style={{ marginTop: 40, color: theme?.theme.textColor }}>
              Danh sách tập
            </BoldText>

            <View style={{ marginTop: 15 }}>
              {episodes?.map((item, i) => (
                <TouchableOpacity
                  key={i}
                  style={{
                    flexDirection: 'row',
                    marginBottom: 13,
                  }}
                  onPress={() => handlePress(item.id, item.name)}
                >
                  <Image
                    style={{
                      width: 160,
                      height: 90,
                    }}
                    source={{ uri: item.img }}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                  <View style={{ marginLeft: 15, flexShrink: 1 }}>
                    <BaseText
                      numberOfLines={2}
                      style={{ fontSize: 15, color: theme?.theme.textColor }}
                    >
                      {item.name}
                    </BaseText>
                    <BaseText
                      numberOfLines={1}
                      style={{
                        marginTop: 8,
                        fontSize: 12,
                        color: theme?.theme.subTextColor,
                      }}
                    >
                      {item.subName} - {item.duration} phút
                    </BaseText>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </>
        ) : (
          <>
            <View style={{ marginTop: 15, width: '100%' }}>
              <Skeleton height={12} />
            </View>
            <View style={{ marginTop: 15, width: '100%' }}>
              <Skeleton height={12} />
            </View>
            <View style={{ marginTop: 15, width: '100%' }}>
              <Skeleton height={12} />
            </View>
            <View style={{ marginTop: 15, width: '100%' }}>
              <Skeleton height={12} />
            </View>
            <View style={{ marginTop: 15, width: '50%' }}>
              <Skeleton height={12} />
            </View>
            <View style={{ marginTop: 15, width: '50%' }}>
              <Skeleton height={12} />
            </View>
          </>
        )}
      </View>
    </Screen>
  );
};

export default DetailScreen;
