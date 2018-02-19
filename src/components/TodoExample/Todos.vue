    <template>

      <div class="todolist not-done">
        <h1>Todos</h1>
        <input type="text" v-model="holder" class="form-control add-todo" placeholder="Add todo">
        <button id="checkAll" class="btn btn-success" :disabled="holder==''" @click="add_todo">Add Todo</button>

        <hr>
        <ul id="sortable" class="list-unstyled" v-if="not_done_todos">
          <li class="ui-state-default" v-for="todo in not_done_todos">
            <div class="checkbox">
              <label>
                  <input type="checkbox" @click="done_todo(todo.todo)"  :value="todo.todo" :checked="todo.status" />{{todo.todo}}</label>
                  <input type="button" @click="delete_todo(todo.todo)"  value="delete" :checked="todo.status" /></input>
            </div>
          </li>
        </ul>
        <div class="todo-footer" v-if="not_done_todos">
          <strong><span class="count-todos">{{not_done_todos.length}}</span></strong> Item(s) Left
        </div>
      </div>
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