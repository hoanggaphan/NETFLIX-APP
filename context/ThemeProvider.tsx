import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useState } from 'react';
import { darkTheme, defaultTheme } from '../constants/theme';

type ThemeContextType = {
  theme: typeof defaultTheme;
  updateTheme: (currentThemeMode: String) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeProviderProps = {
  children: React.ReactNode;
  theme: typeof defaultTheme;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme: themeProp,
}) => {
  const [theme, setTheme] = useState(themeProp);

  const updateTheme = (currentThemeMode: String) => {
    const newTheme = currentThemeMode === 'default' ? darkTheme : defaultTheme;
    setTheme(newTheme);
    AsyncStorage.setItem('themeMode', newTheme.themeMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;
