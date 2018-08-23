import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const mutations = {
    ADD_TODO: (state, todo) =>
    {
        state.todos.push(todo);
    },

    REMOVE_TODO: (state, todo) =>
    {
        state.todos.splice(todo, 1)
    },
    FETCH_TODO: (state, tObj) =>
    {
        state.todos.push(tObj);
    }
}