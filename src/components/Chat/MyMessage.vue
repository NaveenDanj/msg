<template>
  <div>
    <div class="d-flex justify-end">


      <!-- <v-btn fab x-small class="my-auto" text> -->
        <!-- <v-icon>mdi-dots-vertical</v-icon> -->
      <!-- </v-btn> -->

      <v-menu rounded="lg" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            elevation="0"
            class="my-auto"
            fab
            x-small 
            v-bind="attrs"
            v-on="on"
          >
            <v-icon dark> mdi-dots-vertical </v-icon>
          </v-btn>
        </template>

        <v-list>
          
          <v-list-item link>
            <v-list-item-title @click="addToBookmark">Add to bookmark</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-title>Delete Message</v-list-item-title>
          </v-list-item>

        </v-list>

      </v-menu>




      <div class="white pa-2 elevation-3" style="width: 50%">
        <label
          >{{item.content}}</label
        >
      </div>
    </div>

    <div class="d-flex mt-2 justify-end">
      <label style="font-size: 12px" class="font-weight-medium my-auto ml-3"
        >You</label
      ><label style="color: gray; font-size: 12px" class="my-auto ml-2 mr-2"
        >{{ formatDateTime(item.timeStamp) }}</label
      >
      <img
        style="width: 32px; height: 32px; border-radius: 16px"
        :src="this.$store.state.currentUser.photoURL"
      />
    </div>
  </div>
</template>

<script>

import moment from 'moment';
import { doc , getFirestore , getDoc , setDoc} from "firebase/firestore";


export default {
  props : ['item'],

  created(){
    console.log('the data is : ' , this.item);
  },

  methods : {

    formatDateTime(date){
      let time = moment( new Date(date.seconds * 1000)).format('MMMM Do YYYY, h:mm a');
      return moment(time , 'MMMM Do YYYY, h:mm a').fromNow();
    },

    async addToBookmark(){

      try{

        const db = getFirestore();

        const magRef = doc(db, "bookmarks", this.$store.state.currentUser.uid , 'messages' , this.item.id);
        
        const docSnap = await getDoc(magRef);

        if(!docSnap.exists()){

          await setDoc(doc(db, "bookmarks", this.$store.state.currentUser.uid, "messages" , this.item.id), {
            messageId : this.item.id,
            content : this.item.content,
            files : this.item.files,
            from : this.item.from,
            to : this.item.to,
            timeStamp : this.item.timeStamp,
          });

        }

  
      }catch(e){
        console.log(e);
      }

    }


  }


}
</script>