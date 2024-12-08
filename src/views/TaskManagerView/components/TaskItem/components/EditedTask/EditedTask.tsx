import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useTaskContext } from '../../../../../../context';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import { PriorityButtonGroup } from './components';
import { Task } from '../../../../interfaces';
import { StyledTextField, TaskDisplayed } from './style';

export const EditedTask = ({
  id,
  text,
  dueDate,
  priority,
}: Pick<Task, 'id' | 'text' | 'dueDate' | 'priority'>): JSX.Element => {
  const { editTask } = useTaskContext();
  return (
    <>
      <TaskDisplayed>
        <StyledTextField
          label="Description"
          value={text}
          data-testid={`edit-field-${text}`}
          onChange={(e) =>
            editTask({ id, updatedValue: e.target.value, field: 'text' })
          }
          error={text.length === 0}
          helperText={text.length === 0 ? 'This field cannot be empty' : ''}
        />
        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="en-gb">
          <DatePicker
            label="Controlled picker"
            value={moment(dueDate, 'DD/MM/YYYY')}
            format="DD/MM/YYYY"
            onChange={(e) => {
              editTask({
                id,
                updatedValue: moment(e).format('DD/MM/YYYY'),
                field: 'dueDate',
              });
            }}
          />
        </LocalizationProvider>
      </TaskDisplayed>
      <PriorityButtonGroup id={id} priority={priority} />
    </>
  );
};
