export interface Task {
   id: string;
   title: string;
   isCompleted: boolean;
};

export type TaskFilter = 'all' | 'todo' | 'done';

