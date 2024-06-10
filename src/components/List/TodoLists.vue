<script setup>
import { useStore } from 'vuex'

const props = defineProps({
  title: String,
  tasks: Array
})
const store = useStore()

function removeTodo(id) {
  store.commit('DELETE_TODO', id)
}
</script>

<template>
  <div class="card">
    <h3 class="mb-2">{{ props.title }}</h3>

    <div v-if="props.tasks && props.tasks.length">
      <ul class="container-list">
        <li class="list" v-for="todo in props.tasks" :key="todo.id">
          <span @click="$emit('userClickItem', todo.text)">{{ todo.text }}</span>
          <div v-if="props.title === 'To Do List'">
            <button class="close-btn" @click="removeTodo(todo.id)">X</button>
          </div>
        </li>
      </ul>
    </div>
    <div v-else class="text-grey mb-2">No task available</div>
  </div>
</template>
