import { Button, ButtonGroup } from '@mui/material';
import { PriorityEnum } from '../../../../interfaces';
import { useTaskContext } from '../../../../../../context';

export const PriorityButtonGroup = ({
  id,
  priority,
}: {
  id: number;
  priority: 'low' | 'medium' | 'high';
}) => {
  const { editTask } = useTaskContext();
  return (
    <ButtonGroup variant="text" aria-label="Basic button group">
      <Button
        color="success"
        variant={priority === PriorityEnum.low ? 'outlined' : 'text'}
        onClick={() =>
          editTask({
            id,
            updatedValue: PriorityEnum.low,
            field: 'priority',
          })
        }
      >
        Low
      </Button>
      <Button
        color="info"
        variant={priority === PriorityEnum.medium ? 'outlined' : 'text'}
        onClick={() =>
          editTask({
            id,
            updatedValue: PriorityEnum.medium,
            field: 'priority',
          })
        }
      >
        Medium
      </Button>
      <Button
        color="error"
        variant={priority === PriorityEnum.high ? 'outlined' : 'text'}
        onClick={() =>
          editTask({
            id,
            updatedValue: PriorityEnum.high,
            field: 'priority',
          })
        }
      >
        High
      </Button>
    </ButtonGroup>
  );
};
