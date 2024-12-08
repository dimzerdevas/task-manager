import { Button, ListItemText } from '@mui/material';
import { Task } from '../../../../interfaces';
import { StyledListItemButton, TaskDisplayed } from './style';

export const DisplayedTask = ({
  text,
  dueDate,
  priority,
}: Pick<Task, 'text' | 'dueDate' | 'priority'>): JSX.Element => {
  return (
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
  );
};
