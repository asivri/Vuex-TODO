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
        axios.get("http://jsonplaceholder.typicode.com/todos") //http://jsonplaceholder.typicode.com/ Fake REST API used 
        .then(response =>{
            var manipulated = new DataCollection(response.data);

            var active = manipulated.query() //Render data, filter and return the title of active TODOs
            .filter({completed: false})
            .distinct('title'); 
            var inactive = manipulated.query() //Render data, filter and return the title of finished TODOs
            .filter({completed: true})
            .distinct('title'); 

            active.forEach(element =>{
                context.commit("FETCH_TODO", element)
            })
            inactive.forEach(element =>{
                context.commit("FETCH_INACTIVE_TODO", element)
            })
        }).catch(error =>{
            console.error(error);
        })
    },
    postTodo: (context, todoP) =>
    {
        axios.post("http://jsonplaceholder.typicode.com/todos", {
            title: todoP,
            completed: false
        }).then(function(response){
            console.log(response.data);
        }).catch(function(error){
            console.error(error);
        })
        
    }
    
}