<template>
  <div class="done">
     <div class="todolist">
       <h1>Already Done</h1>
          <ul id="done-items" class="list-unstyled" v-if="done_todos">
            <li v-for="todo in done_todos">{{todo.todo}}</li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  computed: {
    done_todos: function() {
      return this.$store.getters.done;
    }
  }
}
</script>