import { InputAdornment, TextField } from "@mui/material";
import { SearchByFilter } from "../SearchFilter";
import { SearchTaskContainer } from "./style";
import { useContext } from "react";
import { TaskContext } from "../../../../context";
import { Search } from "@mui/icons-material";

export const SearchTask = (): JSX.Element => {
  const { setIsSearching, handleSearch, searchBy, setSearchBy } =
    useContext(TaskContext);

  return (
    <SearchTaskContainer>
      <SearchByFilter searchBy={searchBy} setSearchBy={setSearchBy} />
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
