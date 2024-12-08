import { InputLabel, MenuItem, Select } from '@mui/material';
import { FilterFormContainer } from './style';
import { FilterEnum, FilterType } from '../../interfaces';
import { useTaskContext } from '../../../../context';

export const TaskFilter = (): JSX.Element => {
  const { filter, setFilter } = useTaskContext();

  return (
    <FilterFormContainer>
      <InputLabel>Filter</InputLabel>
      <Select
        value={filter}
        label="Filter Tasks"
        onChange={(e) => setFilter(e.target.value as FilterType)}
      >
        <MenuItem value={FilterEnum.All}>All</MenuItem>
        <MenuItem value={FilterEnum.Pending}>Pending</MenuItem>
        <MenuItem value={FilterEnum.Done}>Done</MenuItem>
        <MenuItem value={FilterEnum.DueDateEarlier}>
          Due Date (earlier first)
        </MenuItem>
        <MenuItem value={FilterEnum.DueDateLater}>
          Due Date (later first)
        </MenuItem>
        <MenuItem value={FilterEnum.PriorityLowToHigh}>
          Priority (from low to high)
        </MenuItem>
        <MenuItem value={FilterEnum.PriorityHighToLow}>
          Priority (from high to low)
        </MenuItem>
      </Select>
    </FilterFormContainer>
  );
};
