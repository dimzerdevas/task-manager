import { List } from "@mui/material";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";
import { StrictModeDroppable } from "../../../../components/StrictModeDroppable";
import { TaskItem } from "../TaskItem";
import { useTaskContext } from "../../../../context";

export const TaskList = (): JSX.Element => {
  const { tasks, setTasks } = useTaskContext();

  const handleDragDrop = (results: DropResult) => {
    const { source, destination, type } = results;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reOrderedTasks = structuredClone(tasks);
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedTask] = reOrderedTasks.splice(sourceIndex, 1);

      reOrderedTasks.splice(destinationIndex, 0, removedTask);

      setTasks(reOrderedTasks);
    }
  };
  return (
    <DragDropContext onDragEnd={handleDragDrop}>
      <List>
        <StrictModeDroppable droppableId="ROOT" type="group">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map(({ isEditing, text, id, completed }, index) => (
                <Draggable
                  draggableId={String(id + index)}
                  key={id}
                  index={index}
                >
                  {(provided) => (
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <TaskItem
                        isEditing={isEditing}
                        text={text}
                        completed={completed}
                        key={id}
                        id={id}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </StrictModeDroppable>
      </List>
    </DragDropContext>
  );
};
