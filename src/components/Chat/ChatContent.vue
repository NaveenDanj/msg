<template>
  <div
    class="ma-0 pb-3 pt-5 pl-2 pr-2"
    v-chat-scroll
    ref="chatContent"
    style="
      height: 80vh;
      overflow-y: scroll;
      width: 100%;
      background-repeat: round;
      background-image: url(http://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cd.png);
    "
  >



      

    <div v-for="(item , index) in messageArray" :key="index" class="mb-5">

      <MsgChat :item="item" v-if="item.from == 'msg' " />
      
      <OtherMessage v-else-if="item.from != this.$store.state.currentUser.uid " :item="item" />

      <MyMessage v-else :item="item" />

      
    </div>

   
  </div>

</template>

<script>

import { doc, getFirestore , getDoc , collection , onSnapshot  } from "firebase/firestore";
import MsgChat from '../Chat/MsgChat.vue'
import OtherMessage from './OtherMessage.vue'
import MyMessage from './MyMessage.vue'

export default {

  components : {
    MsgChat,
    OtherMessage,
    MyMessage
  },

  watch: {
    "$store.state.activeContact": function () {
      this.scrollToBottom();
      this.fetchMessages();
    },
  },

  computed : {

    messageArray(){
      return this.$store.state.activeMessages
    }

  },

  methods: {
    
    async fetchMessages(){

      let db = getFirestore();

      let docData = await getDoc(doc(db, "contact" , this.$store.state.currentUser.uid , "contacts" , this.$store.state.activeContact.userid ));

      if(docData.exists()){
        console.log('message inbox is : ' , docData.data())
      }

      onSnapshot(collection(db, "messages", docData.data().messageId , 'inbox'), (messageSnap) => {
        messageSnap.forEach((doc) => {
          this.$store.commit('setActiveMessages' , doc.data());
        })
      });

    },
    
    scrollToBottom() {
      let container = this.$refs.chatContent;
      container.scrollTop = container.scrollHeight;
    },
  },



};
</script>