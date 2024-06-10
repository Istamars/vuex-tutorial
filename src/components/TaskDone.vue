<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const todos = computed(() => store.getters.showFinishedTask)
</script>

<template>
  <div class="card">
    <h3 class="mb-2">Task Complete</h3>

    <div v-if="todos && todos.length">
      <ul class="container-list">
        <li style="text-decoration: line-through" class="list" v-for="todo in todos" :key="todo.id">
          {{ todo.text }}
        </li>
      </ul>
    </div>
    <div v-else class="text-grey mb-2">No task available</div>
  </div>
</template>
