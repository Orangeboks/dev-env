import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Importing the main css file
import "@/assets/css/main.css";
import * as firebase from 'firebase';

// Scripts
var firebaseConfig = {
  apiKey: "AIzaSyCqG-IkElfTO_rxxSlhJMA9CMlHyJqwz0g",
  authDomain: "youstudent-c75cb.firebaseapp.com",
  databaseURL: "https://youstudent-c75cb.firebaseio.com",
  projectId: "youstudent-c75cb",
  storageBucket: "youstudent-c75cb.appspot.com",
  messagingSenderId: "1032797868561",
  appId: "1:1032797868561:web:ebf91222b8e973412297b0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
