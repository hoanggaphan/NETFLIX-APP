import { NavigationProp, RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Detail: { id: string; title: string };
  // Feed: { sort: 'latest' | 'top' } | undefined;
};

export type DetailScreenRouteProp = RouteProp<RootStackParamList>;
export type DetailScreenNavigationProp = NavigationProp<RootStackParamList>;
// type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
