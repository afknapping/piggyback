// src/store.js

// https://blog.pusher.com/getting-started-vuex-state-management-vuejs/

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    todos: []
  },
  actions: {
    ADD_TODO: function({ commit }, new_todo) {
      var set_new = {
        todo: new_todo,
        status: false
      };
      commit("ADD_TODO_MUTATION", set_new);
    },
    COMPLETE_TODO: function({ commit }, todo) {
      commit("COMPLETE_TODO_MUTATION", todo);
    }
  },
  mutations: {
    ADD_TODO_MUTATION: function(state, new_todo) {
      state.todos.push(new_todo);
    },
    COMPLETE_TODO_MUTATION: function(state, todo) {
      state.todos.find(x => x.todo === todo).status = true;
    }
  },
  getters: {
    not_done: state => {
      var filtered = state.todos.filter(function(el) {
        return el.status === false;
      });
      return filtered;
    },
    done: state => {
      var filtered = state.todos.filter(function(el) {
        return el.status === true;
      });
      return filtered;
    }
  }
});

export default store;