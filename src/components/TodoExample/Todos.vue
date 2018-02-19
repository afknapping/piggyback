<template lang="pug">
.todolist.not-done
  h1 Todos



  sui-input.form-control.add-todo(type="text" v-model="holder" placeholder="Add todo") 
  button#checkAll(:disabled="holder==''" @click="add_todo") Add Todo
  sui-button(size="large" @click="add_todo") ☹️ sui buttons break the event ☹

  ul#sortable.list-unstyled(v-if="not_done_todos")
    li.ui-state-default(v-for="todo in not_done_todos")
      .checkbox
        label
          input(type="checkbox" @click="done_todo(todo.todo)" :value="todo.todo" :checked="todo.status")
          | {{todo.todo}}
        input(type="button" @click="delete_todo(todo.todo)" value="delete" :checked="todo.status")
  .todo-footer(v-if="not_done_todos")
    strong
      span.count-todos {{not_done_todos.length}}
    |  Item(s) Left
  hr


</template>

    <script>
    export default {
      name: 'Todos',
      data () {
        return {
          holder: ''
        }
      },
      methods: {
        add_todo: function(){
          this.$store.dispatch('ADD_TODO', this.holder);
          this.holder = '';
        },
        done_todo: function(todo){
          this.$store.dispatch('COMPLETE_TODO', todo);
        },
        delete_todo: function(todo){
          this.$store.dispatch('DELETE_TODO', todo);
        }
      },
      computed: {
        not_done_todos: function(){
          return this.$store.getters.not_done;
        }
      }
    }
  </script>