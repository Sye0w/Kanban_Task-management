// src/app/store/kanban/kanban.model.ts

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

export interface Board {
  id: string;
  name: string;
  columns: Column[];
}

export interface IBoardsData {
  boards: Board[];
}

export interface State extends EntityState<Board> {
  loading: boolean;
  error: any;
}
