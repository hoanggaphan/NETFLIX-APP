import { BaseText, Screen } from '../components';
import { useTheme } from '../context/ThemeProvider';

const UserScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <Screen style={{ backgroundColor: theme?.theme.backgroundColor }}>
      <BaseText>User Screen</BaseText>
    </Screen>
  );
};

export default UserScreen;
