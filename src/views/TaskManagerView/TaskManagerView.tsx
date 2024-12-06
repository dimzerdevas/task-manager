import { TextField, List, IconButton } from "@mui/material";
import { TaskItem } from "./components";
import { AddTaskContainer, Container } from "./style";
import { AddCircleOutline } from "@mui/icons-material";
import { useTaskManager } from "../../context";
import { TaskFilter } from "./components/TaskFilter";

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

  return (
    <Container>
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
