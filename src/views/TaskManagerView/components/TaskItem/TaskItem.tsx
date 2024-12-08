import {
  ListItemText,
  IconButton,
  Checkbox,
  Button,
  ListItemButton,
} from '@mui/material';
import { Edit, Delete, Save, DragIndicator } from '@mui/icons-material';
import {
  Actions,
  StyledListItem,
  StyledTextField,
  TaskDisplayed,
} from './style';
import { useTaskContext } from '../../../../context';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import { Task } from '../../interfaces';
import { PriorityButtonGroup } from './components';

export const TaskItem = ({
  id,
  text,
  isEditing,
  completed,
  dueDate,
  priority,
}: Pick<
  Task,
  'id' | 'text' | 'isEditing' | 'completed' | 'dueDate' | 'priority'
>): JSX.Element => {
  const { editTask, toggleEdit, deleteTask, toggleComplete } = useTaskContext();

  return (
    <StyledListItem
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      <DragIndicator />
      <Checkbox checked={completed} onChange={() => toggleComplete(id)} />
      {isEditing ? (
        <>
          <StyledTextField
            value={text}
            data-testId={`edit-field-${text}`}
            onChange={(e) =>
              editTask({ id, updatedValue: e.target.value, field: 'text' })
            }
          />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DateField
              label="Due Date"
              value={moment(dueDate)}
              format="DD/MM/YYYY"
              onChange={(e) =>
                editTask({
                  id,
                  updatedValue: moment(e).format('DD/MM/YYYY'),
                  field: 'dueDate',
                })
              }
            />
          </LocalizationProvider>
          <PriorityButtonGroup id={id} priority={priority} />
        </>
      ) : (
        <>
          <TaskDisplayed>
            <ListItemText primary={text} />
            <ListItemText primary={dueDate} />
          </TaskDisplayed>

          <ListItemButton>
            {priority === 'high' ? (
              <Button variant="outlined" color="error" fullWidth>
                High
              </Button>
            ) : priority === 'medium' ? (
              <Button variant="outlined" color="info" fullWidth>
                Medium
              </Button>
            ) : (
              <Button variant="outlined" color="success" fullWidth>
                Low
              </Button>
            )}
          </ListItemButton>
        </>
      )}
      <Actions>
        <IconButton onClick={() => toggleEdit(id)}>
          {isEditing ? <Save /> : <Edit />}
        </IconButton>
        <IconButton onClick={() => deleteTask(id)}>
          <Delete />
        </IconButton>
      </Actions>
    </StyledListItem>
  );
};
