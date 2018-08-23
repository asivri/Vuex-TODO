import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const state = {
    todos: [
        'Clean the kitchen',
        'Take the dog out',
        'Do the homeworks'
    ],
    newTodo: ''
}