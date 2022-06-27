import { NavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Detail: { id: string; title: string };
  Watch: { id: string; title: string };
};

export type RootStackNavigationProp = NavigationProp<RootStackParamList>;
export type RootStackNativeStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type WatchScreenRouteProp = RouteProp<RootStackParamList, 'Watch'>;
export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

export type UserStackParamList = {
  Settings: undefined;
  Login: undefined;
  EditUser: undefined;
};
export type UserStackNavigationProp = NavigationProp<UserStackParamList>;
