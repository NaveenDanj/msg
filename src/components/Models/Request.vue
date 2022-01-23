<template>
  <v-dialog transition="dialog-top-transition" max-width="600">
      
    <template v-slot:activator="{ on, attrs }">

        <v-btn v-bind="attrs" v-on="on" fab text x-small>
            <v-icon>mdi-page-next </v-icon>
        </v-btn>

    </template>

    <template v-slot:default="dialog">
      <v-card>

        <v-toolbar color="green" dense dark>
            
            <label>Feature request & bug report </label>
            <v-spacer></v-spacer>
            <v-btn fab x-small @click="dialog.value = false" text><v-icon>mdi-close</v-icon></v-btn>

        </v-toolbar>

        <v-card-text>
          
          <v-form class="mt-8">

            <v-row no-gutters>

                <v-col cols="12" md="12">
                    <v-select outlined dense :items="['Feature Request' , 'Bug Report' ]" value="Feature Request" placeholder="Request Type" />
                </v-col>

                <v-col cols="12" md="12">
                    <v-text-field outlined dense label="Email" readonly value="naveenhettiwaththa@gmail.com" />
                </v-col>

                <v-col cols="12" md="12">
                    <v-textarea rows="5"  outlined dense label="Description" placeholder="Your request / report" />
                </v-col>

            </v-row>


          </v-form>
            
        </v-card-text>

        <v-card-actions class="justify-end">
          <v-btn color="red" text @click="dialog.value = false">Close</v-btn>
          <v-btn color="green" class="white--text pa-3" >Invite</v-btn>
        </v-card-actions>

      </v-card>
    </template>
  </v-dialog>
</template>