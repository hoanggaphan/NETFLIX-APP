import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../context/ThemeProvider';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';
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
          headerBackTitle: 'Trở lại',
        })}
        name='Detail'
        component={DetailScreen}
      />
      <Stack.Screen
        options={({ route }: any) => ({
          headerShown: true,
          title: route.params.title,
          headerBackTitle: 'Trở lại',
          animation: 'slide_from_bottom',
        })}
        name='Watch'
        component={WatchScreen}
      />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };
