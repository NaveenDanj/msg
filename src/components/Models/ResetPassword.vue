<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
        dense
        outlined
        color="red"
        class="white--text"
      >
        Reset
      </v-btn>
    </template>

    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="green" dense dark>
          <label>Reset Password</label>
          <v-spacer></v-spacer>
          <v-btn fab x-small @click="dialog.value = false" text
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-toolbar>

        <v-card-text class="mb-0" >
          <v-alert
            class="ml-5 mr-5 mt-3 mb-5"
            dense
            outlined
            type="error"
            v-if="errorString != null"
          >
            <div>
              <label>{{ errorString }}</label>
            </div>
          </v-alert>

          <v-form ref="form" class="mt-5">
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

            <v-row no-gutters>
              <v-col cols="12" md="12">
                <v-text-field
                  type="password"
                  outlined
                  dense
                  label="Current Password"
                  v-model="form.currentPassword"
                  placeholder="Current Password"
                  :rules="[(v) => !!v || 'Current Password required']"
                />
              </v-col>

              
            </v-row>
          </v-form>
        </v-card-text>

        <v-card-actions class="justify-end mt-0">
          <v-btn color="red" text @click="dialog.value = false">Close</v-btn>
          <v-btn
            @click="handleReAuthenticate"
            color="green"
            class="white--text pa-3"
            >Reset</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import {
  getAuth,
  EmailAuthProvider,
  reauthenticateWithCredential,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth";

export default {
  data() {
    return {
      form: {
        currentPassword: "",
      },

      errorString: null,
      updateRes: null,
      snackBar: false,
      timeout: 2000,
    };
  },

  methods: {

    handleReAuthenticate() {
      const auth = getAuth();
      const user = auth.currentUser;

      // TODO(you): prompt the user to re-provide their sign-in credentials
      const credential = EmailAuthProvider.credential(user.email, this.form.currentPassword);

      reauthenticateWithCredential(user, credential)
        .then(() => {
          this.handleResetPassword(auth);
        })
        .catch((error) => {
          this.errorString = error.message;
        });
    },

    handleResetPassword(auth) {
      sendPasswordResetEmail(auth, auth.currentUser.email)
        .then(() => {
          this.snackBar = true;
          this.updateRes = "";

          signOut(auth).then(() => {
            this.$router.push('/login');
            this.$store.commit('setIsLoggedIn' , false);
            this.$store.commit('setCurrentUser' , null);
          }).catch((error) => {
            console.log('msg : ' , error.message)
          });

        })
        .catch((error) => {
          this.errorString = error.message;
        });
    },

  },
};
</script>