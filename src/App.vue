<template>
  <div id="app">
    <div class="todosContainer">
      <form @submit.prevent="postNewTodo">
        <input type="text" placeholder="New TODO" v-model="newTodo">
      </form>
      <div class="two column stackable ui grid">
        <div class="column">
          <h1> Active Works </h1>
          <ul>
            <li v-for="(todo, index) in todos" v-bind:key="index">
              {{ todo }}
              <button @click="removeTodo(index)"> Done </button>
            </li>
          </ul>
        </div>
        <div class="column">
          <h1>Done</h1>
          <ul>
            <li v-for="(inactive, index) in inactives" v-bind:key="index">
              {{ inactive }}
            </li>
          </ul>
        </div>
    </div>
    </div>
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
        todos: 'allTodos',
        inactives: 'finishedWork'
      })
  },
  methods: {
   ...mapActions([
     'addTodo',
     'removeTodo',
     'fetchTodos',
     'postTodo',
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
