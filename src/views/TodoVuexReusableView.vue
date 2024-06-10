<script setup>
import { computed, ref } from 'vue'
import TodoLists from '../components/List/TodoLists.vue'
import { useStore } from 'vuex'

const newTodo = ref('')
const store = useStore()

const unfinishedTask = computed(() => store.getters.showUnfinishedTask)
const finishedTask = computed(() => store.getters.showFinishedTask)

function addTodo() {
  store.dispatch('createTodo', newTodo.value)
  newTodo.value = ''
}
</script>

<template>
  <div class="form">
    <form @submit.prevent="addTodo">
      <input class="input-text" v-model="newTodo" required placeholder="new todo" />
      <button class="add-btn">Add Todo</button>
    </form>
  </div>

  <!-- Implementasi reusable component -->
  <div class="flex">
    <div class="card-container">
      <TodoLists title="To Do List" :tasks="unfinishedTask" />
      <TodoLists title="Task Completed" :tasks="finishedTask" />
    </div>
  </div>
  <!-- End implementasi reusable component -->
</template>
