import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/index'
import Login from './components/Login.vue'
import Todo from './components/Todo.vue'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Login},
  {path: '/todos', component: Todo}
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
