import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../context/ThemeProvider';
import DetailScreen from '../screens/DetailScreen';
import EditUserScreen from '../screens/EditUserScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WatchScreen from '../screens/WatchScreen';

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme?.theme.backgroundColor,
        },
        headerShadowVisible: false,
        headerTintColor: theme?.theme.iconColor,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='Home'
        component={HomeScreen}
      />
      <Stack.Screen
        options={({ route }: any) => ({
          headerShown: true,
          title: route.params.title,
          headerBackTitle: '',
        })}
        name='Detail'
        component={DetailScreen}
      />
      <Stack.Screen
        options={({ route }: any) => ({
          headerShown: true,
          title: route.params.title,
          headerBackTitle: '',
          animation: 'slide_from_bottom',
        })}
        name='Watch'
        component={WatchScreen}
      />
    </Stack.Navigator>
  );
}

function SettingStackNavigator() {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme?.theme.backgroundColor,
        },
        headerShadowVisible: false,
        headerTintColor: theme?.theme.iconColor,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Cài đặt',
        }}
        name='Settings'
        component={SettingsScreen}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Chỉnh sửa',
          headerBackTitle: '',
        }}
        name='EditUser'
        component={EditUserScreen}
      />

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          options={{
            headerShown: true,
            title: 'Đăng nhập',
            headerBackTitle: '',
          }}
          name='Login'
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: 'Đăng ký',
            headerBackTitle: '',
          }}
          name='Register'
          component={RegisterScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export { MainStackNavigator, SettingStackNavigator };
