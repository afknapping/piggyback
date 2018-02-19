<template>
  <div class="done">
     <div class="todolist">
       <h1>Deleted</h1>
          <ul id="deleted-items" class="list-unstyled" v-if="deleted_todos">
            <li v-for="todo in deleted_todos">{{todo.todo}}
              <input type="button" @click="restore_todo(todo.todo)"  value="restore"/></input>
            </li>

          </ul>
      </div>
  </div>
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