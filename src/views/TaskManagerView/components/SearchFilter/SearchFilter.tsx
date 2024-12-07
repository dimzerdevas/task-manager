import { InputLabel, MenuItem, Select } from '@mui/material';
import { FilterFormContainer } from './style';

export const SearchByFilter = ({
  searchBy,
  setSearchBy,
}: {
  searchBy: string;
  setSearchBy: (filter: 'description' | 'dueDate' | 'priority') => void;
}): JSX.Element => {
  return (
    <FilterFormContainer>
      <InputLabel>Search By</InputLabel>
      <Select
        value={searchBy}
        label="Search by"
        onChange={(e) =>
          setSearchBy(e.target.value as 'description' | 'dueDate' | 'priority')
        }
      >
        <MenuItem value={'description'}>Description</MenuItem>
        <MenuItem value={'dueDate'}>Due Date</MenuItem>
        <MenuItem value={'priority'}>Priority</MenuItem>
      </Select>
    </FilterFormContainer>
  );
};
