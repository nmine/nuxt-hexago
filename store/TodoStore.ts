import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

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
    console.log(todo)
  }

  @Action
  completeTodo(todoId: string) {

  }


}
