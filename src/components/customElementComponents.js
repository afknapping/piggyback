import Vue from 'vue'
// element components can be globally registered here
import Todos from '@/components/TodoExample/Todos'
Vue.component('Todos', Todos)
import Dones from '@/components/TodoExample/Dones'
Vue.component('Dones', Dones)
import Deleted from '@/components/TodoExample/Deleted'
Vue.component('Deleted', Deleted)
