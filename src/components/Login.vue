<template>
     <div class="loginForm">
      <form class="ui form" @submit.prevent="checkUser">
        <div class="field">
          <label>Email</label>
          <input name="first-name" placeholder="Email" type="email" v-model="email">
        </div>
        
        <button class="ui button" type="submit">Login</button>
      </form>
    </div>
</template>

<script>

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';


export default{
    name: 'Login',
    data(){
        return{
            email: ''
        }
    },
    computed: {
        
    },
    methods: {
        ...mapActions([
            'LoginFetchTodo',
        ]),
        checkUser: function()
        {
            console.log(this.email);
            this.LoginFetchTodo(this.email);
            this.$router.push('/todos');
        }

    }
}
</script>

<style scoped>
 .loginForm{
    padding-top: 30px;
    padding-right: 40%;
    padding-left: 40%
  }
</style>
