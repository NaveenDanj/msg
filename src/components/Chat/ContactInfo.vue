<template>
    
    <v-dialog transition="dialog-top-transition" max-width="600">
        
        <template v-slot:activator="{ on, attrs }">

            <v-btn :disabled="activeContact == null ? true : false" elevation="0" width="25" height="25" class="mr-4" fab v-bind="attrs" v-on="on">
                <v-icon dark> mdi-information-outline </v-icon>
            </v-btn>

        </template>

        <template v-slot:default="dialog">

            <v-card>

                <v-toolbar color="green" dense dark>
            
                    <label>Contact Info</label>
                    <v-spacer></v-spacer>
                    <v-btn fab x-small @click="dialog.value = false" text><v-icon>mdi-close</v-icon></v-btn>

                </v-toolbar>


                <v-card-text class="pa-5">

                    <div class="d-flex">
                        <div class="justify-center mx-auto" >
                            <img style="width : 300px; height : 300px; border-radius: 150px;" :src="photoURL" /><br />
                            <center>
                                <h1>{{name}}</h1>
                                <div class="mt-2">
                                    <label style="font-size : 15px;" >{{uid}}</label>
                                </div>
                            </center>
                        </div>
                    </div>

                    <div class="pa-2 mt-5 elevation-3" >
                        <label style="font-size : 15px; font-weight : bold;" >Description</label>
                        <p>{{description}}</p>
                    </div>

                    <!-- <v-list class="mt-5">
                        <v-list-item class="" link v-for="(item, index) in items" :key="index">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list> -->
                    
                </v-card-text>

            </v-card>
        
        </template>
    
    
    </v-dialog>


</template>

<script>
export default {

    data(){

        return {
            items: [
                { title: 'Add to favourit' },
                { title: 'Delete Chat' },
                { title: 'Block User' },
            ],
        }

    },

    
    computed : {

        activeContact(){
            return this.$store.state.activeContact;
        },

        photoURL(){
            return this.$store.state.activeContact.photoURL;
        },

        name(){
            return this.$store.state.activeContact.displayName;
        },

        uid(){
            return this.$store.state.activeContact.userid;
        },

        description(){
            return this.$store.state.activeContact.description;
        },

    }

}
</script>