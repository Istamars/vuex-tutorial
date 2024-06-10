<script setup>
import { computed, ref } from 'vue'
import ToDos from '../components/ToDos.vue'
import TaskDone from '../components/TaskDone.vue'
import TaskDeleted from '../components/TaskDeleted.vue'
import { useStore } from 'vuex'

const newTodo = ref('')
const selectedItem = ref('')
const store = useStore()

const total = computed(() => store.getters.showTotal)

function addTodo() {
  store.dispatch('createTodo', newTodo.value)
  newTodo.value = ''
}

function clickItem(itemName) {
  selectedItem.value = itemName
}
</script>

<template>
  <div class="form">
    <form @submit.prevent="addTodo">
      <input class="input-text" v-model="newTodo" required placeholder="new todo" />
      <button class="add-btn">Add Todo</button>
    </form>
  </div>

  <div>Item yang dipilih : {{ selectedItem }}</div>
  <div style="margin-top: 8px; margin-bottom: 24px">Total Task: {{ total }}</div>

  <!-- Implementasi component sederhana -->
  <div class="flex">
    <div class="card-container">
      <ToDos @user-click-item="clickItem" />
      <TaskDone />
      <TaskDeleted />
    </div>
  </div>
  <!-- End implementasi component sederhana -->
</template>
