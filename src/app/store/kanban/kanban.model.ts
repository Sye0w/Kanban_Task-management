import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface Task {
  id: string; 
  title: string;
  description: string;
  status: 'Todo' | 'Doing' | 'Done';
  subtasks: Subtask[];
}

export interface Subtask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface Column {
  id: string;
  name: string;
  taskIds: string[];
}

export interface IBoard {
  id: string;
  name: string;
  columnIds: string[];
}

export interface KanbanState extends EntityState<IBoard> {
  selectedBoardId: string | null;
  loading: boolean;
  error: string | null;
}
