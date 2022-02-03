<template>
  <div>
    <div class="d-flex justify-end">
      <v-btn fab x-small class="my-auto" text>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

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