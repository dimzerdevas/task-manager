export interface Task {
  id: number;
  text: string;
  isEditing: boolean;
  completed: boolean;
  dueDate: string;
  priority: PriorityType;
}

export type FilterType =
  | 'all'
  | 'done'
  | 'pending'
  | 'dueDateEarlier'
  | 'dueDateLater'
  | 'priorityLowToHigh'
  | 'priorityHighToLow';

export type PriorityType = 'low' | 'medium' | 'high';

export enum PriorityEnum {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export enum FilterEnum {
  All = 'all',
  Done = 'done',
  Pending = 'pending',
  DueDateEarlier = 'dueDateEarlier',
  DueDateLater = 'dueDateLater',
  PriorityLowToHigh = 'priorityLowToHigh',
  PriorityHighToLow = 'priorityHighToLow',
}
