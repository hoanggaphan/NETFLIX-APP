import { BaseText, Screen } from '../components';
import { useTheme } from '../context/ThemeProvider';

const DownLoadScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <Screen style={{ backgroundColor: theme?.theme.backgroundColor }}>
      <BaseText>Download Screen</BaseText>
    </Screen>
  );
};

export default DownLoadScreen;
