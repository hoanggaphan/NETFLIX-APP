import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';
import { useState } from 'react';
import { View } from 'react-native';
import { login } from '../api/AuthApi';
import { BaseText, Screen } from '../components';
import CustomInput from '../components/CustomInput';
import { useTheme } from '../context/ThemeProvider';
import { useAppDispatch } from '../redux/hooks';
import { setCredentials } from '../redux/reducer/authReducer';
import { SettingStackNavigationProp } from '../types/navigation';

const LoginScreen: React.FC = () => {
  const theme = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState<any>(null);
  const navigation = useNavigation<SettingStackNavigationProp>();
  const dispatch = useAppDispatch();

  const handleChangeUsername = (keyword: string) => {
    setUsername(keyword);
  };
  const handleChangePass = (keyword: string) => {
    setPassword(keyword);
  };

  const handleLogin = async () => {
    setErrors(null);

    try {
      const data = await login({
        username,
        password,
      });

      dispatch(
        setCredentials({
          user: data,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        })
      );
      navigation.goBack();
    } catch (error: any) {
      if (error.response.data) setErrors(error.response.data);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <Screen style={{ backgroundColor: theme?.theme.backgroundColor }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 25,
          paddingRight: 25,
          marginTop: 10,
        }}
      >
        <CustomInput
          onChangeText={handleChangeUsername}
          placeholder='Tài khoản'
        />
        <CustomInput
          onChangeText={handleChangePass}
          placeholder='Mật khẩu'
          secureTextEntry={true}
        />
        <Button title='Đăng nhập' onPress={handleLogin} />

        <Button
          style={{ marginTop: 15 }}
          title='Đăng ký'
          onPress={handleRegister}
        />
        {error && error.message && (
          <View style={{ marginTop: 15 }}>
            <BaseText
              style={{
                color: theme?.theme.primary,
                marginTop: 10,
                fontSize: 13,
              }}
            >
              {error.message}
            </BaseText>
          </View>
        )}
      </View>
    </Screen>
  );
};

export default LoginScreen;
