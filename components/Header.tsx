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
        style: { color: theme?.theme.primary, fontSize: 22, fontWeight: 'bold' },
      }}
      centerContainerStyle={{}}
      containerStyle={{
        width: '100%',
        borderBottomWidth: 0,
      }}
      leftComponent={{
        icon: 'menu',
        color: theme?.theme.iconColor,
      }}
      leftContainerStyle={{}}
      linearGradientProps={{}}
      placement='center'
      rightComponent={{
        children: (
          <Icon type='ant-design' name='user' color={theme?.theme.iconColor} />
        ),
      }}
      rightContainerStyle={{}}
      statusBarProps={{}}
    />
  );
};
