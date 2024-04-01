import Query from '@/src/shared/domain/use-case/query/Query';
import QueryHandler from '@/src/shared/domain/use-case/query/QueryHandler';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import ListResponse from '@/src/todo/application/list/ListResponse';
import { ListResponseCollection } from '@/src/todo/application/list/ListResponseCollection';
import Todo from '@/src/todo/domain/Todo';
import TodoRepository from '@/src/todo/domain/TodoRepository';
import { inject, injectable } from 'inversify';

@injectable()
export class ListHandler  {
  constructor(
    @inject(SYMBOLS.TODO_REPOSITORY)
    private readonly todoRepository: TodoRepository
  ) {}

  ask(query?: Query): ListResponseCollection {
    const todos = this.todoRepository.getAll();

    return new ListResponseCollection(
      todos.map(ListHandler.mappingTodosToArray())
    );
  }

  private static mappingTodosToArray() {
    return (todo: Todo) => {
      return new ListResponse(
        todo.id.value,
        todo.body.value,
        todo.isDone,
        todo.createdAt.value
      );
    };
  }
}
