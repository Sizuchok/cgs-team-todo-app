// Local storage keys
export const STORAGE_KEYS = {
  JWT_TOKEN: 'JWT_ACCESS_TOKEN',
  ADDRESS: 'ADDRESS',
  TOKEN: 'TOKEN'
} as const;

// React-query keys
export const QUERY_KEYS_TODO = {
  GET_ALL_TODOS: 'get-all-todos',
  GET_TODO_BY_ID: 'get-todo-by-id',
  CREATE_TODO: 'create-todo',
  UPDATE_TODO: 'update-todo',
  DELETE_TODO: 'delete-todo'
} as const;

export const QUERY_KEYS_AUTH = {
  SIGN_UP: 'auth-sign-up',
  SIGN_IN: 'auth-sign-in',
  ACTIVATE: 'auth-activate',
  GET_ME: 'auth-get-me',
  FORGOT_PWD: 'auth-forgot-pwd',
  RESET_PWD: 'auth-reset-pwd'
} as const;

export const QUERY_KEYS_USER = {
  UPDATE: 'user-edit'
} as const;

// Backend Routes
export const BACKEND_KEYS = {
  BACK: 'http://localhost:3030',
  TODOS: 'todos',
  USERS: 'users',
  AUTH: 'auth',
  R_SIGN_UP: 'sign-up',
  R_ACTIVATE: 'activate',
  R_SIGN_IN: 'sign-in',
  R_FORGOT_PASSWORD: 'forgot-password',
  R_RESET_PASSWORD: 'reset-password',
  R_GET_ME: 'get-me'
} as const;

export const ROUTER_KEYS = {
  ROOT: '/',
  TODOS: 'todos',
  AUTH: 'auth',
  ME: 'me'
} as const;

export const PARAMS_KEYS = {
  TOKEN: 'token'
} as const;
