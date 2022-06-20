import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../context/ThemeProvider';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function Navigation({
  onMounted,
}: {
  onMounted: () => Promise<void>;
}) {
  return (
    <NavigationContainer onReady={onMounted}>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  const theme = useTheme();
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false,
    // }}
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
          headerStyle: {
            backgroundColor: theme?.theme.backgroundColor,
            shadowColor: 'transparent', // this covers iOS
            elevation: 0, // this covers Android
          },
          title: route.params.title,
          headerBackTitle: 'Trở lại',
          headerTintColor: theme?.theme.iconColor,
        })}
        name='Detail'
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
}
