<template>
  <v-container style="height: 100vh; overflow-y: scroll">
    <div width="100%">

        <h2>Settings</h2>

        <v-snackbar
          v-model="snackBar"
          :timeout="timeout"
          color="primary"
        >
          {{ updateRes }}

          <template v-slot:action="{ attrs }">
            <v-btn
              color="blue"
              text
              v-bind="attrs"
              @click="snackBar = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>

      <center>

        <div class="mx-auto">

          <img
            class="my-auto"
            style="width: 64px; height: 64px; border-radius: 32px"
            :src="this.$store.state.currentUser.photoURL"
          />
          <label>
            <!-- <v-btn @click="open = true" class="my-auto" fab text x-small>
              <v-icon>mdi-pencil</v-icon>
            </v-btn> -->
            <v-icon small>mdi-pencil</v-icon>
            <input type="file" @change="handleUploadDisplayImage" accept="image/png" style="display: none">
          </label>
        </div>

        <div class="mx-auto">

          <label>{{ this.$store.state.currentUser.displayName }}</label>

         

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


        <v-expansion-panel-content v-if="this.$store.state.currentUserData" class="pa-3">

          <div class="d-flex justify-space-between" >

            <div>
              <label class="font-weight-medium">Name</label><br/>
              <label style="font-size: 14px;">{{ this.$store.state.currentUser.displayName }}</label>
            </div>

            <div>

              <EditAccount />
            
            </div>


          </div>

          <div class="mt-7">
            <label class="font-weight-medium">User ID</label><br/>
            <label style="font-size: 14px;">{{ this.$store.state.currentUser.uid }}</label>
          </div>

          <div class="mt-7">
            <label class="font-weight-medium">Email</label><br/>
            <label style="font-size: 14px;">{{ this.$store.state.currentUser.email }}</label>
          </div>

          <div class="mt-7">
            <label class="font-weight-medium">Description</label><br/>
            <label style="font-size: 14px;">{{this.$store.state.currentUserData.description }}</label>
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

          <div class="d-flex justify-space-between pa-2 my-auto" >

            <label class="font-weight-medium my-auto">Logout</label>
            <v-btn dense @click="handleLogout" outlined color="red" class="white--text">Logout</v-btn>

          </div>


          <div class="d-flex justify-space-between pa-2 my-auto" >

            <label class="font-weight-medium my-auto">Reset Password</label>
            <ResetPassword />

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
import ResetPassword from '../components/Models/ResetPassword.vue'
import Request from '../components/Models/Request.vue';
import { getAuth, signOut , updateProfile  } from "firebase/auth";
import { getStorage, ref , uploadBytes , getDownloadURL } from "firebase/storage";
import { doc, updateDoc  , getFirestore} from "firebase/firestore"; 


export default {
  
  components : {
    EditAccount,
    Request,
    ResetPassword
  },

  data(){

    return {
      snackBar : false,
      timeout : 2000,
      updateRes : null
    }

  },

  methods : {

    handleLogout(){

      const auth = getAuth();

      signOut(auth).then(() => {
        this.$router.push('/login');
        this.$store.commit('setIsLoggedIn' , false);
        this.$store.commit('setCurrentUser' , null);
      }).catch((error) => {
        console.log('msg : ' , error.message)
      });

    },

    handleUploadDisplayImage(e){
      
      let  files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      console.log(files);

      let filename = Date.now().toString() + "-"+ files[0].name;

      const storage = getStorage();
      const storageRef = ref(storage, `propic/${filename}`);

      uploadBytes(storageRef, files[0]).then((snapshot) => {
        
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);

          const auth = getAuth();
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
          }).then(async () => {

           
            const newAuth = getAuth();
            const user = newAuth.currentUser;

            const db = getFirestore();
            const userRef = doc(db, "users", user.uid);

            await updateDoc(userRef , {
              photoURL : downloadURL,
              photoFileName : filename
            });

            this.$store.commit('setCurrentUser' , user);
            console.log('the updated user is ' , user);

            this.snackBar = true;
            this.updateRes = "Profile picture uploaded successfully";
          }).catch((error) => {
            console.log(error);
          });

        });

      });

      
    }


  }

}
</script>