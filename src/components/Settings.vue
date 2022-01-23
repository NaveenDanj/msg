<template>
  <v-container style="height: 100vh; overflow-y: scroll">
    <div width="100%">

        <h2>Settings</h2>

      <center>

        <div class="mx-auto">

          <img
            class="my-auto"
            style="width: 64px; height: 64px; border-radius: 32px"
            src="https://avatars.githubusercontent.com/u/48654030?s=64&v=4"
          />

          <v-btn class="my-auto" fab text x-small>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>

        </div>

        <div class="mx-auto">

          <label>Naveen Dhananjaya</label>

         

        </div>

      </center>

    </div>

    <v-expansion-panels  class="mt-10 elevation-0" focusable>

      <v-expansion-panel>

        <v-expansion-panel-header>
            <div class="ml-0 my-auto">
                <v-icon>mdi-account</v-icon>
                <label class="my-auto ml-5">Personal Info</label>
            </div>
        </v-expansion-panel-header>


        <v-expansion-panel-content class="pa-3">

          <div class="d-flex justify-space-between" >

            <div>
              <label class="font-weight-medium">Name</label><br/>
              <label style="font-size: 14px;">Adam Zampa</label>
            </div>

            <div>

              <EditAccount />
            
            </div>


          </div>

          <div class="mt-7">
            <label class="font-weight-medium">Email</label><br/>
            <label style="font-size: 14px;">naveenhettiwaththa@gmail.com</label>
          </div>

          <div class="mt-7">
            <label class="font-weight-medium">Description</label><br/>
            <label style="font-size: 14px;">Pariatur aliquip cillum fugiat occaecat commodo do sunt reprehenderit. Esse sit ipsum sint ut commodo aute proident occaecat. Irure amet esse labore laboris in non eu ut fugiat enim ipsum aute esse. Id deserunt pariatur dolor sit tempor eiusmod eu quis deserunt nisi sunt.</label>
          </div>
          
        </v-expansion-panel-content>


      </v-expansion-panel>

      <v-expansion-panel>

        <v-expansion-panel-header>
            <div class="ml-0 my-auto">
                <v-icon>mdi-account</v-icon>
                <label class="my-auto ml-5">Privacy</label>
            </div>
        </v-expansion-panel-header>


        <v-expansion-panel-content class="pa-3">

          <div class="d-flex justify-space-between pa-2" style="border-bottom-width: 1px; border-bottom-color:gray; border-bottom-style:solid">

            <label class="font-weight-medium">Description</label>

            <div style="width : 150px;" >
              <v-select outlined dense value="Everyone" :items="['Everyone' , 'Nobody']" />
            </div>

          </div>

          <div class="d-flex justify-space-between pa-2 my-auto" style="border-bottom-width: 1px; border-bottom-color:gray; border-bottom-style:solid">

            <label class="font-weight-medium my-auto">Last Seen</label>
            <v-switch outlined dense  />

          </div>

          <div class="d-flex justify-space-between pa-2 my-auto" style="border-bottom-width: 1px; border-bottom-color:gray; border-bottom-style:solid">

            <label class="font-weight-medium my-auto">Read Receipt</label>
            <v-switch outlined dense  />

          </div>

          <div class="d-flex justify-space-between pa-2" style="border-bottom-width: 1px; border-bottom-color:gray; border-bottom-style:solid">

            <label class="font-weight-medium">Group Invite</label>

            <div style="width : 150px;" >
              <v-select outlined dense value="Everyone" :items="['Everyone' , 'Nobody']" />
            </div>

          </div>

          
          
        </v-expansion-panel-content>


      </v-expansion-panel>

      <v-expansion-panel>

        <v-expansion-panel-header>
            <div class="ml-0 my-auto">
                <v-icon>mdi-account</v-icon>
                <label class="my-auto ml-5">Security</label>
            </div>
        </v-expansion-panel-header>


        <v-expansion-panel-content>
          
          <div class="d-flex justify-space-between pa-2 my-auto" >

            <label class="font-weight-medium my-auto">Show security notification</label>
            <v-switch outlined dense  />

          </div>


        </v-expansion-panel-content>

      </v-expansion-panel>

      <v-expansion-panel>

        <v-expansion-panel-header>
            <div class="ml-0 my-auto">
                <v-icon>mdi-account</v-icon>
                <label class="my-auto ml-5">Help</label>
            </div>
        </v-expansion-panel-header>


        <v-expansion-panel-content class="pa-5 ">
          
          <div class="d-flex justify-space-between pa-2 my-auto" >

            <label class="font-weight-medium my-auto">Feature request & bug report </label>
            
            <Request />

          </div>

        </v-expansion-panel-content>

      </v-expansion-panel>



    </v-expansion-panels>


  </v-container>
</template>

<script>

import EditAccount from '../components/Models/EditAccount.vue';
import Request from '../components/Models/Request.vue';

export default {
  
  components : {
    EditAccount,
    Request
  }

}
</script>