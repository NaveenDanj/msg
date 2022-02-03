<template>
  <div v-if="activeContact" style="background: rgba(0, 0, 0, 0.03)" class="ml-0 pa-1">
    <v-card-text class="d-flex">
      <div class="d-flex" >
        <img
          :src="photoURL"
          style="width: 40px; height: 40px; border-radius: 20px"
        />
        <div>
          <label class="my-auto ml-2 font-weight-medium"
            >{{ displayName }}</label
          ><br />
          <label class="ml-2">{{ active == false ? 'Offline' : 'Online' }}</label>
        </div>
      </div>

      <v-spacer></v-spacer>

      <div class="my-auto">
        <div class="d-flex" >
          <!-- <v-btn elevation="0" width="25" height="25" class="mr-4" fab>
            <v-icon dark> mdi-magnify </v-icon>
          </v-btn> -->

          <ContactInfo />

          <v-menu rounded="lg" offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                elevation="0"
                width="25"
                height="25"
                class="my-auto"
                fab
                v-bind="attrs"
                v-on="on"
              >
                <v-icon dark> mdi-dots-vertical </v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item link v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>


        </div>
      </div>
    </v-card-text>
  </div>
</template>

<script>

import ContactInfo from './ContactInfo.vue'

export default {

  components : {
    ContactInfo
  },

  computed : {

    activeContact(){
      return this.$store.state.activeContact;
    },

    photoURL(){
      return this.$store.state.activeContact.photoURL;
    },

    displayName(){
      return this.$store.state.activeContact.displayName;
    },

    active(){
      return this.$store.state.activeContact.active;
    },

  },
    
  data(){

    return {

      items: [
        { title: 'Add to favourit' },
        { title: 'Delete Chat' },
        { title: 'Block User' },
      ],

    }

  }

}
</script>