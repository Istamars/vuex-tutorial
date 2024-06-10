<script>
export default {
  computed: {
    todos() {
      return this.$store.state.deletedTodos
    }
  }
}
</script>

<template>
  <div class="card">
    <h3 class="mb-2">Deleted Task</h3>

    <div v-if="todos && todos.length">
      <ul class="container-list">
        <li class="list" v-for="todo in todos" :key="todo.id">
          {{ todo.text }}
        </li>
      </ul>
    </div>
    <div v-else class="text-grey mb-2">No task available</div>
  </div>
</template>
