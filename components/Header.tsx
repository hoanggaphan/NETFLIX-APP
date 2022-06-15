import { Header } from '@rneui/base';
import { Icon } from '@rneui/themed';
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
        style: { color: '#ff0000', fontSize: 22, fontWeight: 'bold' },
      }}
      centerContainerStyle={{}}
      containerStyle={{
        width: '100%',
        borderBottomWidth: 0,
      }}
      leftComponent={{
        icon: 'menu',
        color: theme?.theme.header.iconColor,
      }}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement='center'
      rightComponent={{
        children: (
          <Icon
            type='ant-design'
            name='user'
            color={theme?.theme.header.iconColor}
          />
        ),
      }}
      rightContainerStyle={{}}
      statusBarProps={{}}
    />
  );
};
