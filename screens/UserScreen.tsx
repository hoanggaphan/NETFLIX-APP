import { Button } from '@rneui/base';
import { BaseText, Screen } from '../components';
import { useTheme } from '../context/ThemeProvider';

const UserScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <Screen style={{ backgroundColor: theme?.theme.backgroundColor }}>
      <BaseText>User Screen</BaseText>
      <Button
        title='Đổi màu'
        onPress={() => theme?.updateTheme(theme.theme.themeMode)}
      />
    </Screen>
  );
};

export default UserScreen;
