<template>
  <div class="loginContainer">
    <!-- email -->
    <div v-if="newUser">
        <label for="">Email</label>
        <input type="text" name="" id="" v-model="email">
    </div>
    <!-- username -->
    <div>
        <label for="">Username{{ !newUser ? ' / Email' : ''}}</label>
        <input type="text" name="" id="" v-model="username">
    </div>
    <!-- password -->
    <div>
      <label for="">Password</label>
      <input type="password" name="" id="" v-model="password">
    </div>
    <!-- email -->
    <div v-if="newUser">
        <label for="" class="required">Confirm Password</label>
        <input type="text" name="" id="" v-model="confirmPassword" v-on:keyup="doPasswordsMatch" required>
    </div>
    <div v-if="errorMessage">
      <div class="alert alert-warning">
        {{ errorMessage }}
      </div>
    </div>
    <div>
      <button type="button"
              v-on:click="login()"
      >{{ newUser ? 'Sign Up' : 'Login' }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
  },
  data() {
    return {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      passwordMatches: false,
      newUser: false,
      errorMessage: ''
    }
  },
  methods: {
    login() {
      // const user = { user: this.username, password: this.password };
      // TODO api call to login

      // TODO this is only for development purposes until I have the backend
      // up and running
      const successPercentage = 95;
      const success = Math.floor(Math.random() * 100);
      if (success < successPercentage) {
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Invalid Login Credentials';
        this.username = '';
        this.password = '';
      }
    },
    doPasswordsMatch() {
      if (this.password === this.confirmPassword) {
        this.passwordMatches = true;
      } else {
        this.passwordMatches = false;
        this.errorMessage = 'Passwords do not match.';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginContainer {
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

input {
  border: 1px solid black;
}
</style>
