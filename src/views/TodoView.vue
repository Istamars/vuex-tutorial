<script setup>
import { ref } from 'vue'

const newTodo = ref('')
let id = 0
const todos = ref([
  { id: id++, text: 'Bikin kopi' },
  { id: id++, text: 'Desain UI' },
  { id: id++, text: 'Finishing fitur A' },
  { id: id++, text: 'Bugfix fitur' }
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value })
  newTodo.value = ''
}

function removeTodo(id) {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}
</script>

<template>
  <div class="form">
    <form @submit.prevent="addTodo">
      <input class="input-text" v-model="newTodo" required placeholder="new todo" />
      <button class="add-btn">Add Todo</button>
    </form>
  </div>

  <div>
    <ul class="container-list">
      <li class="list" v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button class="close-btn" @click="removeTodo(todo.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<style>
.form {
  margin-bottom: 32px;
}

.input-text {
  padding: 8px;
  margin-right: 8px;
  border-radius: 4px;
  border: 1px solid #000;
}

.add-btn {
  padding: 8px;
  background-color: #0075ce;
  color: white;
  border: 0;
  border-radius: 4px;
}

.add-btn:hover {
  cursor: pointer;
}

.container-list {
  padding: 0;
}

.list {
  list-style: none;
  margin-top: 16px;
}

.close-btn {
  padding: 4px;
  color: white;
  background-color: #ce1f08;
  border-radius: 4px;
  border: 0px;
  margin-left: 8px;
}

.close-btn:hover {
  cursor: pointer;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
