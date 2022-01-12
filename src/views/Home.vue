<template>
  
  <v-row style="height : 100vh; overflow-y:hidden">

    <v-col cols="12" sm="4" lg="3" permanent>
      <ChatSideBar v-if="false" />
      <Settings v-if="true" />
    </v-col>

    <v-col cols="12" sm="8"  lg="9" >

      <div style="overflow-y:hidden; width: 100%;">
        
        <div style="background: rgba(0, 0, 0, 0.03);" class="ml-0 pa-1">

          <v-card-text class="d-flex ">

            <div class="d-flex" >
              <img src="https://avatars.githubusercontent.com/u/48654030?v=4" style="width : 40px; height: 40px; border-radius : 20px;" />
              <div>
                <label class="my-auto ml-2 font-weight-medium">Naveen Dhananjaya</label><br/>
                <label class="ml-2">Active</label>
              </div>
            </div>

            <v-spacer></v-spacer>

            <div class="my-auto">
              
              <div class="d-flex" >

                <v-btn
                  elevation="0"
                  width="25"
                  height="25"
                  class=" mr-4"
                  fab
                >
                  <v-icon dark>
                    mdi-magnify
                  </v-icon>

                </v-btn>

                <v-btn
                  elevation="0"
                  width="25"
                  height="25"
                  class=" mr-4"
                  fab
                >
                  <v-icon dark>
                    mdi-information-outline 
                  </v-icon>

                </v-btn>

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
                      <v-icon dark>
                        mdi-dots-vertical
                      </v-icon>

                    </v-btn>
                  </template>

                  <v-list>
                    <v-list-item
                      v-for="(item, index) in items"
                      :key="index"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>

                </v-menu>

              </div>


            </div>

          </v-card-text>
          
        </div>

        <div class="ma-0 pb-3 pt-5 pl-2 pr-2 " style="height : 80vh; overflow-y:scroll; width: 100%; background-repeat: round; background-image: url(http://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cd.png);">

          <div class="mb-5">

            <div class="d-flex justify-start">
              
              <div class="white pa-2 elevation-3" style="width : 50%;">
                <label>Sunt sint in id sint. In eu non aliquip non nisi ipsum ullamco esse est sit duis aliqua irure. Voluptate occaecat Lorem eiusmod mollit qui qui dolore magna do aliquip sint et sint deserunt. Ex voluptate adipisicing qui nulla sunt dolor eiusmod do elit elit ex nulla laboris. Elit minim proident mollit fugiat reprehenderit commodo magna anim nulla nisi.</label>
              </div>

              <v-btn fab x-small class="my-auto" text>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            
            </div>

            <div class="d-flex mt-2">
              <img style="width : 32px; height: 32px; border-radius: 16px;" src="https://avatars.githubusercontent.com/u/48654030?s=64&v=4" />
              <label style="font-size:12px;" class="font-weight-medium my-auto ml-3">Naveen Dhananjaya</label><label style="color: gray; font-size:12px;" class="my-auto ml-2" >06:37pm</label>
            </div>
          </div>

          <div class="mb-5">

            <div class="d-flex justify-end">

              
              <v-btn fab x-small class="my-auto" text>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
              
              <div class="white pa-2 elevation-3" style="width : 50%;">
                <label>Sunt sint in id sint. In eu non aliquip non nisi ipsum ullamco esse est sit duis aliqua irure. Voluptate occaecat Lorem eiusmod mollit qui qui dolore magna do aliquip sint et sint deserunt. Ex voluptate adipisicing qui nulla sunt dolor eiusmod do elit elit ex nulla laboris. Elit minim proident mollit fugiat reprehenderit commodo magna anim nulla nisi.</label>
              </div>
            
            </div>

            <div class="d-flex mt-2 justify-end ">
              <label style="font-size:12px;" class="font-weight-medium my-auto ml-3">You</label><label style="color: gray; font-size:12px;" class="my-auto ml-2 mr-2" >06:37pm</label>
              <img style="width : 32px; height: 32px; border-radius: 16px;" src="https://avatars.githubusercontent.com/u/48654030?s=64&v=4" />
            </div>
          </div>

          <div class="mb-5">

            <div class="d-flex justify-end">

              
              <v-btn fab x-small class="my-auto" text>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
              
              <div class="white pa-2 elevation-3" style="width : 50%;">
                <label>Sunt sint in id sint. In eu non aliquip non nisi ipsum ullamco esse est sit duis aliqua irure. Voluptate occaecat Lorem eiusmod mollit qui qui dolore magna do aliquip sint et sint deserunt. Ex voluptate adipisicing qui nulla sunt dolor eiusmod do elit elit ex nulla laboris. Elit minim proident mollit fugiat reprehenderit commodo magna anim nulla nisi.</label>
              </div>
            
            </div>

            <div class="d-flex mt-2 justify-end ">
              <label style="font-size:12px;" class="font-weight-medium my-auto ml-3">You</label><label style="color: gray; font-size:12px;" class="my-auto ml-2 mr-2" >06:37pm</label>
              <img style="width : 32px; height: 32px; border-radius: 16px;" src="https://avatars.githubusercontent.com/u/48654030?s=64&v=4" />
            </div>
          </div>

          
        </div>

      </div>

      <div class=" pa-5 pb-0 d-flex" style=" width: 100%; height: 10vh">
        <v-text-field class="mr-3" outlined dense placeholder="Type your message..." />

        <v-btn class="mr-3 " text >
          <v-icon class="black--text">mdi-microphone</v-icon>
        </v-btn>

        <v-btn color="green">
          <v-icon class="white--text">mdi-send</v-icon>
        </v-btn>
      </div>

    </v-col>


  </v-row>

</template>

<script>

import ChatSideBar from '../components/ChatSideBar.vue';
import Settings from '../components/Settings.vue'

export default {
  name: "Home",

  components : {
    ChatSideBar,
    Settings
  },

  data(){
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }
  }

};
</script>
