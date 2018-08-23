import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const getters = {
    allTodos: state=>state.todos
}