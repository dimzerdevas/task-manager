import { useEffect, useState } from "react";
import { Task } from "./interfaces";

export const useTaskManager = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") ?? '[]');
        if (storedTasks?.length) {
            setTasks(storedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (newTask === "") return;
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
    return {
        addTask,
        editTask,
        deleteTask,
        toggleEdit,
        toggleComplete,
        tasks,
        newTask,
        setNewTask,
    }
}