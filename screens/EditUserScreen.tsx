import { Avatar, Button, Icon } from '@rneui/base';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Alert, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateInfo, updateNewPass } from '../api/UserApi';
import { BaseText, Screen } from '../components';
import CustomInput from '../components/CustomInput';
import { useTheme } from '../context/ThemeProvider';
import { useAppSelector } from '../redux/hooks';
import { setUser } from '../redux/reducer/authReducer';
import { RootState } from '../redux/store';

const EditUserScreen: React.FC = () => {
  const theme = useTheme();
  const user = useAppSelector((state: RootState) => state.auth.user);
  const accessToken = useAppSelector(
    (state: RootState) => state.auth.accessToken
  );
  const [avatar, setAvatar] = useState(user?.avatar || '');
  const [fullName, setFullName] = useState(user?.fullName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [errMsg, setErrMsg] = useState([]);
  const dispatch = useDispatch();
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [errMsgPass, setErrMsgPass] = useState<any>(null);

  const [imageUpload, setImageUpload] = useState<any>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUpload(result);
      setAvatar(result.uri);
    }
  };

  const uploadImg = async () => {
    if (!user) return;

    const formData = new FormData();
    const file = {
      uri: imageUpload.uri,
      type: `test/${imageUpload.uri.split('.')[1]}`,
      name: `test/${imageUpload.uri.split('.')[1]}`,
    };
    formData.append('file', file as any);
    formData.append('upload_preset', 'netflix_preset');

    axios
      .post('https://api.cloudinary.com/v1_1/dl6gdfmqv/image/upload', formData)
      .then(async (response) => {
        const newUser = await updateInfo(user?._id, accessToken, {
          avatar: response.data.secure_url,
        });
        delete newUser.password;
        dispatch(setUser({ user: newUser }));
        Alert.alert('Cập nhật hình ảnh thành công', '', [{ text: 'OK' }]);
      })
      .catch((err) => console.error(err.response.data.error));
  };

  const handleChangeFullName = (keyword: string) => {
    setFullName(keyword);
  };
  const handleChangeEmail = (keyword: string) => {
    setEmail(keyword);
  };
  const handleChangePhone = (keyword: string) => {
    setPhone(keyword);
  };
  const handleChangeOldPass = (keyword: string) => {
    setOldPass(keyword);
  };
  const handleChangeNewPass = (keyword: string) => {
    setNewPass(keyword);
  };

  const handleUpdate = async () => {
    if (!user) return;
    setErrMsg([]);

    try {
      const newUser = await updateInfo(user?._id, accessToken, {
        avatar,
        fullName,
        email,
        phone,
      });
      delete newUser.password;
      dispatch(setUser({ user: newUser }));
      Alert.alert('Cập nhật tài khoản thành công', '', [{ text: 'OK' }]);
    } catch (error: any) {
      if (error.response.data) return setErrMsg(error.response.data);

      console.log(error);
    }
  };

  const handleUpdateNewPass = async () => {
    if (!user) return;
    if (!oldPass || !newPass)
      return Alert.alert('Vui lòng nhập đầy đủ thông tin', '', [
        { text: 'OK' },
      ]);
    setErrMsgPass(null);
    try {
      const newUser = await updateNewPass(accessToken, {
        userId: user._id,
        oldPass,
        newPass,
      });
      delete newUser.password;
      dispatch(setUser({ user: newUser }));
      Alert.alert('Cập nhật mật khẩu thành công', '', [{ text: 'OK' }]);
    } catch (error: any) {
      if (error.response.data) return setErrMsgPass(error.response.data);

      console.log(error);
    }
  };

  const showErrMsgPass = () => {
    if (!errMsgPass) return <></>;
    if (errMsgPass.message)
      return (
        <BaseText
          style={{
            color: theme?.theme.primary,
            marginTop: 10,
            fontSize: 13,
          }}
        >
          {errMsgPass.message}
        </BaseText>
      );

    if (errMsgPass.length > 0)
      return (
        <>
          {errMsgPass?.map((err: string, i: number) => (
            <BaseText
              key={i}
              style={{
                color: theme?.theme.primary,
                marginTop: 10,
                fontSize: 13,
              }}
            >
              {err}
            </BaseText>
          ))}
        </>
      );
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
          {avatar ? (
            <Avatar
              size={64}
              rounded
              source={{ uri: avatar }}
              containerStyle={{ backgroundColor: theme?.theme.avatarBgColor }}
            />
          ) : (
            <Icon
              style={{ marginTop: 10, marginBottom: 5 }}
              color={theme?.theme.themeMode === 'dark' ? 'white' : 'black'}
              name='user'
              type='evilicon'
              size={90}
            />
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <Button
            style={{ marginRight: 10 }}
            title='Chọn ảnh'
            onPress={pickImage}
          />
          <Button title='Cập nhật ảnh' onPress={uploadImg} />
        </View>
        <View style={{ marginTop: 20 }}>
          <CustomInput
            value={fullName}
            onChangeText={handleChangeFullName}
            placeholder='Họ và tên'
          />
          <CustomInput
            value={email}
            onChangeText={handleChangeEmail}
            placeholder='Email'
          />
          <CustomInput
            value={phone}
            onChangeText={handleChangePhone}
            placeholder='Số điện thoại'
          />
          <Button title='Cập nhật thông tin' onPress={handleUpdate} />
        </View>

        <View style={{ marginTop: 15, minHeight: 30 }}>
          {errMsg.map((err, i) => (
            <BaseText
              key={i}
              style={{
                color: theme?.theme.primary,
                marginTop: 10,
                fontSize: 13,
              }}
            >
              {err}
            </BaseText>
          ))}
        </View>

        <View style={{ marginTop: 20 }}>
          <CustomInput
            value={oldPass}
            onChangeText={handleChangeOldPass}
            placeholder='Mật khẩu cũ'
            secureTextEntry={true}
          />

          <CustomInput
            value={newPass}
            onChangeText={handleChangeNewPass}
            placeholder='Mật khẩu mới'
            secureTextEntry={true}
          />
          <Button title='Cập nhật mật khẩu' onPress={handleUpdateNewPass} />
        </View>
        <View style={{ marginTop: 15, minHeight: 30 }}>{showErrMsgPass()}</View>
      </View>
    </Screen>
  );
};

export default EditUserScreen;
