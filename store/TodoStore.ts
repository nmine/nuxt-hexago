import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { container } from '@/src/shared/infrastructure/container/Container';
import { SYMBOLS } from '@/src/shared/infrastructure/container/Types';
import { CreateHandler } from '@/src/todo/application/create/CreateHandler';
import CreateCommand from '@/src/todo/application/create/CreateCommand';

@Module({
  name: 'TodoStore',
  stateFactory: true,
  namespaced: true,
})
export default class TodoStore extends VuexModule {

  @Mutation
  updateTodos() {
  }

  @Action
  addTodo(todo: string) {
    const createCommand = new CreateCommand(todo);
    container.get<CreateHandler>(SYMBOLS.TODO_CREATE).dispatch(createCommand);
    this.updateTodos();
    console.log(todo)
  }

  @Action
  completeTodo(todoId: string) {

  }


}
