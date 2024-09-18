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

interface Board {
  name: string;
  columns: Column[];
}

export interface BoardsData {
  boards: Board[];
}
