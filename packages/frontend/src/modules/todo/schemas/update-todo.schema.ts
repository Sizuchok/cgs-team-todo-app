import * as Yup from 'yup';

export const UpdateTodoSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Title must be at least 3 characters long')
    .max(50, 'Title must be at most 16 characters long')
    .required("Don't forget to name your task"),
  description: Yup.string().optional(),
  isPublic: Yup.boolean().required(),
  isChecked: Yup.boolean().required()
});
