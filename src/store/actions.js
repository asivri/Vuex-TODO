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

     
    //Since I'm using typicode I need to manipulate user info and check if it's valid.
    //Normally it's not a thing we should be dealing with on a front-end app.

  
    handleLogin: (context, emailAdress) =>
    {
        axios.get(`http://jsonplaceholder.typicode.com/users?email=${emailAdress}`)
        .then(response =>{
          if(response.data.length === 0)
          {
              console.log("Hello")
          } 
          else{
              console.log("TYTY")
              console.log(response.data);
              this.isAuthenticated = true;
              var manipulatedUser = new DataCollection(response.data);

              var authenticated = manipulatedUser.query()
              .filter({email: emailAdress})
              .distinct('id');

              context.commit('FETCH_USER', authenticated);
          } 
        }).catch(function(error){
            console.error(error);
        })
    },
    //--Below this part of the code communicates with an API to reach for TODOs--
    fetchTodos: (context, userid) =>
    {
        console.log("Fetching")
        axios.get(`http://jsonplaceholder.typicode.com/todos?=userId=${userid}`) //http://jsonplaceholder.typicode.com/ Fake REST API used 
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

    LoginFetchTodo: (context, emailAdress) =>
    {
        console.log("---------- Validating email address ----------")
        axios.get(`http://jsonplaceholder.typicode.com/users?email=${emailAdress}`)
        .then(response =>{
          if(response.data.length === 0)
          {
              console.log("---------- Email Adress "+ emailAdress +" is not in the system ----------");
          } 
          else{
              console.log("---------- Validation successfull ----------")
              console.log(response.data);
              var manipulatedUser = new DataCollection(response.data);
              var authenticated = manipulatedUser.query()
              .filter({email: emailAdress})
              .distinct('id');
              console.log(authenticated[0])  
              context.commit('FETCH_USER', authenticated);
              console.log("---------- Authenticated user is in the state ----------");

              console.log("---------- Calling for the TODOs ----------");
            axios.get(`http://jsonplaceholder.typicode.com/todos`) //http://jsonplaceholder.typicode.com/ Fake REST API used 
            .then(response =>{
                var manipulated = new DataCollection(response.data);
                console.log("---------- TODOs recieved ----------");

                var allTodos = manipulated.query()
                .filter({userId : authenticated[0]})
                
                console.log(allTodos);
                var active = manipulated.query() //Render data, filter and return the title of active TODOs
                .filter({userId : authenticated[0]})
                .filter({completed: false})
                .distinct('title'); 
                var inactive = manipulated.query() //Render data, filter and return the title of finished TODOs
                .filter({userId : authenticated[0]})
                .filter({completed: true})
                .distinct('title'); 
                console.log("---------- Filter active and inactive TODOs ----------");
                active.forEach(element =>{
                    context.commit("FETCH_TODO", element)
                })
                inactive.forEach(element =>{
                    context.commit("FETCH_INACTIVE_TODO", element)
                })
                console.log("---------- TODOs are in the state ----------");

        }).catch(error =>{
            console.error(error);
        })
          } 
        }).catch(function(error){
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
    },
    
   

    
    
}