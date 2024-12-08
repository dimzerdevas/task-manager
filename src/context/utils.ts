import {
  PriorityEnum,
  PriorityType,
} from '../views/TaskManagerView/interfaces';

const priorityValues = {
  high: 3,
  medium: 2,
  low: 1,
};

export const getPriorityValue = (priority: PriorityType) =>
  priority === PriorityEnum.high
    ? priorityValues.high
    : priority === PriorityEnum.medium
      ? priorityValues.medium
      : priorityValues.low;
