import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { CreateTodoDto } from '../dto/todo/create-todo.dto';
import { GetAllTodosFiltersDto, GetAllTodosResponseDto } from '../dto/todo/get-all-todos.dto';
import { TodoDto } from '../dto/todo/todo.dto';
import { UpdateTodoDto } from '../dto/todo/update-todo.dto';
import { UserDto } from '../dto/user/user.dto';
import { Todo } from '../entities/todo.entity';
import { HttpError } from '../exceptions/HttpError';

class TodoService {
  async createTodo(createTodoDto: CreateTodoDto): Promise<TodoDto> {
    const newTodo = Todo.create({ ...createTodoDto });
    return Todo.save(newTodo);
  }

  async findAllTodos(
    user: UserDto,
    queryParams: GetAllTodosFiltersDto
  ): Promise<GetAllTodosResponseDto> {
    const { isChecked, isPrivate, isPublic, limit, offset, query } = queryParams;

    const qb = Todo.createQueryBuilder('todo').leftJoinAndSelect('todo.user', 'user');

    if (isPublic) {
      qb.orWhere('todo.isPublic = TRUE');
    }

    if (isPrivate) {
      qb.orWhere('(todo.isPublic = FALSE AND todo.user.id = :userId)', {
        userId: user.id
      });
    }

    if (isChecked) {
      qb.andWhere('todo.isChecked = TRUE');
    }

    if (!Object.values(queryParams).includes(true)) {
      qb.where('(todo.user.id = :userId OR todo.isPublic = TRUE)', {
        userId: user.id
      });
    }

    if (query) {
      qb.andWhere('(todo.title ILIKE :query OR todo.description ILIKE :query)', {
        query: `%${query}%`
      });
    }

    qb.offset(offset).limit(limit);

    const [todos, count] = await qb.getManyAndCount();
    return { todos, count };
  }

  async findTodoById(id: string): Promise<TodoDto> {
    const todo = await Todo.findOneBy({ id });

    if (!todo) {
      throw new HttpError(StatusCodes.NOT_FOUND, `Todo with { id: ${id} } not found`);
    }

    return todo;
  }

  async updateTodoById(id: string, updateData: UpdateTodoDto): Promise<TodoDto> {
    const todo = await Todo.findOneBy({ id });

    if (!todo) {
      throw new HttpError(StatusCodes.BAD_REQUEST, `Todo with { id: ${id} } not found for update`);
    }

    const result = await Todo.update(id, updateData);

    if (!result.affected) {
      throw new HttpError(
        StatusCodes.INTERNAL_SERVER_ERROR,
        'Todo was not updated for some reason'
      );
    }

    const updatedTodo = await Todo.findOneBy({ id });

    if (!updatedTodo) {
      throw new HttpError(StatusCodes.INTERNAL_SERVER_ERROR, 'Error retrieving the updated todo');
    }

    return updatedTodo;
  }

  async removeTodoById(id: string): Promise<void> {
    const todo = await Todo.findOneBy({ id });

    if (!todo) {
      throw new HttpError(
        StatusCodes.BAD_REQUEST,
        `Todo with { id: ${id} } not found for deletion`
      );
    }

    const result = await Todo.delete(id);

    if (!result.affected) {
      throw new HttpError(StatusCodes.INTERNAL_SERVER_ERROR, ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
  }
}

export const todoService = new TodoService();
