<template>
    <div>
        <div class="todosContainer">
      <form @submit.prevent="addNewTodo">
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


export default{
    name: 'Todo',
    data () {
    return {
     newTodo: ''
    }
  },
  computed: {
      ...mapGetters({
        todos: 'allTodos',
        inactives: 'finishedWork',
        userId: 'userID'
      }),
      // callTodos: function() //Implemented to call fetchTodos at mounted(in the creation).
      // {
      //   if(this.userId === undefined)
      //   {
      //     console.log("Running");
      //     this.$forceUpdate();
      //   }
      //   else
      //   {
      //     console.log("Broken")
      //     this.fetchTodos(this.userId);
      //   }
      // },
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
      this.addTodo(this.newTodo); //addTodo is posting the TODO to state(local)
      this.newTodo = '';
   },
   postNewTodo: function()
   {
     this.postTodo(this.newTodo);  //addTodo is posting the TODO to state(API)
     this.newTodo= '';
   },
   removeExistedTodo: function(todo)
   {
      this.removeTodo(todo);
   },
   
  }
  
}

</script>

<style scoped>

</style>
