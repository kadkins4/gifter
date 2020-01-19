<template>
  <div id="app">
    <div>
      <Nav />
    </div>
    <div>
      <Login />
      <!-- <Main /> -->
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
// import Main from './components/Main.vue';
import Login from './components/user/Login';

export default {
  name: 'app',
  components: {
    Nav,
    // Main,
    Login
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
#app, body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 400px;
  padding: 0;
  margin: 0;
}
</style>
