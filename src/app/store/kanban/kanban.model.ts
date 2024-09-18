import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

interface Task {
  title: string;
  description: string;
  status: 'Todo' | 'Doing' | 'Done';
  subtasks: Subtask[];
}

interface Subtask {
  title: string;
  isCompleted: boolean;
}

interface Column {
  name: string;
  tasks: Task[];
}

export interface IBoard {
  name: string;
  columns: Column[];
}

export interface IBoardsData {
  boards: IBoard[];
}

export interface kanbanState extends EntityState<IBoard>{
  loading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<IBoard> = createEntityAdapter<IBoard>()

export const initialState: kanbanState = adapter.getInitialState({
  loading: false,
  error: null
})
