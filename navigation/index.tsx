import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../context/ThemeProvider';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import BottomTabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

export default function Navigation({
  onMounted,
}: {
  onMounted: () => Promise<void>;
}) {
  const theme = useTheme();

  return (
    <NavigationContainer onReady={onMounted}>
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
          component={BottomTabNavigator}
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
    </NavigationContainer>
  );
}
