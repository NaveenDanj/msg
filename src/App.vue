<template>
  <v-app>

    <v-navigation-drawer v-if=" this.$store.state.isLoggedIn " app mini-variant permanent>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              :src="this.$store.state.currentUser.photoURL"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>

        <v-list-item  link @click="navigateSideBar('Chat')">
          <v-list-item-icon>
            <v-icon color="green">mdi-android-messages </v-icon>
          </v-list-item-icon>
          <v-list-item-title>My Files</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="navigateSideBar('Settings')">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Shared with me</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="navigateSideBar('Bookmark')">
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Sta  rred</v-list-item-title>
        </v-list-item>

        <v-list-item link @click="handleRefresh">
          <v-list-item-icon>
            <v-icon>mdi-refresh</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Sta  rred</v-list-item-title>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>

export default {
  name: "App",

  data: () => ({
    mini: false,
  }),

  mounted(){

    this.$root.$on('forceRefresh', function() {
      this.$forceUpdate();
    })

  },

  methods : {

    async navigateSideBar(route){

      this.$store.commit('setActiveSideBar' , route);

    },

    handleRefresh(){
      this.$root.$emit('forceRefresh', true)
    }

  }


};
</script>
