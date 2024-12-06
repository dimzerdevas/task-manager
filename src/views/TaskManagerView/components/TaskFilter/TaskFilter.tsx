import { InputLabel, MenuItem, Select } from "@mui/material";
import { FilterFormContainer } from "./style";

export const TaskFilter = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (filter: "all" | "done" | "pending") => void;
}): JSX.Element => {
  return (
      <FilterFormContainer>
        <InputLabel>Filter</InputLabel>
        <Select
          value={filter}
          label="Filter Tasks"
          onChange={(e) =>
            setFilter(e.target.value as "all" | "done" | "pending")
          }
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"pending"}>Pending</MenuItem>
          <MenuItem value={"done"}>Done</MenuItem>
        </Select>
      </FilterFormContainer>
  );
};
