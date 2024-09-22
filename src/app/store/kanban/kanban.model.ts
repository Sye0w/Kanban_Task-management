import { EntityState } from '@ngrx/entity';

export interface Subtask {
  title: string;
  isCompleted: boolean;
}

export interface Task {
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
}

export interface Column {
  name: string;
  tasks: Task[];
}

export interface IBoard {
  id: string;
  name: string;
  columns: Column[];
}

export interface IBoardsData {
  boards: IBoard[];
}

export interface State extends EntityState<IBoard> {
  loading: boolean;
  error: any;
}
