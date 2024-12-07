import { ListItemText, TextField, IconButton, Checkbox } from '@mui/material';
import { Edit, Delete, Save, DragIndicator } from '@mui/icons-material';
import { StyledListItem } from './style';
import { useTaskContext } from '../../../../context';

export const TaskItem = ({
  id,
  text,
  isEditing,
  completed,
}: {
  text: string;
  id: number;
  isEditing: boolean;
  completed: boolean;
}): JSX.Element => {
  const { editTask, toggleEdit, deleteTask, toggleComplete } = useTaskContext();

  return (
    <StyledListItem
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      <DragIndicator />
      <Checkbox checked={completed} onChange={() => toggleComplete(id)} />
      {isEditing ? (
        <TextField
          value={text}
          data-testId={`edit-field-${text}`}
          onChange={(e) => editTask(id, e.target.value)}
          fullWidth
        />
      ) : (
        <ListItemText primary={text} />
      )}
      <IconButton onClick={() => toggleEdit(id)}>
        {isEditing ? <Save /> : <Edit />}
      </IconButton>
      <IconButton onClick={() => deleteTask(id)}>
        <Delete />
      </IconButton>
    </StyledListItem>
  );
};
