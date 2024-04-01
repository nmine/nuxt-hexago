<template>
    <ul class="list-disc">
      <li
        v-for="todo in todos"
        :key="todo.id"
        :class="{ completed: todo.isDone, pointer: !todo.isDone }"
      >
        <a @click="completeTodo(todo.id)">
          <b>{{ todo.body }}</b>
          <small>{{ todo.createdAt  }}</small>
        </a>
      </li>
    </ul>
</template>

<script lang="ts">
import {Component} from 'nuxt-property-decorator';
import Vue from 'vue';
import ListResponse from "~/src/todo/application/list/ListResponse";
import {todoStore} from "~/utils/store-accessor";

@Component({})
export default class List extends Vue {
  get todos(): ListResponse[] {
    return todoStore.todos.data;
  }

  completeTodo(todoId: string) {
    todoStore.completeTodo(todoId);
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}

.pointer {
  cursor: pointer;
}
</style>
