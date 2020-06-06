<template>
  <div>
    <form>
      <div class="container">
        <input
          type="email"
          v-model="email"
          placeholder="Enter email"
          name="email"
          required
        />
        <input
          type="password"
          v-model="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <button type="submit" @click.prevent="login()">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import * as firebase from "firebase";
// @ is an alias to /src

export default {
  name: "Login",

  data() {
    return {
      group_chat: true,
      receiver_uid: "",
      message: null,
      private_message: "",
      private_messages: [],
      messages: [],
      authUser: [],
      users: [],
      email: "",
      password: ""
    };
  },
  created() {
    if (localStorage.getItem("login_user_email")) {
      this.$router.push("/");
    }
  },
  methods: {
    login() {
      if (this.email && this.password) {
        firebase
          .database()
          .ref()
          .child("users/")
          .once("value", snapshot => {
            var users = snapshot.val();
            for (var user in users) {
              var user_data = users[user];
              if (
                this.email === user_data.email &&
                this.password === user_data.password
              ) {
                localStorage.setItem("login_user_name", user_data.name);
                localStorage.setItem("login_user_email", user_data.email);
                this.$router.push("UploadVideo");
                location.reload();
                break;
              } else {
                alert("Incorrect email or password");
              }
            }
          });
      } else {
        alert("Enter valid email and password");
      }
    },
    fetchUsers() {
      firebase
        .database()
        .ref()
        .child("users/")
        .once("value", snapshot => {
          var users = snapshot.val();
          console.log(users);
          //    var allRegisteredUsers = [];
          //    for(var x in users){
          //      var user =users[x];
          //      allRegisteredUsers.push(user);
          //    }
          //    this.users = allRegisteredUsers;
        });
    }
  }
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
form {
  border: 3px solid #f1f1f1;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
