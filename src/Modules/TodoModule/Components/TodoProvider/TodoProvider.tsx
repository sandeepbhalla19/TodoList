import React, {
  createContext,
  useReducer,
  Dispatch,
} from 'react';
import { TodoAction, TodoProviderProps, TodoState } from '../../Types/Types';

export const TodoContext = createContext<
  {state: TodoState; dispatch: Dispatch<TodoAction>} | undefined
>(undefined);

// Reducer function for handling state changes
const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [{title: action.payload, completed: false}, ...state.todos ],
      };
    case 'REMOVE_TODO':
      const filteredTodos = state.todos.filter(
        (_, index) => index !== action.payload,
      );
      return {...state, todos: filteredTodos};
    case 'TOGGLE_TODO':
      const toggledTodos = state.todos.map((todo, index) =>
        index === action.payload ? {...todo, completed: !todo.completed} : todo,
      );
      return {...state, todos: toggledTodos};
    default:
      return state;
  }
};

// Context provider component
export const TodoProvider: React.FC<TodoProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(todoReducer, {todos: []});

  return (
    <TodoContext.Provider value={{state, dispatch}}>
      {children}
    </TodoContext.Provider>
  );
};
