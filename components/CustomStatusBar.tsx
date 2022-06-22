import { StatusBar } from 'react-native';
import { useTheme } from '../context/ThemeProvider';

export default () => {
  const theme = useTheme();
  return (
    <StatusBar
      hidden={false}
      translucent
      barStyle={
        theme?.theme.themeMode == 'dark' ? 'light-content' : 'dark-content'
      }
    />
  );
};
