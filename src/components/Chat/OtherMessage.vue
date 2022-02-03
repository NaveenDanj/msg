<template>
  <div>
    <div class="d-flex justify-start">
      <div class="white pa-2 elevation-3" style="width: 50%">
        <label>{{ item.content }}</label>
      </div>

      <v-btn fab x-small class="my-auto" text>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </div>

    <div class="d-flex mt-2">
      <img :src="this.$store.state.activeContact.photoURL" style="width: 32px; height: 32px; border-radius: 16px" />
      <label style="font-size: 12px" class="font-weight-medium my-auto ml-3"
        >{{ this.$store.state.activeContact.displayName }}</label
      ><label style="color: gray; font-size: 12px" class="my-auto ml-2"
        >{{formatDateTime(item.timeStamp)}}</label
      >
    </div>
  </div>
</template>

<script>

import moment from 'moment';

export default {
  props : ['item'],

  methods : {

    formatDateTime(date){
      let time = moment( new Date(date.seconds * 1000)).format('MMMM Do YYYY, h:mm a');
      return moment(time , 'MMMM Do YYYY, h:mm a').fromNow();
    }


  }


}
</script>