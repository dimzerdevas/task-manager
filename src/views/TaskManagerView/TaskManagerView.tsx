import { TaskList } from "./components"

export const TaskManagerView = (): JSX.Element => {
    return (<>
        <h1>
            Task Manager
            <TaskList />
        </h1>
    </>)
}