import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Task, TaskContextType } from "../views/TaskManagerView/interfaces";

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState<"all" | "done" | "pending">("all");
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [searchBy, setSearchBy] = useState<
    "description" | "dueDate" | "priority"
  >("description");
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");
    if (storedTasks?.length) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    switch (filter) {
      case "done":
        setFilteredTasks(tasks.filter((task) => task.completed));
        break;
      case "pending":
        setFilteredTasks(tasks.filter((task) => !task.completed));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  }, [filter, tasks]);

  useEffect(() => {
    switch (searchBy) {
      case "description":
        console.log("des");
        break;
      case "dueDate":
        console.log("date");
        break;
      case "priority":
        console.log("pri");
        break;
    }
  }, [searchBy]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTask, isEditing: false, completed: false },
    ]);
    setNewTask("");
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: number, newText: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText, isEditing: false } : task
      )
    );
  };

  const toggleEdit = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleSearch = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value: searchInput } = event.target;

    const searchResults = filteredTasks.filter((task) => {
      const { text } = task;
      return text.includes(searchInput);
    });

    // TODO: replace which searchedTasks
    setFilteredTasks(searchResults);
  };

  return (
    <TaskContext.Provider
      value={{
        addTask,
        editTask,
        deleteTask,
        toggleEdit,
        toggleComplete,
        tasks: filteredTasks,
        newTask,
        setNewTask,
        filter,
        setFilter,
        setTasks,
        searchBy,
        setSearchBy,
        searchValue,
        setSearchValue,
        handleSearch,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// TODO: fix eslint configuration
// eslint-disable-next-line react-refresh/only-export-components
export const useTaskManager = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};
