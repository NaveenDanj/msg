<template>
  <v-container style="height: 100vh; overflow-y: scroll">
    <div class="d-flex justify-space-between">
      <h2>Chat</h2>
      <AddContact />
    </div>

    <div class="mt-5">
      <v-text-field solo dense placeholder="Search here..." />
    </div>

    <div class="mt-5">
      <h5>FAVOURITES</h5>

      <v-list nav dense class="mt-1">
        <v-list-item
          v-for="(item, index) in favourite_contacts"
          :key="index"
          link
          class="ma-0"
          @click="setActiveContact(item)"
        >
          <v-list-item-icon>
            <img
              :src="item.photoURL"
              style="width: 30px; height: 30px; border-radius: 15px"
            />
          </v-list-item-icon>

          <v-list-item-title class="my-auto ml-0"
            >{{ item.displayName }}</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </div>

    <div class="mt-5">
      <h5>DIRECT MESSAGES</h5>

      <v-list nav dense class="mt-1">
        <v-list-item
          v-for="(item, index) in direct_contacts"
          :key="index"
          link
          class="ma-0"
          @click="setActiveContact(item)"
        >
          <v-list-item-icon>
            <img
              :src=" item.photoURL "
              style="width: 30px; height: 30px; border-radius: 15px"
            />
          </v-list-item-icon>

          <v-list-item-title class="my-auto ml-0"
            >{{ item.displayName }}</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </div>

    <!-- <div class="mt-5">
      <div class="d-flex justify-space-between">
        <h5>CHANNELS</h5>
        <v-btn
          width="25"
          height="25"
          class="my-auto"
          fab
          dark
          small
          color="green"
        >
          <v-icon small dark> mdi-plus </v-icon>
        </v-btn>
      </div>

      <v-list nav dense class="mt-5">
        <v-list-item
          v-for="(item, index) in [1, 2, 3, 4, 4]"
          :key="index"
          link
          class="ma-0"
        >
          <v-list-item-icon>
            <v-icon style="width: 20px; height: 20px; border-radius: 10px"
              >mdi-pound</v-icon
            >
          </v-list-item-icon>

          <v-list-item-title class="my-auto mx-auto ml-0"
            >Naveen Hettiwaththa</v-list-item-title
          >
        </v-list-item>
      </v-list>
      
    </div> -->
  </v-container>
</template>

<script>

import AddContact from '../components/Models/AddContact.vue';
import { collection , doc , getFirestore , getDocs , getDoc } from "firebase/firestore";


export default {
  
  data(){

    return{

      direct_contacts : [],
      favourite_contacts : [],

    }

  },

  async created(){


    this.$root.$on('forceRefresh', this.handleRunner);

    this.fetchContacts();

  },

  components : {
    AddContact
  },

  methods : {

    setActiveContact(user){
      this.$store.commit('resetActiveContact');
      this.$store.commit('resetActiveMessages');
      this.$store.commit('setActiveContact' , user);
    },

    handleRunner(){
      this.$forceUpdate();
      console.log('running on different component');
      this.fetchContacts();
    },

    async fetchContacts(){

      this.direct_contacts = [];
      this.favourite_contacts = [];

      try{
        const db = getFirestore();
        const docRef = collection(db, "contact", this.$store.state.currentUser.uid , 'contacts');
        const docSnapshot = await getDocs(docRef);

        docSnapshot.forEach( async (docData) => {
          
          let user_id = docData.data().userId;

          let userRef = doc(db, "users", user_id );
          let userSnap = await getDoc(userRef);

          if(userSnap.exists()){

            if(docData.data().favourite){
              this.favourite_contacts.push(userSnap.data());
            }else{
              this.direct_contacts.push(userSnap.data());
            }

          }

        });

      }catch(err){
        console.log(err);
      }
    }

  }



}
</script>