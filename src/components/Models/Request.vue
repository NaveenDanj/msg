<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
      
    <template v-slot:activator="{ on, attrs }">

        <v-btn v-bind="attrs" v-on="on" fab text x-small>
            <v-icon>mdi-page-next </v-icon>
        </v-btn>

    </template>

    <template v-slot:default="dialog">
      <v-card>

        <v-snackbar
          v-model="snackBar"
          :timeout="timeout"
          color="primary"
          dark
        >
          {{ updateRes }}

          <template v-slot:action="{ attrs }">
            <v-btn
              color="blue"
              dark
              text
              v-bind="attrs"
              @click="snackBar = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>


        <v-toolbar color="green" dense dark>
            
            <label>Feature request & bug report </label>
            <v-spacer></v-spacer>
            <v-btn fab x-small @click="dialog.value = false" text><v-icon>mdi-close</v-icon></v-btn>

        </v-toolbar>

        <v-card-text>
          
          <v-form ref="requestForm" class="mt-8">

            <v-row no-gutters>

                <v-col cols="12" md="12">
                    <v-select 
                      outlined 
                      dense 
                      :items="['Feature Request' , 'Bug Report' ]"
                      label="Type"
                      v-model="type" 
                      placeholder="Request Type"
                    />
                </v-col>

                <v-col cols="12" md="12">
                    <v-text-field 
                      outlined 
                      dense 
                      label="Email" 
                      readonly 
                      v-model="email"
                      :rules="[
                        (v) => !!v || 'Required',
                        (v) => /^\S+@\S+\.\S+$/.test(v) || 'Invalid email format',
                      ]"
                    />
                </v-col>

                <v-col cols="12" md="12">
                    <v-textarea 
                      rows="5" 
                      outlined 
                      dense 
                      label="Description" 
                      placeholder="Your request / report"
                      v-model="description"
                      :rules="[
                        (v) => !!v || 'Required',
                        (v) => v && v.length <= 500 || 'Max 500 characters',
                        (v) => v && v.length >= 10 || 'Min 10 characters',
                      ]"
                    />
                </v-col>

            </v-row>


          </v-form>
            
        </v-card-text>

        <v-card-actions class="justify-end">
          <v-btn color="red" text @click="dialog.value = false">Close</v-btn>
          <v-btn @click="sendRequest"  color="green" class="white--text pa-3" >Send</v-btn>
        </v-card-actions>

      </v-card>
    </template>
  </v-dialog>
</template>

<script>

import {addDoc , getFirestore , collection} from "firebase/firestore";

export default {
  
  data(){
    return {
      loading: false,
      type : 'Feature Request',
      email : this.$store.state.currentUser.email,
      description : null,

      snackBar : false,
      timeout : 2000,
      updateRes : null,

    }
  },

  computed: {
    
  },

  methods : {
    

    async sendRequest(){

      if(!this.$refs.requestForm.validate()){
        return;
      }

      try{

        let db = getFirestore();

        let request = {
          type : this.type,
          userId : this.$store.state.currentUser.uid,
          email : this.email,
          description : this.description,
          createdAt : new Date(),
        }

        await addDoc(collection(db, "request" ), request);
        this.description = '';

        this.snackBar = true;
        this.updateRes = 'Request sent successfully';

      }catch(err){
        console.log(err);
      }


    }

  }


}
</script>