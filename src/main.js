import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import app from './FirebaseConfig';

import { getAuth, onAuthStateChanged } from "firebase/auth";


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    
    store.commit('setIsLoggedIn' , true);
    store.commit('setCurrentUser' , user);

  } else {
    router.push('/login');
  }
});



Vue.config.productionTip = false;

console.log('firebase app is ' , app);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
