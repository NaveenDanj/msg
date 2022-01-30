<template>
  
  <v-row v-if="this.$store.state.currentUser" style="height : 100vh; overflow-y:hidden">

    <v-col cols="12" sm="4" lg="3" permanent>
      <ChatSideBar v-if=" ActiveSideBar == 'Chat' ? true : false " />
      <Settings v-if="ActiveSideBar == 'Settings' ? true : false " />
      <Bookmark v-if="ActiveSideBar == 'Bookmark' ? true : false " />
    </v-col>

    <v-col cols="12" sm="8"  lg="9" >

      <div style="overflow-y:hidden; width: 100%;">
        <ChatHeader />
        <ChatContent />
      </div>

      <EnterChat />

    </v-col>


  </v-row>

</template>

<script>

import ChatSideBar from '../components/ChatSideBar.vue';
import Settings from '../components/Settings.vue'
import Bookmark from '../components/Bookmark.vue'

import ChatHeader from '../components/Chat/ChatHeader.vue'
import ChatContent from '../components/Chat/ChatContent.vue'
import EnterChat from '../components/Chat/EnterChat.vue'

export default {
  name: "Home",

  data(){
    return {
      contactData : 'new'
    }
  },

  components : {
    ChatSideBar,
    Settings,
    Bookmark,

    ChatHeader,
    ChatContent,
    EnterChat
  },

  computed : {
    ActiveSideBar(){
      return this.$store.state.activeSideBar
    },

  },

};
</script>
