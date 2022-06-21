import { NavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Detail: { id: string; title: string };
  Watch: { id: string; title: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
};

export type DetailScreenRouteProp = RouteProp<RootStackParamList>;
export type DetailScreenNavigationProp = NavigationProp<RootStackParamList>;
export type WatchScreenRouteProp = RouteProp<RootStackParamList>;
export type WatchScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
// type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
