import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface Task {
  id: string; // Add this
  title: string;
  description: string;
  status: 'Todo' | 'Doing' | 'Done';
  subtasks: Subtask[];
}

export interface Subtask {
  id: string; // Add this
  title: string;
  isCompleted: boolean;
}

export interface Column {
  id: string; // Add this
  name: string;
  taskIds: string[]; // Change this to store task IDs instead of tasks
}

export interface IBoard {
  id: string; // Add this
  name: string;
  columnIds: string[]; // Change this to store column IDs instead of columns
}

export interface KanbanState extends EntityState<IBoard> {
  selectedBoardId: string | null;
  loading: boolean;
  error: string | null;
}
