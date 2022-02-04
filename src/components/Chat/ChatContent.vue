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
      
      <OtherMessage v-else-if="item.from != currentUser " :item="item" />

      <MyMessage v-else :item="item" />

    </div>

    <Loading :dialog="loadingDialog" />

   
  </div>

</template>

<script>

import { doc, getFirestore , getDoc , collection , onSnapshot, orderBy, query  } from "firebase/firestore";
import MsgChat from '../Chat/MsgChat.vue'
import OtherMessage from './OtherMessage.vue'
import MyMessage from './MyMessage.vue'

import Loading from '../Models/Loading.vue'

export default {

  components : {
    MsgChat,
    OtherMessage,
    MyMessage,
    Loading
  },

  data(){

    return {
      loadingDialog : false,
    }

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
    },

    currentUser(){
      return this.$store.state.currentUser.uid;
    }

  },

  methods: {
    
    async fetchMessages(){

      let db = getFirestore();

      this.loadingDialog = true;

      let docData = await getDoc(doc(db, "contact" , this.$store.state.currentUser.uid , "contacts" , this.$store.state.activeContact.userid ));
      this.$store.commit('setActiveInboxId' , docData.data().messageId);

      const q = query( collection(db, "messages", docData.data().messageId , 'inbox') , orderBy('timeStamp') )
      onSnapshot(q , (messageSnap) => {
        this.$store.commit('resetActiveMessages');
        messageSnap.forEach((doc) => {
          let document = doc.data();
          document.id = doc.id;
          this.$store.commit('setActiveMessages' , document);
        })
      });

      this.loadingDialog = false;

    },
    

    scrollToBottom() {
      let container = this.$refs.chatContent;
      container.scrollTop = container.scrollHeight;
    },

  },



};
</script>