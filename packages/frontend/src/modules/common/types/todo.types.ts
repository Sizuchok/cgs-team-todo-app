export type Todo = {
  id: string;
  title: string;
  description: string;
  isChecked: boolean;
  isPublic: boolean;
};

export type CreateTodo = Omit<Todo, 'id' | 'isChecked'>;

export type UpdateTodo = Partial<Omit<Todo, 'id'>>;
