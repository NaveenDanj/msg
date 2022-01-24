import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import app from './FirebaseConfig';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getFirestore , getDoc } from "firebase/firestore";


const auth = getAuth();
onAuthStateChanged(auth, async (user) => {
  if (user) {

    const db = getFirestore();

    try{

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        store.commit('setCurrentUserData' , docSnap.data());
      }

      store.commit('setIsLoggedIn' , true);
      store.commit('setCurrentUser' , user);

    }catch(err){
      console.log(err);
    }
    
    

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
