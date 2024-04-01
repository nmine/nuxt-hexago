import 'reflect-metadata';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import { CreateHandler } from '@/src/todo/application/create/CreateHandler';
import TodoRepository from '@/src/todo/domain/TodoRepository';
import { InMemoryTodoRepository } from '@/src/todo/infrastructure/InMemoryTodoRepository';
import { Container } from 'inversify';
import getDecorators from 'inversify-inject-decorators';
import {ListHandler} from "~/src/todo/application/list/ListHandler";

export const container = new Container();

container
  .bind<TodoRepository>(SYMBOLS.TODO_REPOSITORY)
  .to(InMemoryTodoRepository)
  .inSingletonScope();

container
  .bind<CreateHandler>(SYMBOLS.TODO_CREATE)
  .to(CreateHandler)
  .inSingletonScope();

container
  .bind<ListHandler>(SYMBOLS.TODO_LIST)
  .to(ListHandler)
  .inSingletonScope();

export const { lazyInject } = getDecorators(container);
