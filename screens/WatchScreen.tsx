import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon, Image, Skeleton } from '@rneui/base';
import { ResizeMode, Video } from 'expo-av';
import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { getEpisode } from '../api/EpisodeApi';
import { BaseText, BoldText, Screen } from '../components';
import { useTheme } from '../context/ThemeProvider';
import useIsMounted from '../hooks/useIsMounted';
import { Episode } from '../types/movie';
import {
  RootStackNativeStackNavigationProp,
  WatchScreenRouteProp,
} from '../types/navigation';

export default function WatchScreen() {
  const theme = useTheme();
  const navigation = useNavigation<RootStackNativeStackNavigationProp>();
  const route = useRoute<WatchScreenRouteProp>();
  const [episode, setEpisode] = useState<Episode>();
  const scrollRef = useRef<ScrollView>();
  const isMounted = useIsMounted();

  useEffect(() => {
    getEpisode(route.params.id)
      .then((res) => isMounted() && setEpisode(res))
      .catch((err) => console.error(err));
  }, []);

  const handlePress = (id: string, title: string) => {
    navigation.replace('Watch', {
      id,
      title,
    });
  };

  return (
    <Screen
      ref={scrollRef}
      style={{ backgroundColor: theme?.theme.backgroundColor }}
    >
      {episode ? (
        <Video
          style={{ ...styles.size, backgroundColor: 'black' }}
          source={{
            uri: `${episode?.videoUrl}`,
          }}
          useNativeControls
          resizeMode={ResizeMode.STRETCH}
        />
      ) : (
        <View style={{ ...styles.size, backgroundColor: 'black' }} />
      )}

      {episode ? (
        <View style={styles.container}>
          <BaseText
            numberOfLines={2}
            style={{
              color: theme?.theme.textColor,
              fontSize: 25,
              marginTop: 15,
              textTransform: 'uppercase',
            }}
          >
            {episode?.name}
          </BaseText>

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity>
              <>
                <Icon
                  color={theme?.theme.iconColor}
                  name='heart'
                  type='ant-design'
                  size={20}
                />
                <BaseText
                  style={{
                    color: theme?.theme.textColor,
                    fontSize: 12,
                    marginTop: 5,
                  }}
                >
                  Thích
                </BaseText>
              </>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginLeft: 25 }}>
              <>
                <Icon
                  color={theme?.theme.iconColor}
                  name='like1'
                  type='ant-design'
                  size={20}
                />
                <BaseText
                  style={{
                    color: theme?.theme.textColor,
                    fontSize: 12,
                    marginTop: 5,
                  }}
                >
                  Đánh giá
                </BaseText>
              </>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginLeft: 25 }}>
              <>
                <Icon
                  color={theme?.theme.iconColor}
                  name='download'
                  type='ant-design'
                  size={20}
                />
                <BaseText
                  style={{
                    color: theme?.theme.textColor,
                    fontSize: 12,
                    marginTop: 5,
                  }}
                >
                  Tải xuống
                </BaseText>
              </>
            </TouchableOpacity>
          </View>

          <BoldText style={{ marginTop: 30, color: theme?.theme.textColor }}>
            Danh sách tập
          </BoldText>

          <View
            style={{
              width: '100%',
              height: 1,
              backgroundColor: 'rgba(255,255,255,.1)',
              marginTop: 10,
              marginBottom: 15,
            }}
          ></View>

          <View>
            {episode.episodes?.map((item, i) => (
              <TouchableOpacity
                key={i}
                style={{
                  paddingBottom: 20,
                }}
                onPress={() => handlePress(item._id, item.name)}
              >
                <Image
                  style={styles.size}
                  source={{ uri: item.img }}
                  PlaceholderContent={<ActivityIndicator />}
                />
                <View style={styles.container}>
                  <BaseText
                    numberOfLines={1}
                    style={{
                      marginTop: 10,
                      fontSize: 15,
                      color: theme?.theme.textColor,
                    }}
                  >
                    {item.name}
                  </BaseText>
                  <BaseText
                    numberOfLines={1}
                    style={{
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
        </View>
      ) : (
        <View style={styles.container}>
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
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  size: {
    width: '100%',
    height: 220,
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
