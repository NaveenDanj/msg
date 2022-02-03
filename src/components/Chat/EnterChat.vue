<template>
  <div v-if="activeContact" class="pa-5 pb-0 d-flex" style="width: 100%; height: 10vh">
    <v-text-field
      v-model="message"
      @keydown.enter="senMessage"
      class="mr-3"
      outlined
      dense
      placeholder="Type your message..."
    />

    <v-btn class="mr-3" text>
      <v-icon class="black--text">mdi-microphone</v-icon>
    </v-btn>

    <v-btn @click="senMessage" color="green">
      <v-icon class="white--text">mdi-send</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { getFirestore, addDoc, collection } from "firebase/firestore";

export default {

  computed : {

    activeContact(){
      return this.$store.state.activeContact;
    }

  },

  data() {
    return {
      message: "",
    };
  },

  methods: {
    async senMessage() {
      if (this.message == "") {
        return;
      }

      const db = getFirestore();
      const message_id = this.$store.state.activeInboxId;
      const fromUser = this.$store.state.currentUser.uid;
      const toUser = this.$store.state.activeContact.userid;

      await addDoc(collection(db, "messages", message_id, "inbox"), {
        from: fromUser,
        to: toUser,
        timeStamp: new Date(),
        content: this.message,
        files: [],
        read : false
      });

      this.message = "";
    },
  },
};
</script>