<template>
  <v-app>
    <div class="container flex items-center justify-center m-auto mt-12">
      <div>
        <header>
          <Logo/>
          <h1 class="text-2xl text-gray-900 font-extrabold mt-2">
            nuxt-hexagonal-architecture-playground
          </h1>
        </header>
        <main
          class="mt-10 bg-green-100 p-10 border-2 border-solid border-indigo-200"
        >
          <List></List>
          <Create class="mt-5"></Create>
        </main>
        <footer></footer>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import {Component} from 'nuxt-property-decorator';
import Vue from 'vue';
import Create from '@/pages/todo/Create.vue';
import List from '@/pages/todo/List.vue';

@Component({
  components: {List, Create},
})
export default class Index extends Vue {
}
</script>
