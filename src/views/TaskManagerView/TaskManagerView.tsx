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
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";
import { StrictModeDroppable } from "../../components/StrictModeDroppable";

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
    setTasks,
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

  const handleDragDrop = (results: DropResult) => {
    const { source, destination, type } = results;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reOrderedTasks = structuredClone(tasks);
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedTask] = reOrderedTasks.splice(sourceIndex, 1);

      reOrderedTasks.splice(destinationIndex, 0, removedTask);

      setTasks(reOrderedTasks);
    }
  };

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
      <DragDropContext onDragEnd={handleDragDrop}>
        <List>
          <StrictModeDroppable droppableId="ROOT" type="group">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {tasks.map(({ isEditing, text, id, completed }, index) => (
                  <Draggable
                    draggableId={String(id + index)}
                    key={id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
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
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </StrictModeDroppable>
        </List>
      </DragDropContext>
    </Container>
  );
};
