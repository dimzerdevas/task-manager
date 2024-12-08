import { IconButton, Checkbox } from '@mui/material';
import { Edit, Delete, Save, DragIndicator } from '@mui/icons-material';
import { Actions, Controls, StyledListItem } from './style';
import { useTaskContext } from '../../../../context';
import { Task } from '../../interfaces';
import { DisplayedTask, EditedTask } from './components';
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
  const { toggleEdit, deleteTask, toggleComplete } = useTaskContext();
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
        <EditedTask id={id} text={text} dueDate={dueDate} priority={priority} />
      ) : (
        <DisplayedTask text={text} dueDate={dueDate} priority={priority} />
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
