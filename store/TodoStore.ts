import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { container } from '@/src/shared/infrastructure/container/Container';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import { CreateHandler } from '@/src/todo/application/create/CreateHandler';
import CreateCommand from '@/src/todo/application/create/CreateCommand';
import { ListResponseCollection } from '@/src/todo/application/list/ListResponseCollection';
import {ListHandler} from "~/src/todo/application/list/ListHandler";

@Module({
  name: 'TodoStore',
  stateFactory: true,
  namespaced: true,
})
export default class TodoStore extends VuexModule {

  _todos: ListResponseCollection = new ListResponseCollection([]);

  @Mutation
  refreshTodos() {
    this._todos = container.get<ListHandler>(SYMBOLS.TODO_LIST).ask();
  }

  @Action
  addTodo(todo: string) {
    const createCommand = new CreateCommand(todo);
    container.get<CreateHandler>(SYMBOLS.TODO_CREATE).dispatch(createCommand);
    this.refreshTodos();
    console.log(todo)
  }

  @Action
  completeTodo(todoId: string) {

  }

  get todos(): ListResponseCollection {
    return this._todos;
  }


}
