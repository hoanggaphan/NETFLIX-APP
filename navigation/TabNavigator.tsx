import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/base';
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

        tabBarStyle: {
          backgroundColor: theme?.theme.tabBarBG,
          borderTopColor: theme?.theme.tabBarBorderTopColor,
        },
        tabBarLabelStyle: {
          color: theme?.theme.tabBarIcon,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon
                type='ionicon'
                name='home'
                color={theme?.theme.tabBarIcon}
              />
            ) : (
              <Icon
                type='ionicon'
                name='home-outline'
                color={theme?.theme.tabBarIcon}
              />
            ),
          headerShown: false,
          title: 'Trang chủ',
        }}
        name='Main'
        component={MainStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon
                type='ionicon'
                name='search'
                color={theme?.theme.tabBarIcon}
              />
            ) : (
              <Icon
                type='ionicon'
                name='search-outline'
                color={theme?.theme.tabBarIcon}
              />
            ),
          title: 'Tìm kiếm',
        }}
        name='Search'
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon
                type='ionicon'
                name='download'
                color={theme?.theme.tabBarIcon}
              />
            ) : (
              <Icon
                type='ionicon'
                name='download-outline'
                color={theme?.theme.tabBarIcon}
              />
            ),
          title: 'Tải xuống',
        }}
        name='Download'
        component={DownLoadScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Icon
                type='font-awesome'
                name='user'
                color={theme?.theme.tabBarIcon}
              />
            ) : (
              <Icon
                type='font-awesome'
                name='user-o'
                color={theme?.theme.tabBarIcon}
              />
            ),
          title: 'Người dùng',
        }}
        name='MyList'
        component={UserScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
