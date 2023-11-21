// Local storage keys
export const STORAGE_KEYS = {
  JWT_TOKEN: 'JWT_TOKEN_STUDENT',
  ADDRESS: 'ADDRESS',
  TOKEN: 'TOKEN'
} as const;

// React-query keys
export const QUERY_KEYS = {
  GET_ALL_TODOS: 'get-all-todos',
  GET_TODO_BY_ID: 'get-todo-by-id',
  CREATE_TODO: 'create-todo',
  UPDATE_TODO: 'update-todo',
  DELETE_TODO: 'delete-todo'
} as const;

// Backend Routes
export const BACKEND_KEYS = {
  TODOS: 'todos'
} as const;

export const ROUTER_KEYS = {
  ROOT: '/',
  TODOS: 'todos',
  AUTHORIZED: 'authorized'
} as const;
