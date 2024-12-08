import { ListItemText, IconButton, Checkbox, Button } from '@mui/material';
import { Edit, Delete, Save, DragIndicator } from '@mui/icons-material';
import {
  Actions,
  Controls,
  StyledListItem,
  StyledListItemButton,
  StyledTextField,
  TaskDisplayed,
} from './style';
import { useTaskContext } from '../../../../context';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import { Task } from '../../interfaces';
import { PriorityButtonGroup } from './components';
import { useIsMobile } from '../../../../hooks';

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
  const isMobile = useIsMobile();

  return (
    <StyledListItem
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        padding: isMobile ? '10px 5px' : '10px',
        justifyContent: 'space-between',
      }}
    >
      <Controls>
        <DragIndicator />
        <Checkbox checked={completed} onChange={() => toggleComplete(id)} />
      </Controls>
      {isEditing ? (
        <>
          <TaskDisplayed>
            <StyledTextField
              value={text}
              data-testid={`edit-field-${text}`}
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
          </TaskDisplayed>
          <PriorityButtonGroup id={id} priority={priority} />
        </>
      ) : (
        <>
          <TaskDisplayed>
            <ListItemText primary={text} />
            <ListItemText
              primary={`Due to ${dueDate}`}
              primaryTypographyProps={{
                style: { fontStyle: 'italic', fontSize: '13px' },
              }}
            />
          </TaskDisplayed>

          <StyledListItemButton>
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
          </StyledListItemButton>
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
