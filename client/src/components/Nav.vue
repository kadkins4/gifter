<template>
  <div class="nav">
    <div class="left-nav">
      <button class="nav-item"
              :class="{'active': activePage === 'home' }"
              v-on:click="switchView('home')"
      >Home</button>
      <button class="nav-item"
              :class="{'active': activePage === 'lists' }"
              v-on:click="switchView('lists')"
      >Lists</button>
    </div>
    <div class="middle-nav">
      <div class="logo"></div>
    </div>
    <div class="right-nav">
      <button class="nav-item"
              v-if="!isActiveUser"
              v-on:click="login()"
      >Login</button>
      <button class="nav-item"
              v-if="!isActiveUser"
              v-on:click="signup()"
      >Signup</button>
      <button class="nav-item"
              v-if="isActiveUser"
              v-on:click="logout()"
      >Logout</button>
      <button class="nav-item"
              v-if="isActiveUser"
              :class="{'active': activePage === 'account' }"
              v-on:click="switchView('account')"
      >Account</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      activePage: 'home',
      // TODO rename this property
      isActiveUser: false,
      availablePages: [
        'home', 'lists', 'account'
      ]
    }
  },
  methods: {
    switchView(view) {
      if (!this.availablePages.find(page => page === view)) return
      this.activePage = view;
    },
    login() {
      this.isActiveUser = true;
      this.switchView('login');
    },
    signup() {
      this.isActiveUser = true;
      this.switchView('signup')
    },
    logout() {
      this.isActiveUser = false;
      this.switchView('home');
    }
  }

  // TODO will need to probably use vue-router
}
</script>

<style scoped>
/* TODO finalize colors and make them all variables to reuse  */
.nav {
  background-color: lightseagreen;
  padding: 15px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 8px 6px -6px blue;
}

.left-nav, .right-nav, .middle-nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-nav, .right-nav {
  flex-direction: row;
  width: 37vw;
}

.middle-nav {
  flex-direction: row;
  justify-content: center;
  width: 26vw;
}

.logo {
  border: 2px solid black;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  box-shadow: 0 0 5px 2px red;
}

/* TODO fix navigation items */

.nav-item {
  height: 35px;
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 200;
  background-color: lightskyblue;
  border: 1px solid black;
  margin: 0px 5px;
  padding: 0px 5px;
  box-shadow: 0 0 3px #000000;
}

.active {
  border: 1px solid grey;
  font-weight: 700;
  box-shadow: inset 0 0 10px #000000;
}

</style>
