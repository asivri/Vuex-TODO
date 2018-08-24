<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import Todo from './components/Todo.vue'
import Login from './components/Login.vue'

export default {
  name: 'app',
 
  components: {
    Todo,
    Login
  },
 
}
</script>

<style>

</style>
