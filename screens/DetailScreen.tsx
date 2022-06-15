import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { BaseText, Body, Screen } from '../components';
import Header from '../components/Header';
import { useTheme } from '../context/ThemeProvider';
import { RootStackParamList } from '../types/navigation';

type DetailScreenRouteProp = RouteProp<RootStackParamList>;

const DetailScreen: React.FC = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const theme = useTheme();

  return (
    <Screen style={{ backgroundColor: theme?.theme.backgroundColor }}>
      <Header />

      <Body>
        <BaseText style={{ color: theme?.theme.textColor }}>
          This is {route.params?.name}'s profile
        </BaseText>
      </Body>
    </Screen>
  );
};

export default DetailScreen;
