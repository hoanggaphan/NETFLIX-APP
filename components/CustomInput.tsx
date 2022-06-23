import { Input } from '@rneui/base';
import { useTheme } from '../context/ThemeProvider';

export default function CustomInput(props: any) {
  const theme = useTheme();
  
  return (
    <Input
      {...props}
      containerStyle={{
        backgroundColor: theme?.theme.themeMode === 'dark' ? '#333' : 'white',
        borderTopColor: theme?.theme.themeMode === 'dark' ? '#333' : 'white',
        borderBottomColor: theme?.theme.themeMode === 'dark' ? '#333' : 'white',
      }}
      inputContainerStyle={{
        backgroundColor:
          theme?.theme.themeMode === 'dark' ? '#4d4d4d' : '#E5E5E5',
      }}
      placeholderTextColor={
        theme?.theme.themeMode === 'dark'
          ? 'rgba(255,255,255,.5)'
          : 'rgba(0,0,0,.5)'
      }
      inputStyle={{
        color: theme?.theme.themeMode === 'dark' ? 'white' : 'black',
      }}
    />
  );
}
