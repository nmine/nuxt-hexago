import ListResponse from '@/src/todo/application/list/ListResponse';

export class ListResponseCollection  {
  constructor(readonly data: ListResponse[]) {}
}
