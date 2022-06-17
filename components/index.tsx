import { ScrollView, Text, View } from 'react-native';
import styled from 'styled-components';

export const Body = styled(View)`
  padding-left: 10px;
  padding-bottom: 50px;
`;

export const Screen = styled(ScrollView)`
  flex: 1;
`;

export const BaseText = styled(Text)`
  font-family: Montserrat;
`;

export const BoldText = styled(Text)`
  font-family: MontserratBold;
`;
