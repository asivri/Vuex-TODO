import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import DataCollection from 'data-collection'

Vue.use(Vuex)

export const actions = {

    //--This part is on local state.--
    //TODO: Implement localStorage to prevent lose of todo in every refresh 
    addTodo: (context, todo) =>
    {
        context.commit("ADD_TODO", todo);
    },

    removeTodo: (context, todo) =>
    {
        context.commit("REMOVE_TODO", todo);
    },

    //--Below this part of the code communicates with an API to reach for TODOs--
    fetchTodos: (context) =>
    {
        axios.get("http://jsonplaceholder.typicode.com/todos")
        .then(response =>{
            console.log(response.data);
            var manipulated = new DataCollection(response.data);
            var names = manipulated.query().distinct('title'); // todos is a unique element in the json response. 
            names.forEach(element =>{
                context.commit("FETCH_TODO", element)
            })
        }).catch(error =>{
            console.error(error);
        })
    },
    postTodo: (context, todoP) =>
    {
        axios.post("http://localhost:64516/api/Todos", {
            todos: todoP,
            completed: false
        })
    }
    
}