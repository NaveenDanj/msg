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
      <h5>FAVOURITESs</h5>

      <v-list nav dense class="mt-1">
        <v-list-item
          v-for="(item, index) in [1, 2, 3, 4]"
          :key="index"
          link
          class="ma-0"
        >
          <v-list-item-icon>
            <img
              src="https://avatars.githubusercontent.com/u/48654030?v=4"
              style="width: 30px; height: 30px; border-radius: 15px"
            />
          </v-list-item-icon>

          <v-list-item-title class="my-auto ml-0"
            >Naveen Hettiwaththa</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </div>

    <div class="mt-5">
      <h5>DIRECT MESSAGES</h5>

      <v-list nav dense class="mt-1">
        <v-list-item
          v-for="(item, index) in [1, 2, 3, 4]"
          :key="index"
          link
          class="ma-0"
        >
          <v-list-item-icon>
            <img
              src="https://avatars.githubusercontent.com/u/48654030?v=4"
              style="width: 30px; height: 30px; border-radius: 15px"
            />
          </v-list-item-icon>

          <v-list-item-title class="my-auto ml-0"
            >Naveen Hettiwaththa</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </div>

    <div class="mt-5">
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

      <!-- <div class="mt-5">

            <div v-for="(item , index) in [1,2,3,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]" :key="index" class="d-flex mb-3">
              <v-icon style="width : 20px; height: 20px; border-radius : 10px;" >mdi-pound</v-icon>
              <label class="my-auto ml-2">Naveen Dhananjaya</label>
            </div>
            
          </div> -->

      <v-list nav dense class="mt-5">
        <v-list-item
          v-for="(item, index) in [1, 2, 3, 4, 4]"
          :key="index"
          link
          class="ma-0"
        >
          <v-list-item-icon>
            <!-- <img src="https://avatars.githubusercontent.com/u/48654030?v=4" style="width : 30px; height: 30px; border-radius : 15px;" /> -->
            <v-icon style="width: 20px; height: 20px; border-radius: 10px"
              >mdi-pound</v-icon
            >
          </v-list-item-icon>

          <v-list-item-title class="my-auto mx-auto ml-0"
            >Naveen Hettiwaththa</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script>

import AddContact from '../components/Models/AddContact.vue';

export default {
  
  components : {
    AddContact
  }

}
</script>