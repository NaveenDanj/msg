<template>

  <div style="display: flex; justify-content: center; align-items: center; height:100vh; background-color: #4eac6d; width:100%" >
    
    <v-card class="" width="550" >
        
        <div style="text-align:center" class="mt-5" >
            <h2>Welcome Back !</h2>
            <label>Sign in to continue to Msg.</label>
        </div>

        <v-form class="mt-3 pa-5">

            <v-row no-gutters>

                <v-col cols="12" md="12">
                    <v-text-field outlined dense label="Email" placeholder="Enter Email"/>
                </v-col>

                <v-col cols="12" md="12">
                    <v-text-field type="password" outlined dense label="Password" placeholder="Enter Password"/>
                    <v-checkbox
                        class="mt-2 mb-4"
                        label="Remember Me"
                        color="success"
                        value="success"
                        hide-details
                    ></v-checkbox>
                </v-col>

                    

                <v-col cols="12" md="12">
                    <v-btn style="width: 100%" color="green" class="white--text">Log In</v-btn>
                </v-col>

                <label class="mx-auto mt-5">Don't have an account ? <a> Register </a> </label>

            </v-row>

        </v-form>

    </v-card>


  </div>

</template>