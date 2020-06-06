<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      loginUser: localStorage.getItem("login_user_name")
    };
  },
  created() {
    if (!localStorage.getItem("login_user_email")) {
      this.$router.push("Login");
    }
  }
};
</script>
<style></style>
