import { Button, ButtonGroup } from '@mui/material';
import { useTaskContext } from '../../../../../../../../context';
import { useIsMobile } from '../../../../../../../../hooks';
import { PriorityEnum } from '../../../../../../interfaces';

export const PriorityButtonGroup = ({
  id,
  priority,
}: {
  id: number;
  priority: 'low' | 'medium' | 'high';
}) => {
  const { editTask } = useTaskContext();
  const isMobile = useIsMobile();
  return (
    <ButtonGroup
      variant="text"
      orientation={isMobile ? 'vertical' : 'horizontal'}
      aria-label="Edit Priority of task button group"
    >
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
