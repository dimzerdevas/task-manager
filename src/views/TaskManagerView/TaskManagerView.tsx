import { Button } from '@mui/material';
import { Container, FilterAndAddTaskContainer } from './style';
import { useChuckNorrisJoke } from './queries';
import { Loader } from '../../components';
import { TaskList, AddTask, SearchTask, TaskFilter } from './components';

export const TaskManagerView = () => {
  const { isLoadingChuckNorrisJoke, refetchChuckNorrisJoke } =
    useChuckNorrisJoke();

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
