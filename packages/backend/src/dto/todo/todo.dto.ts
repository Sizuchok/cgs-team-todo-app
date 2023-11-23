import { CoreEntityDto } from '../core-entity.dto';

export type TodoDto = CoreEntityDto & {
  title: string;
  description: string;
  isPublic: boolean;
  isChecked: boolean;
  userId: string;
};
