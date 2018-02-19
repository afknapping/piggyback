<template lang="pug">
  .done
    .todolist
      h1 Deleted
      ul#deleted-items.list-unstyled(v-if="deleted_todos")
        li(v-for="todo in deleted_todos")
          | {{todo.todo}} 
          input(type="button" @click="restore_todo(todo.todo)" value="restore")

</template>
<script>
export default {
  methods: {
    restore_todo: function(todo){
      this.$store.dispatch('RESTORE_TODO', todo);
    }
  },
  computed: {
    deleted_todos: function() {
      return this.$store.getters.deleted;
    }
  }
}
</script>