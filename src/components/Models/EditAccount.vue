<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" fab text x-small>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>

    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="green" dense dark>
          <label>Edit Account Info</label>
          <v-spacer></v-spacer>
          <v-btn fab x-small @click="dialog.value = false" text
            ><v-icon>mdi-close</v-icon></v-btn
          >
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
            </div> </v-alert
          ><br />

          <v-form ref="form" class="mt-8">
            <v-row no-gutters>
              <v-col cols="12" md="12">
                <v-text-field
                  readonly
                  outlined
                  dense
                  label="Email"
                  placeholder="Enter Email"
                  :value="$store.state.currentUser.email"
                />
              </v-col>

              <v-col cols="12" md="12">
                <v-text-field
                  outlined
                  dense
                  label="Display Name"
                  placeholder="Enter Display Name"
                  v-model="form.name"
                  :rules="[(v) => !!v || 'Display Name required']"
                />
              </v-col>

              <v-col cols="12" md="12">
                <v-textarea
                  rows="5"
                  outlined
                  dense
                  label="Description"
                  placeholder="Enter Description"
                  v-model="form.description"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-card-actions class="justify-end">
          <v-btn color="red" text @click="dialog.value = false">Close</v-btn>
          <v-btn
            @click="handleEditAccount"
            color="green"
            class="white--text pa-3"
            >Edit</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { getAuth, updateProfile } from "firebase/auth";

export default {
  data() {
    return {
      form: {
        name: "",
        description: "",
      },

      errorString: null,
    };
  },

  methods: {

    handleEditAccount() {

      if (!this.$refs.form.validate()) {
        return;
      }

      const auth = getAuth();
      updateProfile(auth.currentUser, {
        displayName: this.form.name,
      })
      .then(() => {

        //update user description
        


      })
      .catch((error) => {
        this.errorString = error.message;
      });

    },


  },
};
</script>