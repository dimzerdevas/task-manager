import { Button } from '@mui/material';
import { Container, FilterAndAddTaskContainer } from './style';
import { useChuckNorrisJoke } from './queries';
import { Loader } from '../../components';
import { useSnackbar } from 'notistack';
import { useEffect } from 'react';
import { TaskList } from './components/TaskList';
import { AddTask } from './components/AddTask';
import { SearchTask } from './components/SearchTask';
import { TaskFilter } from './components/TaskFilter';

export const TaskManagerView = () => {
  const {
    chuckNorrisJoke,
    isLoadingChuckNorrisJoke,
    refetchChuckNorrisJoke,
    isErrorChuckNorrisJoke,
  } = useChuckNorrisJoke();

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (chuckNorrisJoke) {
      enqueueSnackbar(chuckNorrisJoke, {
        variant: 'success',
        autoHideDuration: 5000,
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      });
    } else if (isErrorChuckNorrisJoke) {
      enqueueSnackbar('Error while fetching Chuck Norris joke', {
        variant: 'error',
        autoHideDuration: 5000,
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      });
    }
  }, [chuckNorrisJoke, enqueueSnackbar, isErrorChuckNorrisJoke]);

  return (
    <Container>
      {isLoadingChuckNorrisJoke && <Loader />}
      <SearchTask />
      <FilterAndAddTaskContainer>
        <TaskFilter />
        <AddTask />
      </FilterAndAddTaskContainer>
      <Button onClick={() => refetchChuckNorrisJoke()}>Bored?</Button>
      <TaskList />
    </Container>
  );
};
