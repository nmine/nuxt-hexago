import CommandHandler from '@/src/shared/domain/use-case/command/CommandHandler';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import CreateCommand from '@/src/todo/application/create/CreateCommand';
import Todo from '@/src/todo/domain/Todo';
import TodoBody from '@/src/todo/domain/TodoBody';
import TodoId from '@/src/todo/domain/TodoId';
import TodoRepository from '@/src/todo/domain/TodoRepository';
import { inject, injectable } from 'inversify';

@injectable()
export class CreateHandler implements CommandHandler {
  constructor(
    @inject(SYMBOLS.TODO_REPOSITORY)
    private readonly todoRepository: TodoRepository
  ) {}

  dispatch(command: CreateCommand): void {
    console.log("todo handler")
    const todoId = new TodoId("1");
    const todoBody = new TodoBody(command.todoBody);
    const todo = Todo.create(todoId, todoBody);
    console.log("create todo handler")
    this.todoRepository.save(todo);
  }
}
