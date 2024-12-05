import {
  ListItem,
  ListItemText,
  TextField,
  IconButton,
  Checkbox,
} from "@mui/material";
import { Edit, Delete, Save } from "@mui/icons-material";

export const TaskItem = ({
  id,
  text,
  isEditing,
  editTask,
  toggleEdit,
  deleteTask,
  completed,
  toggleComplete,
}: {
  text: string;
  id: number;
  isEditing: boolean;
  editTask: (id: number, text: string) => void;
  toggleEdit: (id: number) => void;
  deleteTask: (id: number) => void;
  toggleComplete: (id: number) => void;
  completed: boolean;
}): JSX.Element => (
  <ListItem style={{ textDecoration: completed ? "line-through" : "none" }}>
    <Checkbox checked={completed} onChange={() => toggleComplete(id)} />
    {isEditing ? (
      <TextField
        value={text}
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
  </ListItem>
);
