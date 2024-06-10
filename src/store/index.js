import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      currentId: 4,
      todos: [
        { id: 0, text: 'Bikin kopi', done: true },
        { id: 1, text: 'Desain UI', done: true },
        { id: 2, text: 'Finishing fitur A', done: false },
        { id: 3, text: 'Bugfix fitur', done: false }
      ],
      deletedTodos: []
    }
  },
  getters: {
    showUnfinishedTask(state) {
      return state.todos.filter((todo) => todo.done === false)
    },
    showFinishedTask(state) {
      return state.todos.filter((todo) => todo.done === true)
    },
    showTotal(state) {
      return state.todos.length
    }
  },
  mutations: {
    ADD_TODO(state, newTodos) {
      state.todos = newTodos
      state.currentId = state.currentId + 1
    },
    DELETE_TODO(state, id) {
      state.deletedTodos.push(...state.todos.filter((todo) => todo.id === id))
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
    UPDATE_STATUS_TODO(state, todos) {
      state.todos = todos
    }
  },
  actions: {
    createTodo(context, todoText) {
      const newTodos = [
        ...context.state.todos,
        { id: context.state.currentId, text: todoText, done: false }
      ]
      context.commit('ADD_TODO', newTodos)
    },
    changeStatus({ commit, state }, task) {
      const index = state.todos.findIndex((todo) => todo.id === task.id)
      state.todos[index] = { ...state.todos[index], done: task.done }
      console.log('state', state, task)
      commit('UPDATE_STATUS_TODO', state.todos)
    }
  }
})

export default store
