import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './TabNavigator';

export default function Navigation({
  onMounted,
}: {
  onMounted: () => Promise<void>;
}) {
  return (
    <NavigationContainer onReady={onMounted}>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
