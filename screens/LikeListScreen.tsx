import { useNavigation } from '@react-navigation/native';
import { Button, Image } from '@rneui/base';
import { useEffect, useState } from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { getLikeList } from '../api/UserApi';
import { BaseText, Screen } from '../components';
import { useTheme } from '../context/ThemeProvider';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { Episode } from '../types';
import {
  MainStackNavigationProp,
  RootStackNavigationProp,
} from '../types/navigation';

const LikeListScreen: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation<MainStackNavigationProp>();
  const navigationRoot = useNavigation<RootStackNavigationProp>();
  const user = useAppSelector((state: RootState) => state.auth.user);
  const accessToken = useAppSelector(
    (state: RootState) => state.auth.accessToken
  );
  const [data, setData] = useState<Episode[]>([]);

  const handlePress = (id: string, title: string) => {
    navigation.navigate('Watch', { id, title });
  };
  const handleLogin = () => {
    navigationRoot.navigate('Login');
  };

  useEffect(() => {
    if (!user) return;

    getLikeList(accessToken, user?._id)
      .then((res) => setData(res))
      .catch((err) => console.error(err.response.data));
  }, [user]);

  return (
    <>
      {user ? (
        <Screen style={{ backgroundColor: theme?.theme.backgroundColor }}>
          <View style={{ paddingLeft: 15, paddingRight: 15 }}>
            {data?.map((item, i) => (
              <TouchableOpacity
                key={i}
                style={{
                  flexDirection: 'row',
                  marginBottom: 13,
                }}
                onPress={() => handlePress(item._id, item.name)}
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
        </Screen>
      ) : (
        <View
          style={{
            backgroundColor: theme?.theme.backgroundColor,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button title='Bạn cần đăng nhập' onPress={handleLogin} />
        </View>
      )}
    </>
  );
};

export default LikeListScreen;
