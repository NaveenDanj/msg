<template>
  <v-expansion-panel-content class="pa-3">
    <div
      class="d-flex justify-space-between pa-2"
      style="
        border-bottom-width: 1px;
        border-bottom-color: gray;
        border-bottom-style: solid;
      "
    >
      <label class="font-weight-medium">Description</label>

      <div style="width: 150px">
        <v-select
          outlined
          dense
          :items="descriptionList"
          @input="handleChangeDescription"
          v-model="showDescription"
          item-text="name"
          item-value="value"
        />
      </div>
    </div>

    <div
      class="d-flex justify-space-between pa-2 my-auto"
      style="
        border-bottom-width: 1px;
        border-bottom-color: gray;
        border-bottom-style: solid;
      "
    >
      <label class="font-weight-medium my-auto">Active Status</label>
      <v-switch @change="setActiveState" v-model="activeStatus" outlined dense />
    </div>

    <div
      class="d-flex justify-space-between pa-2 my-auto"
      style="
        border-bottom-width: 1px;
        border-bottom-color: gray;
        border-bottom-style: solid;
      "
    >
      <label class="font-weight-medium my-auto">Read Receipt</label>
      <v-switch @change="setReadReceipt" v-model="readReceipt" outlined dense />
    </div>

    <!-- <div
      class="d-flex justify-space-between pa-2"
      style="
        border-bottom-width: 1px;
        border-bottom-color: gray;
        border-bottom-style: solid;
      "
    >
      <label class="font-weight-medium">Group Invite</label>

      <div style="width: 150px">
        <v-select
          outlined
          dense
          :items="descriptionList"
          value="Everyone"
          item-text="name"
          item-value="value"
        />
      </div>
    </div> -->
  </v-expansion-panel-content>
</template>


<script>

import { doc, getFirestore , updateDoc , getDoc } from "firebase/firestore";


export default {

    created(){

        this.getDescription();

    },

    data(){
        return {
            showDescription : true,
            descriptionList : [{ name : 'Everyone' , value : true}, {name : 'Nobody' , value : false}],

            activeStatus : true,
            readReceipt : false
        }
    },
    

    methods : {

        async getDescription(){
            let db = getFirestore();
            const docRef = doc(db, "users", this.$store.state.currentUser.uid);
            try{
                const docSnap = await getDoc(docRef);
                this.showDescription = docSnap.data().show_description;
                this.activeStatus = docSnap.data().lastSeen;
                this.readReceipt = docSnap.data().read_receipt;
            }catch(e){
                console.log(e);
            }
        },

        async handleChangeDescription() {
            let db = getFirestore();
            const userRef = doc(db, "users", this.$store.state.currentUser.uid);

            try{
                await updateDoc(userRef, {
                    show_description: this.showDescription
                });

                const docRef = doc(db, "users", this.$store.state.currentUser.uid);
                const docSnap = await getDoc(docRef);

                this.$store.commit('setCurrentUserData' , docSnap.data());


            }catch(err){
                console.log(err);
            }

        },

        async setActiveState(){

            let db = getFirestore();
            const userRef = doc(db, "users", this.$store.state.currentUser.uid);

            try{
                await updateDoc(userRef, {
                    lastSeen: this.activeStatus
                });

                const docRef = doc(db, "users", this.$store.state.currentUser.uid);
                const docSnap = await getDoc(docRef);

                this.$store.commit('setCurrentUserData' , docSnap.data());


            }catch(err){
                console.log(err);
            }

        },

        async setReadReceipt(){

            let db = getFirestore();
            const userRef = doc(db, "users", this.$store.state.currentUser.uid);

            try{
                await updateDoc(userRef, {
                    read_receipt: this.readReceipt
                });

                const docRef = doc(db, "users", this.$store.state.currentUser.uid);
                const docSnap = await getDoc(docRef);

                this.$store.commit('setCurrentUserData' , docSnap.data());


            }catch(err){
                console.log(err);
            }

        }

    }

}
</script>