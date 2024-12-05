import { TaskItem } from "../TaskItem"
import { Task } from "../../interfaces"

export const TaskList = ({
    tasks
}: {
    tasks: Task[]
}): JSX.Element => {
    return (
        <div>
            List:
            {tasks.map(({ description }) => <TaskItem text={description} />)}
        </div>)
}