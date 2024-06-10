<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const todos = computed(() => store.getters.showUnfinishedTask)

function removeTodo(id) {
  store.commit('DELETE_TODO', id)
}

function taskDone(id) {
  store.dispatch('changeStatus', { id, done: true })
}
</script>

<template>
  <div class="card">
    <h3 class="mb-2">To Do List</h3>

    <div v-if="todos && todos.length">
      <ul class="container-list">
        <li class="list" v-for="todo in todos" :key="todo.id">
          <span @click="$emit('userClickItem', todo.text)">{{ todo.text }}</span>
          <div>
            <button class="add-btn" @click="taskDone(todo.id)">Done</button>
            <button class="close-btn" @click="removeTodo(todo.id)">X</button>
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="text-grey mb-2">No task available</div>
  </div>
</template>
