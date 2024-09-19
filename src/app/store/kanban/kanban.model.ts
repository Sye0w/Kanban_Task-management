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
  tasks: Task[];
}

export interface IBoard {
  id: string;
  name: string;
  columns: Column[];
}

export interface State extends EntityState<IBoard> {
  selectedBoardId: string | null;
  loading: boolean;
  error: string | null;
}

export interface IBoardsData {
  boards: IBoard[];
  type: string;
}
