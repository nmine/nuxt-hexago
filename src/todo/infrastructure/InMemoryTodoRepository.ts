import Todo from '@/src/todo/domain/Todo';
import TodoId from '@/src/todo/domain/TodoId';
import { injectable } from 'inversify';
import TodoRepository from '@/src/todo/domain/TodoRepository';

@injectable()
export class InMemoryTodoRepository implements TodoRepository {
  private readonly _todos = new Map<string, Todo>();

  save(todo: Todo): void {
    console.log("create todo repo in memory")
    this._todos.set(todo.id.value, todo);
    console.log(this._todos)
  }

  find(todoId: TodoId): Todo | undefined {
    return this._todos.get(todoId.value);
  }

  getAll(): Todo[] {
    return Array.from(this._todos.values());
  }
}
