import { Form, Formik } from 'formik';
import Button from '../../../common/components/button/button.component';
import Input from '../../../common/components/input/input';
import { Label } from '../../../common/components/label/label.styled';
import { Switch } from '../../../common/components/switch/switch.component';
import { CreateTodo } from '../../../common/types/todo.types';
import { useCreateTodo } from '../../hooks/create-todo.hook';
import { CreateTodoSchema } from '../../schemas/create-todo.schema';
import * as Styled from './todo-form.styled';

type Props = {
  handleClose: () => void;
};

const CreateTodoForm = ({ handleClose }: Props) => {
  const { mutateAsync } = useCreateTodo();

  const handleSubmit = async (values: CreateTodo) => {
    await mutateAsync(values);
    handleClose();
  };

  return (
    <Formik<CreateTodo>
      initialValues={{ title: '', description: '', isPublic: false }}
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
              <Switch disabled />
            </div>
            <div>
              <Label>Public</Label>
              <Switch checked={values.isPublic} onChange={handleChange} name="isPublic" />
            </div>
          </Styled.SwitchesContainer>

          <Button title="I'll do it" type="button" disabled={isSubmitting} onClick={() => {}} />
        </Form>
      )}
    </Formik>
  );
};

export default CreateTodoForm;
