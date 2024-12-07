import { TextField } from "@mui/material";
import { TaskFilter } from "../TaskFilter";
import { AddTaskContainer, StyledIconButton } from "./style";
import { AddCircleOutline } from "@mui/icons-material";
import { useTaskContext } from "../../../../context";

export const AddTask = (): JSX.Element => {
  const { filter, setFilter, newTask, setNewTask, addTask } = useTaskContext();
  return (
    <AddTaskContainer>
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TextField
        label="Add a new task"
        variant="outlined"
        fullWidth
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        margin="normal"
      />
      <StyledIconButton onClick={addTask}>
        <AddCircleOutline />
      </StyledIconButton>
    </AddTaskContainer>
  );
};
