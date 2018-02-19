// src/store.js

// https://blog.pusher.com/getting-started-vuex-state-management-vuejs/

import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import createPersistedState from 'vuex-persistedstate'
const store = new Vuex.Store({
  state: {
    todos: [
    ],
    tasks: [
      { 
        action: "do me",
        is_done: false,
        is_deleted: false,
      },
      { 
        action: "do me too",
        is_done: false,
        is_deleted: false,
      }

    ]
  },
  actions: {
    ADD_TASK: function ({ commit }, new_task) {
      var set_new = {
        action: new_task,
        is_done: false,
        is_deleted: false,
        estimated_units: 0,
        tracked_units: 0,
        ticket_url: null,
        calender_entry_key: null,
        tags: []
      }
      commit("ADD_TASK_MUTATION", set_new)
    },
    MARK_TASK_AS_DONE: function ({ commit }, task) {
      commit("MARK_TASK_AS_DONE_MUTATION", todo)
    },

    ADD_TODO: function({ commit }, new_todo) {
      var set_new = {
        todo: new_todo,
        status: false,
        deleted: false
      };
      commit("ADD_TODO_MUTATION", set_new);
    },
    COMPLETE_TODO: function({ commit }, todo) {
      commit("COMPLETE_TODO_MUTATION", todo);
    },
    DELETE_TODO: function({ commit }, todo) {
      commit("DELETE_TODO_MUTATION", todo)
    },
    RESTORE_TODO: function({ commit }, todo) {
      commit("RESTORE_TODO_MUTATION", todo)
    }
  },
  mutations: {
    ADD_TODO_MUTATION: function(state, new_todo) {
      state.todos.push(new_todo);
    },
    COMPLETE_TODO_MUTATION: function(state, todo) {
      state.todos.find(x => x.todo === todo).status = true;
    },
    DELETE_TODO_MUTATION: function(state, todo) {
      state.todos.find(x => x.todo === todo).deleted = true;
    },
    RESTORE_TODO_MUTATION: function(state, todo) {
      state.todos.find(x => x.todo === todo).deleted = false;
    }
  },
  getters: {
    all_tasks: state => {
      var filtered = state.tasks.filter( function (el) {
        return el.is_deleted === false;
      });
      return filtered;
    },

    not_done: state => {
      var filtered = state.todos.filter(function(el) {
        return el.status === false && el.deleted === false;
      });
      return filtered;
    },
    done: state => {
      var filtered = state.todos.filter(function(el) {
        return el.status === true && el.deleted === false;
      });
      return filtered;
    },
    deleted: state => {
      var filtered = state.todos.filter(function(el) {
        return el.deleted === true;
      });
      return filtered;
    }
  },
  plugins: [createPersistedState()]
});

export default store;