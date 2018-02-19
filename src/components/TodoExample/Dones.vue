<template lang="pug">
  .done
    .todolist
      h1 Already Done
      ul#done-items.list-unstyled(v-if="done_todos")
        li(v-for="todo in done_todos")
          | {{todo.todo}} 
          input(type="button" @click="delete_todo(todo.todo)" value="delete" :checked="todo.status")
    hr
</template>
<script>
export default {
  methods: {
    delete_todo: function(todo){
      this.$store.dispatch('DELETE_TODO', todo);
    }
  },
  computed: {
    done_todos: function() {
      return this.$store.getters.done;
    }
  }
}
</script>