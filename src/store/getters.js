import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const getters = {
    allTodos: state=>state.todos,
    finishedWork: state=>state.inactiveTodos
    // allUnfinishedTodos: state=>{ //Don't return completed works 
    //     return state.todos.map(({ completed }) =>{
    //         const notFinished = state.todos.find(v=> v.completed === false)
    //         return notFinished;
    //     })
    // }
}