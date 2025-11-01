export interface Todo {
    id: number,
    title: string,
    completed: boolean
}

export type TodoTitle = Pick<Todo, 'title'>;
export type TodoId = Pick<Todo, 'id'>
export type TodoCompleted = Pick<Todo, 'completed'>;
export type TodoMarkCompleted = Pick<Todo, 'id' | 'completed'>