import { useContext } from 'react';
import { TaskContext, TaskContextType } from './TaskContext';

export const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTaskContext must be used within a Task Provider');
  }

  return context;
};
