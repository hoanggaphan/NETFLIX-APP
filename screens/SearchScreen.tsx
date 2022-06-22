import { BaseText, Screen } from '../components';
import { useTheme } from '../context/ThemeProvider';
import { SearchBar } from '@rneui/base';

const SearchScreen: React.FC = () => {
  const theme = useTheme();

  return (
    <Screen style={{ backgroundColor: theme?.theme.backgroundColor }}>
      <SearchBar
        placeholder='Type Here...'
        // onChangeText={updateSearch}
        // value={search}
      />
      <BaseText>Search Screen</BaseText>
    </Screen>
  );
};

export default SearchScreen;
