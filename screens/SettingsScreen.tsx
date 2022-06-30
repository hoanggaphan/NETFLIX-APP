import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, Icon } from '@rneui/base';
import { StyleSheet, View } from 'react-native';
import { BaseText, Screen } from '../components';
import { useTheme } from '../context/ThemeProvider';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setCredentials } from '../redux/reducer/authReducer';
import { RootState } from '../redux/store';
import {
  RootStackNavigationProp,
  SettingStackNavigationProp
} from '../types/navigation';

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  button: {
    marginBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
});

const SettingsScreen: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation<SettingStackNavigationProp>();
  const navigationRoot = useNavigation<RootStackNavigationProp>();
  const user = useAppSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();

  const handlePressLogin = () => {
    navigationRoot.navigate('Login');
  };

  const handlePressLogout = () => {
    dispatch(
      setCredentials({
        user: null,
        accessToken: '',
        refreshToken: '',
      })
    );
  };

  const handlePressEdit = () => {
    navigation.navigate('EditUser');
  };

  return (
    <Screen style={{ backgroundColor: theme?.theme.backgroundColor }}>
      <View style={styles.itemContainer}>
        {user?.avatar ? (
          <Avatar
            rounded
            size={40}
            source={{
              uri: user.avatar,
            }}
            containerStyle={{ backgroundColor: theme?.theme.avatarBgColor }}
          />
        ) : (
          <Icon
            style={{ marginTop: 10, marginBottom: 5 }}
            color={theme?.theme.themeMode === 'dark' ? 'white' : 'black'}
            name='user'
            type='evilicon'
            size={53}
          />
        )}
      </View>

      {!user && (
        <Button
          onPress={handlePressLogin}
          buttonStyle={{
            borderColor: theme?.theme.themeMode === 'dark' ? 'white' : 'black',
          }}
          type='outline'
          style={styles.button}
        >
          <Icon
            color={theme?.theme.themeMode === 'dark' ? 'white' : 'black'}
            style={styles.icon}
            type='material'
            name='login'
          />
          <BaseText
            style={{
              color: theme?.theme.themeMode === 'dark' ? 'white' : 'black',
            }}
          >
            Đăng nhập
          </BaseText>
        </Button>
      )}

      {user && (
        <Button
          onPress={handlePressEdit}
          buttonStyle={{
            borderColor: theme?.theme.themeMode === 'dark' ? 'white' : 'black',
          }}
          type='outline'
          style={styles.button}
        >
          <Icon
            color={theme?.theme.themeMode === 'dark' ? 'white' : 'black'}
            style={styles.icon}
            type='material'
            name='edit'
          />
          <BaseText
            style={{
              color: theme?.theme.themeMode === 'dark' ? 'white' : 'black',
            }}
          >
            Chỉnh sửa thông tin
          </BaseText>
        </Button>
      )}

      <Button
        buttonStyle={{
          borderColor: theme?.theme.themeMode === 'dark' ? 'white' : 'black',
        }}
        type='outline'
        style={styles.button}
        onPress={() => theme?.updateTheme(theme.theme.themeMode)}
      >
        <Icon
          color={theme?.theme.themeMode === 'dark' ? 'white' : 'black'}
          style={styles.icon}
          type='material'
          name='invert-colors'
        />
        <BaseText
          style={{
            color: theme?.theme.themeMode === 'dark' ? 'white' : 'black',
          }}
        >
          Đổi màu
        </BaseText>
      </Button>

      {user && (
        <Button
          buttonStyle={{
            borderColor: theme?.theme.themeMode === 'dark' ? 'white' : 'black',
          }}
          type='outline'
          style={styles.button}
          onPress={handlePressLogout}
        >
          <Icon
            color={theme?.theme.themeMode === 'dark' ? 'white' : 'black'}
            style={styles.icon}
            type='font-awesome'
            name='sign-out'
          />
          <BaseText
            style={{
              color: theme?.theme.themeMode === 'dark' ? 'white' : 'black',
            }}
          >
            Đăng xuất
          </BaseText>
        </Button>
      )}
    </Screen>
  );
};

export default SettingsScreen;
