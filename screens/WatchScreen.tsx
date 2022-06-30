import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon, Image } from '@rneui/base';
import { ResizeMode, Video } from 'expo-av';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { getEpisode } from '../api/EpisodeApi';
import { likeEpisode } from '../api/UserApi';
import { BaseText, BoldText, Screen } from '../components';
import { useTheme } from '../context/ThemeProvider';
import useIsMounted from '../hooks/useIsMounted';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setUser } from '../redux/reducer/authReducer';
import { RootState } from '../redux/store';
import { Episode } from '../types/index';
import {
  MainStackNativeStackNavigationProp,
  RootStackNavigationProp,
  WatchScreenRouteProp,
} from '../types/navigation';

export default function WatchScreen() {
  const theme = useTheme();
  const navigation = useNavigation<MainStackNativeStackNavigationProp>();
  const navigationRoot = useNavigation<RootStackNavigationProp>();
  const route = useRoute<WatchScreenRouteProp>();
  const [episode, setEpisode] = useState<Episode>();
  const isMounted = useIsMounted();
  const user = useAppSelector((state: RootState) => state.auth.user);
  const accessToken = useAppSelector(
    (state: RootState) => state.auth.accessToken
  );
  const dispatch = useAppDispatch();

  const isLiked = user?.likeList?.includes(route.params.id);

  useEffect(() => {
    getEpisode(route.params.id)
      .then((res) => isMounted() && setEpisode(res))
      .catch((err) => console.error(err));
  }, [route.params.id]);

  const handlePress = (id: string, title: string) => {
    navigation.replace('Watch', {
      id,
      title,
    });
  };

  const handleLike = async () => {
    if (!user) {
      return Alert.alert('Bạn cần đăng nhập', 'Đi tới trang đăng nhập', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'OK', onPress: () => navigationRoot.navigate('Login') },
      ]);
    }

    try {
      const newUser = await likeEpisode(accessToken, {
        userId: user._id,
        episodeId: route.params.id,
      });
      dispatch(setUser({ user: newUser }));
    } catch (error: any) {
      console.error(error.response.data);
    }
  };

  return (
    <Screen style={{ backgroundColor: theme?.theme.backgroundColor }}>
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
            <TouchableOpacity onPress={handleLike}>
              <>
                <Icon
                  color={
                    isLiked ? theme?.theme.primary : theme?.theme.iconColor
                  }
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

            {/* <TouchableOpacity style={{ marginLeft: 25 }}>
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
            </TouchableOpacity> */}

            {/* <TouchableOpacity style={{ marginLeft: 25 }}>
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
            </TouchableOpacity> */}
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
                disabled={item._id === route.params.id ? true : false}
                style={{
                  paddingBottom: 20,
                  opacity: item._id === route.params.id ? 0.3 : 1,
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
          <View style={{ marginTop: 200 }}>
            <ActivityIndicator size='large' />
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
