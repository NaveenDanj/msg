<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">

      <v-btn
        v-bind="attrs"
        v-on="on"
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
    </template>

    <template v-slot:default="dialog">

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



      <v-card>

        <v-toolbar color="green" dense dark>
            
            <label>Add Contact</label>
            <v-spacer></v-spacer>
            <v-btn fab x-small @click="dialog.value = false" text><v-icon>mdi-close</v-icon></v-btn>

        </v-toolbar>

        <v-card-text>

          <v-alert
            class="ml-5 mr-5 mt-3 mb-0"
            dense
            outlined
            type="error"
            v-if="errorString != null"
          >
            
            <div>
                <label>{{ errorString }}</label>
            </div>

          </v-alert><br />

          
          <v-form ref="contactForm" class="mt-5">

            <v-row no-gutters>

              <v-col cols="12" md="12">

                <v-text-field 
                  v-model="form.userId" 
                  outlined 
                  dense 
                  label="User ID" 
                  placeholder="Enter User ID"
                  :rules="[
                    (v) => !!v || 'User ID is required'
                  ]"
                />

              </v-col>

            </v-row>

          </v-form>
            
        </v-card-text>

        <Loading :dialog="loading" />

        <v-card-actions class="justify-end">
          <v-btn color="red" text @click="dialog.value = false">Close</v-btn>
          <v-btn @click="handleAddContact" color="green" class="white--text pa-3" >Add</v-btn>
        </v-card-actions>

      </v-card>
    </template>
  </v-dialog>
</template>

<script>

import { 
  getFirestore,
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection
} from "firebase/firestore";

import Loading from '../Models/Loading.vue'


export default {

  components : {
    Loading
  },
  
  data(){
    return {
      form : {
        userId : '',
      },

      errorString : null,
      snackBar : false,
      timeout : 2000,
      updateRes : null,
      loading : false

    }
  },

  methods : {

    async handleAddContact(){

      this.errorString = null;

      if(!this.$refs.contactForm.validate()){
        return;
      }

      if(this.$store.state.currentUser.uid == this.form.userId){
        this.errorString = "Cannot add your user ID as a new contact!";
        return;
      }

      const db = getFirestore();

      try{

        this.loading = true;

        const userRef = doc(db, "users" , this.form.userId);
        const userSnap = await getDoc(userRef);

        if(!userSnap.exists()){
          this.errorString = "User not found for the given details!";
          this.loading = false;
        }else{

          const ref = doc(db, "contact", this.$store.state.currentUser.uid , "contacts" , this.form.userId);
          let message_id = this.$store.state.currentUser.uid + " " + this.form.userId;

          await setDoc(ref , {
            userId : this.form.userId,
            addedDate : new Date(),
            favourite : false,
            messageId : message_id
          });

          const Otherref = doc(db, "contact",  this.form.userId , "contacts" ,  this.$store.state.currentUser.uid);

          await setDoc(Otherref , {
            userId : this.$store.state.currentUser.uid,
            addedDate : new Date(),
            favourite : false,
            messageId : message_id
          });

          await addDoc(collection(db, "messages" , message_id , "inbox" ), {
            from : 'msg',
            to : 'all',
            timeStamp : new Date(),
            content : 'Added contact on ' + new Date().toString(),
            files : []
          });

          this.loading = false;

          this.snackBar = true;
          this.updateRes = "Contact is successfully added!";

        }


      }catch(err){
        console.log(err);
      }

    }

  }

}
</script>