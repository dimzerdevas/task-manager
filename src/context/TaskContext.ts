import { createContext } from 'react';
import {
  FilterType,
  PriorityType,
  Task,
} from '../views/TaskManagerView/interfaces';

export interface TaskContextType {
  tasks: Task[];
  addTask: () => void;
  deleteTask: (id: number) => void;
  editTask: ({
    id,
    updatedValue,
    field,
  }: {
    id: number;
    updatedValue: string | PriorityType;
    field: string;
  }) => void;
  toggleComplete: (id: number) => void;
  toggleEdit: (id: number) => void;
  newTask: string;
  setNewTask: (text: string) => void;
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  setTasks: (tasks: Task[]) => void;
  handleSearch: (searchValue: string) => void;
  setIsSearching: (value: boolean) => void;
}

export const TaskContext = createContext<TaskContextType | null>(null);
