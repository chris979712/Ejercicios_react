import { TODO_FILTERS } from "../utils/consts";

export interface Todo {
    id: string,
    title: string,
    completed: boolean
}

export type TodoTitle = Pick<Todo, 'title'>;
export type TodoId = Pick<Todo, 'id'>
export type TodoCompleted = Pick<Todo, 'completed'>;
export type TodoMarkCompleted = Pick<Todo, 'id' | 'completed'>
export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]