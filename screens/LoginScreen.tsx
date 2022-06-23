import { Button } from '@rneui/base';
import { useState } from 'react';
import { View } from 'react-native';
import { Screen } from '../components';
import CustomInput from '../components/CustomInput';
import { useTheme } from '../context/ThemeProvider';

const LoginScreen: React.FC = () => {
  const theme = useTheme();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeId = (keyword: string) => {
    setId(keyword);
  };
  const handleChangePass = (keyword: string) => {
    setPassword(keyword);
  };

  const handleLogin = () => {
    console.log(id);
    console.log(password);
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
        <CustomInput onChangeText={handleChangeId} placeholder='Tài khoản' />
        <CustomInput
          onChangeText={handleChangePass}
          placeholder='Mật khẩu'
          secureTextEntry={true}
        />
        <Button title='Đăng nhập' onPress={handleLogin} />
      </View>
    </Screen>
  );
};

export default LoginScreen;
