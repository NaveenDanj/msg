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
        <ChatContent contact="new contact" />
      </div>

      <div class=" pa-5 pb-0 d-flex" style=" width: 100%; height: 10vh">
        <v-text-field class="mr-3" outlined dense placeholder="Type your message..." />

        <v-btn class="mr-3 " text >
          <v-icon class="black--text">mdi-microphone</v-icon>
        </v-btn>

        <v-btn @click="contactData = 'another new' " color="green">
          <v-icon class="white--text">mdi-send</v-icon>
        </v-btn>
      </div>

    </v-col>


  </v-row>

</template>

<script>

import ChatSideBar from '../components/ChatSideBar.vue';
import Settings from '../components/Settings.vue'
import Bookmark from '../components/Bookmark.vue'

import ChatHeader from '../components/Chat/ChatHeader.vue'
import ChatContent from '../components/Chat/ChatContent.vue'


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
    ChatContent
  },

  computed : {
    ActiveSideBar(){
      return this.$store.state.activeSideBar
    },

  },

};
</script>
