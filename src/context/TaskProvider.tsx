import { useState, ReactNode, useEffect } from 'react';
import {
  FilterEnum,
  FilterType,
  PriorityEnum,
  PriorityType,
  Task,
} from '../views/TaskManagerView/interfaces';
import moment from 'moment';
import { TaskContext } from './TaskContext';
import { getPriorityValue } from './utils';

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState<FilterType>(FilterEnum.All);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [searchedTasks, setSearchedTasks] = useState<Task[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') ?? '[]');
    if (storedTasks?.length) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    switch (filter) {
      case 'done':
        setFilteredTasks(tasks.filter((task) => task.completed));
        break;
      case 'pending':
        setFilteredTasks(tasks.filter((task) => !task.completed));
        break;
      case 'dueDateEarlier':
        setFilteredTasks(
          [...tasks].sort(
            (taskA, taskB) =>
              new Date(taskA.dueDate).getTime() -
              new Date(taskB.dueDate).getTime(),
          ),
        );
        break;
      case 'dueDateLater':
        setFilteredTasks(
          [...tasks].sort(
            (taskA, taskB) =>
              new Date(taskB.dueDate).getTime() -
              new Date(taskA.dueDate).getTime(),
          ),
        );
        break;
      case 'priorityLowToHigh':
        setFilteredTasks(
          [...tasks].sort(
            (taskA, taskB) =>
              getPriorityValue(taskA.priority) -
              getPriorityValue(taskB.priority),
          ),
        );
        break;
      case 'priorityHighToLow':
        setFilteredTasks(
          [...tasks].sort(
            (taskA, taskB) =>
              getPriorityValue(taskB.priority) -
              getPriorityValue(taskA.priority),
          ),
        );
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  }, [filter, tasks]);

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask,
        isEditing: false,
        completed: false,
        dueDate: String(moment(Date.now()).format('DD/MM/YYYY')),
        priority: PriorityEnum.low,
      },
    ]);
    setNewTask('');
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = ({
    id,
    updatedValue,
    field,
  }: {
    id: number;
    updatedValue: string | PriorityType;
    field: string;
  }): void => {
    switch (field) {
      case 'text':
        setTasks(
          tasks.map((task) =>
            task.id === id ? { ...task, text: updatedValue } : task,
          ),
        );
        break;
      case 'dueDate':
        setTasks(
          tasks.map((task) =>
            task.id === id ? { ...task, dueDate: updatedValue } : task,
          ),
        );
        break;
      case 'priority':
        setTasks(
          tasks.map((task) =>
            task.id === id
              ? {
                  ...task,
                  priority: updatedValue as PriorityType,
                }
              : task,
          ),
        );
        break;
    }
  };

  const toggleEdit = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id && task.text.length !== 0
          ? { ...task, isEditing: !task.isEditing }
          : task,
      ),
    );
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleSearch = (searchValue: string) => {
    const searchResults = filteredTasks.filter((task) => {
      const { text } = task;
      return text.includes(searchValue);
    });

    setSearchedTasks(searchResults);
  };

  return (
    <TaskContext.Provider
      value={{
        addTask,
        editTask,
        deleteTask,
        toggleEdit,
        toggleComplete,
        tasks: !isSearching ? filteredTasks : searchedTasks,
        newTask,
        setNewTask,
        filter,
        setFilter,
        setTasks,
        handleSearch,
        setIsSearching,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
