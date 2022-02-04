<template>
    
    <v-container style="height: 100vh; overflow-y: scroll">

        <div width="100%">
            <h2>Bookmark</h2>
        </div>

        <div class="mt-6 ">
            
            <!-- <div v-for="(item , index) in bookmarkList" :key="index" class="d-flex justify-space-around pa-2" style="border-bottom-width: 0.1px; border-bottom-color:gray; border-bottom-style:solid " >
                

                <div class="my-auto">
                    <v-icon>mdi-android-messages </v-icon>
                </div>

                <div class="my-auto">
                    <label class="font-weight-medium" style="font-size : 15px;">{{ formatContent(item.content) }}</label><br/>
                    <label style="font-size : 12px;">12.5 MB</label>
                </div>

                <div class="my-auto">
                    <v-btn fab x-small text>
                        <v-icon>mdi-dots-vertical </v-icon>
                    </v-btn>
                </div>


            </div> -->

            <v-list-item
                v-for="(item , index) in bookmarkList"
                :key="index"
                link
                class="ma-0"
            >

                <v-list-item-icon>
                    <v-icon>mdi-android-messages </v-icon>
                    <!-- <img
                        :src="item.photoURL"
                        style="width: 30px; height: 30px; border-radius: 15px"
                    /> -->
                </v-list-item-icon>

                <v-list-item-title class="my-auto ml-0">
                    {{ formatContent(item.content) }}
                </v-list-item-title>

            </v-list-item>

           

        </div>

    </v-container>


</template>

<script>
import {getFirestore , collection , onSnapshot, orderBy, query  } from "firebase/firestore";



export default {

    created(){
        this.getBookmarks();
    },
    
    data(){
        return {
            bookmarkList : []
        }
    },

    methods : {

        formatContent(string){

            if(string.length > 20){
                return string.substring(0,20) + "...";
            }else{
                return string;
            }

        },

        getBookmarks(){

            try{
                const db = getFirestore();
                const q = query( collection(db, "bookmarks", this.$store.state.currentUser.uid , 'messages') , orderBy('timeStamp') );

                onSnapshot(q , (messageSnap) => {
                    messageSnap.forEach((doc) => {
                        let document = doc.data();
                        document.id = doc.id;
                        this.bookmarkList.push(document);
                    })
                });
                
            }catch(e){
                console.log(e);
            }

        }
    }

}
</script>