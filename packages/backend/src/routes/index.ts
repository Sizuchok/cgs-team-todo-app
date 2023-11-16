import { Application } from 'express';
import todosRouter from './api/todos.route';
import userRouter from './api/user.route';

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.use('/api/v1/todos', todosRouter);
    this.app.use('/api/v1/user', userRouter);
  }
}

export default AppRouter;
