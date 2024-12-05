import { TextField, List, IconButton, Button } from "@mui/material";
import { TaskItem } from "./components";
import { AddTaskContainer, Container } from "./style";
import { AddCircleOutline } from "@mui/icons-material";
import { useTaskManager } from "../../context";
import { TaskFilter } from "./components/TaskFilter";
import { useChuckNorrisJoke } from "./queries";
import { Loader } from "../../components";
import { useSnackbar } from "notistack";
import { useEffect } from "react";

export const TaskManagerView = () => {
  const {
    tasks,
    newTask,
    setNewTask,
    addTask,
    deleteTask,
    editTask,
    toggleEdit,
    toggleComplete,
    filter,
    setFilter,
  } = useTaskManager();

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
        variant: "success",
        autoHideDuration: 5000,
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
      });
    } else if (isErrorChuckNorrisJoke) {
      enqueueSnackbar("Error while fetching Chuck Norris joke", {
        variant: "error",
        autoHideDuration: 5000,
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
      });
    }
  }, [chuckNorrisJoke, enqueueSnackbar, isErrorChuckNorrisJoke]);

  return (
    <Container>
      {isLoadingChuckNorrisJoke && <Loader />}
      <AddTaskContainer>
        <TaskFilter filter={filter} setFilter={setFilter} />
        <TextField
          label="Add a new task"
          variant="outlined"
          fullWidth
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          margin="normal"
        />
        <IconButton onClick={addTask}>
          <AddCircleOutline />
        </IconButton>
      </AddTaskContainer>
      <Button onClick={() => refetchChuckNorrisJoke()}>Bored?</Button>
      <List>
        {tasks.map(({ isEditing, text, id, completed }) => (
          <TaskItem
            editTask={editTask}
            toggleEdit={toggleEdit}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            isEditing={isEditing}
            text={text}
            completed={completed}
            key={id}
            id={id}
          />
        ))}
      </List>
    </Container>
  );
};
