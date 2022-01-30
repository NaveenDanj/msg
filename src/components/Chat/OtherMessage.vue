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
      <img :src="this.$store.state.currentUser.photoURL" style="width: 32px; height: 32px; border-radius: 16px" />
      <label style="font-size: 12px" class="font-weight-medium my-auto ml-3"
        >Naveen Dhananjaya</label
      ><label style="color: gray; font-size: 12px" class="my-auto ml-2"
        >06:37pm</label
      >
    </div>
  </div>
</template>

<script>
export default {
    props : ['item']
}
</script>