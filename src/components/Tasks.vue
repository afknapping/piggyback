<template lang="pug">
  sui-container#radar(textAlign="left")
    h1 tasks
    p list of tasks
    ul
      li(v-for="task in all_tasks")
        | {{ task.action }}
</template>

<script>
export default {
  // 
  data () {
    return {
    }
  },
  methods: {
    // get all tasks
    // get tasks not done and not deleted
    // get tasks done and not deleted
    // get tasks deleted
  },
  computed: {
    all_tasks: function(){
      return this.$store.getters.all_tasks;
    }
  }
}
</script>