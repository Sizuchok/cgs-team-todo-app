import { Application } from 'express';
import authRouter from './api/auth.route';
import todosRouter from './api/todos.route';
import usersRouter from './api/users.route';

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.use('/api/v1/todos', todosRouter);
    this.app.use('/api/v1/auth', authRouter);
    this.app.use('/api/v1/users', usersRouter);
  }
}

export default AppRouter;
