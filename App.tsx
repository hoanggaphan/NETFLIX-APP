import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import CustomStatusBar from './components/CustomStatusBar';
import { darkTheme, defaultTheme } from './constants/theme';
import ThemeProvider from './context/ThemeProvider';
import Navigation from './navigation';
import { store } from './redux/store';

LogBox.ignoreAllLogs(true); //Ignore all log notifications

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    async function prepare() {
      let themeMode = null;
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
          MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
        });

        // Load theme in storage
        themeMode = await AsyncStorage.getItem('themeMode');
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        themeMode === 'default' ? setTheme(defaultTheme) : setTheme(darkTheme);
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Navigation onMounted={onLayoutRootView} />
          <CustomStatusBar />
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}
