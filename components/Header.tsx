import { Header } from '@rneui/base';
import React from 'react';
import { useTheme } from '../context/ThemeProvider';

export default () => {
  const theme = useTheme();
  return (
    <Header
      backgroundColor='transparent'
      backgroundImageStyle={{}}
      barStyle='default'
      centerComponent={{
        text: 'Netflix',
        style: {
          color: theme?.theme.primary,
          fontSize: 22,
          fontWeight: 'bold',
        },
      }}
      centerContainerStyle={{}}
      containerStyle={{
        width: '100%',
        borderBottomWidth: 0,
      }}
      leftComponent={{}}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement='center'
      rightComponent={{}}
      rightContainerStyle={{}}
      statusBarProps={{}}
    />
  );
};
