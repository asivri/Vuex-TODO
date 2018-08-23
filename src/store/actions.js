import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const actions = {

    addTodo: (context, todo) =>
    {
        context.commit("ADD_TODO", todo);
    },

    removeTodo: (context, todo) =>
    {
        context.commit("REMOVE_TODO", todo);
    }
    
}