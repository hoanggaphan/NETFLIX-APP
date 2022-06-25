import { Avatar, Button, Icon } from '@rneui/base';
import { useState } from 'react';
import { View } from 'react-native';
import { Screen } from '../components';
import CustomInput from '../components/CustomInput';
import { useTheme } from '../context/ThemeProvider';

const EditUserScreen: React.FC = () => {
  const theme = useTheme();
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeFullName = (keyword: string) => {
    setFullName(keyword);
  };
  const handleChangeEmail = (keyword: string) => {
    setEmail(keyword);
  };
  const handleChangePhone = (keyword: string) => {
    setPhone(keyword);
  };
  const handleChangePass = (keyword: string) => {
    setPassword(keyword);
  };

  const handleUpdate = () => {
    console.log(fullname);
    console.log(email);
    console.log(phone);
    console.log(password);
  };

  return (
    <Screen style={{ backgroundColor: theme?.theme.backgroundColor }}>
      <View
        style={{
          paddingLeft: 25,
          paddingRight: 25,
          marginTop: 10,
        }}
      >
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Icon
            style={{ marginTop: 10, marginBottom: 5 }}
            color={theme?.theme.themeMode === 'dark' ? 'white' : 'black'}
            name='user'
            type='evilicon'
            size={90}
          />
          <Avatar
            size={64}
            rounded
            source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
            containerStyle={{ backgroundColor: theme?.theme.avatarBgColor }}
          />
        </View>
        <CustomInput
          onChangeText={handleChangeFullName}
          placeholder='Họ và tên'
        />
        <CustomInput onChangeText={handleChangeEmail} placeholder='Email' />
        <CustomInput
          onChangeText={handleChangePhone}
          placeholder='Số điện thoại'
        />
        <CustomInput
          onChangeText={handleChangePass}
          placeholder='Mật khẩu'
          secureTextEntry={true}
        />
        <Button title='Cập nhật' onPress={handleUpdate} />
      </View>
    </Screen>
  );
};

export default EditUserScreen;
