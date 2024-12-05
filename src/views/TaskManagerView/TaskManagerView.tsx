import { useState } from "react";
import { TaskList } from "./components"
import { Button } from "@mui/material";
import { Task } from "./interfaces";

export const TaskManagerView = (): JSX.Element => {
    const [task, setTask] = useState<Task | null>(null);
    const [todoList, setTodoList] = useState<Task[]>([] as Task[])
    const handleTaskAddition = () => {
        if (task) {
            setTodoList([...todoList, task]);
        }
    }
    return (<>
        <h1>
            <input type="text" onChange={(e) => setTask({ id: todoList.length, description: e.target.value, status: false })} />
            <Button variant="contained" color="primary" onClick={() => handleTaskAddition()}>
                Add Task
            </Button>
            Task Manager
            <TaskList tasks={todoList} />
        </h1>
    </>)
}