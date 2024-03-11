import { ReactNode } from "react";

export type Todo = {
  title: string;
  completed: boolean;
};

export type TodoState = {
  todos: Todo[];
};

export type TodoAction =
  | {type: 'ADD_TODO'; payload: string}
  | {type: 'REMOVE_TODO'; payload: number}
  | {type: 'TOGGLE_TODO'; payload: number};


  export type TodoProviderProps = {
    children: ReactNode;
  };