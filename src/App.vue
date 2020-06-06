<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">All Videos</router-link> |
      <router-link to="/video">Video</router-link>
      <span v-if="!is_login"
        >| <router-link to="/login">Login</router-link></span
      >
      <span v-else
        >| <router-link to="/uploadvideo">Upload Video</router-link></span
      >
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",

  data() {
    return {
      is_login: false
    };
  },
  created() {
    this.checkLoginUser();
  },
  methods: {
    checkLoginUser() {
      if (localStorage.getItem("login_user_email")) {
        this.is_login = true;
      }
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
