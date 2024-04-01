<template>
  <ul class="list-disc">

  </ul>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import Vue from 'vue';

@Component({})
export default class List extends Vue {

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
