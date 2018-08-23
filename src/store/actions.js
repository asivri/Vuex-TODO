import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
        axios.get("URL")
        .then(response =>{
            console.log(response.data);
            context.commit("FETCH_TODO", response.data)
        }).catch(error =>{
            console.error(error);
        })
        
    }
    
}