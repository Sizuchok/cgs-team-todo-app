import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useGetMe } from '../../auth/hooks/get-me.hook';
import Button from '../../common/components/button/button.component';
import Checkbox from '../../common/components/checkbox/checkbox.component';
import Input from '../../common/components/input/input';
import LoadingOverlay from '../../common/components/loading-overlay/loading-overlay.component';
import { UpdateUser } from '../../common/types/user.types';
import { useUpdateUser } from '../hooks/update-user.hook';
import { updateUserSchema } from '../schemas/update-user.schema';

const UpdateUserForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { data: user, isLoading: isLoadingMe, isError } = useGetMe();

  const { mutate, isLoading: isUpdating } = useUpdateUser();

  const handleSubmit = ({ name, password }: UpdateUser) => {
    const data: UpdateUser = {
      name: name || undefined,
      password: password || undefined
    };

    mutate({ id: user?.id!, data });
  };

  return isLoadingMe ? (
    <LoadingOverlay />
  ) : (
    <Formik<UpdateUser>
      initialValues={{ password: '', name: user?.name }}
      onSubmit={handleSubmit}
      validationSchema={updateUserSchema}
    >
      {({ errors, isValid }) => (
        <Form>
          <Input
            name="name"
            label="Name"
            type="text"
            errors={!!errors.name}
            placeholder="What's your new name will be?"
            disabled={isUpdating}
          />
          <Input
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            errors={!!errors.password}
            placeholder="Enter your new password"
            disabled={isUpdating}
          />

          <Checkbox
            label="Show Password"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />

          <Button
            title="Update my info"
            type="button"
            disabled={!isValid || isUpdating || isError}
            isLoading={isUpdating}
          />
        </Form>
      )}
    </Formik>
  );
};

export default UpdateUserForm;
