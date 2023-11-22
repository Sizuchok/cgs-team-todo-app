import { createBrowserRouter } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import TodosPage from '../todo/todos-page.container';

export const router = createBrowserRouter([
  {
    path: APP_KEYS.ROUTER_KEYS.TODOS,
    element: <TodosPage />
  }
]);
