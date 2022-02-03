import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import app from './FirebaseConfig';
import VueChatScroll from 'vue-chat-scroll';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getFirestore , getDoc , updateDoc } from "firebase/firestore";


const auth = getAuth();
onAuthStateChanged(auth, async (user) => {
  if (user) {

    const db = getFirestore();

    try{

      const userRef = doc(db, "users", user.uid);

      await updateDoc(userRef, {
        active: true
      });


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

Vue.use(VueChatScroll);

console.log('firebase app is ' , app);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
