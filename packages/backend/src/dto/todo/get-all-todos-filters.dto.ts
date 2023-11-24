import { BaseQueryParams } from '../../types/base-query-params.type';

export type GetAllTodosFiltersDto = BaseQueryParams & {
  isChecked?: boolean;
  isPublic?: boolean;
  isPrivate?: boolean;
};
