import { Button, Icon } from '@rneui/base';
import { StyleSheet, View } from 'react-native';
import { BaseText, Screen } from '../components';
import { useTheme } from '../context/ThemeProvider';
import { Avatar } from '@rneui/base';

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

const UserScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <Screen style={{ backgroundColor: theme?.theme.backgroundColor }}>
      <View style={styles.itemContainer}>
        <Icon
          style={{ marginTop: 10, marginBottom: 5 }}
          color={theme?.theme.themeMode === 'dark' ? 'white' : 'black'}
          name='user'
          type='evilicon'
          size={53}
        />
      </View>
      <View style={styles.itemContainer}>
        <Avatar
          rounded
          size={40}
          source={{
            uri: 'https://randomuser.me/api/portraits/men/36.jpg',
          }}
          containerStyle={{ backgroundColor: '#6733b9' }}
        />
      </View>

      <Button
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
      <Button
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
    </Screen>
  );
};

export default UserScreen;
