<template>
  <div id="app">
    <form @submit.prevent="postNewTodo">
      <input type="text" placeholder="New TODO" v-model="newTodo">
    </form>
    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="index">
        {{ todo }}
        <button @click="removeTodo(index)"> Done </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'app',
  data () {
    return {
     newTodo: ''
    }
  },
  computed: {
      ...mapGetters({
        todos: 'allTodos'
      })
  },
  methods: {
   ...mapActions([
     'addTodo',
     'removeTodo',
     'fetchTodos',
     'postTodo'
   ]),
   addNewTodo: function()
   {
      this.addTodo(this.newTodo);
      this.newTodo = '';
   },
   postNewTodo: function()
   {
     this.postTodo(this.newTodo);
     this.newTodo= '';
   },
   removeExistedTodo: function(todo)
   {
      this.removeTodo(todo);
   },
   callTodos: function() //Implemented to call fetchTodos at mounted(in the creation).
   {
     this.fetchTodos();
   }
  },
  mounted(){
    this.callTodos();
  }
}
</script>

<style>

</style>
