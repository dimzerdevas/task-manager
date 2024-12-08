import { AddTaskContainer, StyledIconButton } from './style';
import { AddCircleOutline } from '@mui/icons-material';
import { useTaskContext } from '../../../../context';
import { TextField } from '@mui/material';

export const AddTask = (): JSX.Element => {
  const { newTask, setNewTask, addTask } = useTaskContext();
  return (
    <AddTaskContainer>
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
