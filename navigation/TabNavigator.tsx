import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../context/ThemeProvider';
import DownLoadScreen from '../screens/DownLoadScreen';
import SearchScreen from '../screens/SearchScreen';

import UserScreen from '../screens/UserScreen';
import { MainStackNavigator } from './MainStackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme?.theme.backgroundColor,
          shadowColor: 'transparent', // this covers iOS
          elevation: 0, // this covers Android
        },
        headerTintColor: theme?.theme.iconColor,
      }}
    >
      <Tab.Screen
        options={{ headerShown: false, title: 'Trang chủ' }}
        name='Main'
        component={MainStackNavigator}
      />
      <Tab.Screen
        options={{ title: 'Tìm kiếm', headerTitle: '' }}
        name='Search'
        component={SearchScreen}
      />
      <Tab.Screen
        options={{ title: 'Tải xuống' }}
        name='Download'
        component={DownLoadScreen}
      />
      <Tab.Screen
        options={{ title: 'Người dùng' }}
        name='MyList'
        component={UserScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
