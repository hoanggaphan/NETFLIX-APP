import { NavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;
  Detail: { id: string; title: string };
  Watch: { id: string; title: string };
};

export type MainStackNavigationProp = NavigationProp<MainStackParamList>;
export type MainStackNativeStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

export type WatchScreenRouteProp = RouteProp<MainStackParamList, 'Watch'>;
export type DetailScreenRouteProp = RouteProp<MainStackParamList, 'Detail'>;

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};
export type RootStackNavigationProp = NavigationProp<RootStackParamList>;

export type SettingStackParamList = {
  Settings: undefined;
  EditUser: undefined;
};
export type SettingStackNavigationProp = NavigationProp<SettingStackParamList>;
