import { useNavigation } from '@react-navigation/native';
import { Button } from '@rneui/base';
import { useState } from 'react';
import { View, Alert } from 'react-native';
import { register } from '../api/AuthApi';
import { BaseText, Screen } from '../components';
import CustomInput from '../components/CustomInput';
import { useTheme } from '../context/ThemeProvider';
import { SettingStackNavigationProp } from '../types/navigation';

const RegisterScreen: React.FC = () => {
  const theme = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [errors, setErrors] = useState([]);
  const navigation = useNavigation<SettingStackNavigationProp>();

  const handleChangeUsername = (keyword: string) => {
    setUsername(keyword);
  };
  const handleChangePass = (keyword: string) => {
    setPassword(keyword);
  };
  const handleChangeConfirmPass = (keyword: string) => {
    setConfirmPass(keyword);
  };

  const handleRegister = async () => {
    setErrors([]);

    try {
      const data = await register({
        username,
        password,
        password_confirmation: confirmPass,
      });
      if (data)
        Alert.alert(
          'Đăng ký tài khoản thành công',
          'Bạn đã đăng ký tài khoản thành, quay lại trang đăng nhập',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            { text: 'OK', onPress: () => navigation.goBack() },
          ]
        );
    } catch (error: any) {
      if (error.response.data) setErrors(error.response.data);
    }
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
        <CustomInput
          onChangeText={handleChangeConfirmPass}
          placeholder='Nhập lại mật khẩu'
          secureTextEntry={true}
        />
        <Button title='Đăng ký' onPress={handleRegister} />
        <View style={{ marginTop: 15 }}>
          {errors.map((error, i) => (
            <BaseText
              key={i}
              style={{
                color: theme?.theme.primary,
                marginTop: 10,
                fontSize: 13,
              }}
            >
              {error}
            </BaseText>
          ))}
        </View>
      </View>
    </Screen>
  );
};

export default RegisterScreen;
