import { InputAdornment, TextField } from '@mui/material';
import { SearchTaskContainer } from './style';
import { useTaskContext } from '../../../../context';
import { Search } from '@mui/icons-material';

export const SearchTask = (): JSX.Element => {
  const { setIsSearching, handleSearch } = useTaskContext();

  return (
    <SearchTaskContainer>
      <TextField
        label="Search for Task"
        variant="outlined"
        fullWidth
        onChange={(e) => {
          setIsSearching(true);
          handleSearch(e.target.value);
        }}
        onBlur={() => setIsSearching(false)}
        margin="normal"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          },
        }}
      />
    </SearchTaskContainer>
  );
};
