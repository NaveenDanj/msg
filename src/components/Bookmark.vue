<template>
    
    <v-container style="height: 100vh; overflow-y: scroll">

        <div width="100%">
            <h2>Bookmark</h2>
        </div>

        <div class="mt-6 ">
            
            <div v-for="(i , index) in [1,2,3,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,55,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]" :key="index" class="d-flex justify-space-around pa-2" style="border-bottom-width: 0.1px; border-bottom-color:gray; border-bottom-style:solid " >
                
                <div class="my-auto">
                    <v-icon>mdi-file-document</v-icon>
                </div>

                <div class="my-auto">
                    <label class="font-weight-medium" style="font-size : 15px;">design-phase-1-appro</label><br/>
                    <label style="font-size : 12px;">12.5 MB</label>
                </div>

                <div class="my-auto">
                    <v-btn fab x-small text>
                        <v-icon>mdi-dots-vertical </v-icon>
                    </v-btn>
                </div>


            </div>

           

        </div>

    </v-container>


</template>