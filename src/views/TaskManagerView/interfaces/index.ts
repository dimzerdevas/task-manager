export interface Task {
    id: number;
    text: string;
    isEditing: boolean;
    completed: boolean;
}

export interface TaskContextType {
    tasks: Task[];
    addTask: () => void;
    deleteTask: (id: number) => void;
    editTask: (id: number, newText: string) => void;
    toggleComplete: (id: number) => void;
    toggleEdit: (id: number) => void;
    newTask: string;
    setNewTask: (text: string) => void;
    filter: string;
    setFilter: (filter: 'all' | 'done' | 'pending') => void;
    setTasks: (tasks: Task[]) => void;
}