import { Form, Formik } from 'formik';
import Button from '../../../common/components/button/button.component';
import Input from '../../../common/components/input/input';
import { Label } from '../../../common/components/label/label.styled';
import { Switch } from '../../../common/components/switch/switch.component';
import { Todo, UpdateTodo } from '../../../common/types/todo.types';
import { useUpdateTodo } from '../../hooks/update-todo.hook';
import { CreateTodoSchema } from '../../schemas/create-todo.schema';
import * as Styled from './todo-form.styled';

type Props = {
  todo: Todo;
  handleClose: () => void;
};

const UpdateTodoForm = ({ todo, handleClose }: Props) => {
  const { mutateAsync } = useUpdateTodo(todo.id);

  const handleSubmit = async (values: UpdateTodo) => {
    await mutateAsync(values);
    handleClose();
  };

  return (
    <Formik<UpdateTodo>
      initialValues={{
        title: todo.title,
        description: todo.description,
        isPublic: todo.isPublic,
        isChecked: todo.isChecked
      }}
      onSubmit={handleSubmit}
      validationSchema={CreateTodoSchema}
    >
      {({ isSubmitting, handleChange, values, errors }) => (
        <Form>
          <Input
            name="title"
            label="Title"
            type="text"
            errors={!!errors.title}
            placeholder="What to do?"
          />

          <Input
            name="description"
            label="Description"
            type="text"
            errors={!!errors.description}
            placeholder="More detail on you task"
          />

          <Styled.SwitchesContainer>
            <div>
              <Label>Done</Label>
              <Switch checked={values.isChecked} onChange={handleChange} name="isChecked" />
            </div>
            <div>
              <Label>Public</Label>
              <Switch checked={values.isPublic} onChange={handleChange} name="isPublic" />
            </div>
          </Styled.SwitchesContainer>

          <Button title="I'll do it" type="button" disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default UpdateTodoForm;
