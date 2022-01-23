<template>

  <div style="display: flex; justify-content: center; align-items: center; height:100vh; background-color: #4eac6d; width:100%" >
    
    <v-card class="" width="550" >
        
        <div style="text-align:center" class="mt-5" >
            <h2>Register Account</h2>
            <label>Get your free Msg account now.</label>
        </div>

        <v-form class="mt-3 pa-5">

            <v-row no-gutters>

                <v-col cols="12" md="12">
                    <v-text-field outlined dense label="Email" placeholder="Enter Email"/>
                </v-col>

                <v-col cols="12" md="12">
                    <v-text-field outlined dense label="Display Name" placeholder="Enter Display Name"/>
                </v-col>

                <v-col cols="12" md="12">
                    <v-text-field type="password" outlined dense label="Password" placeholder="Enter Password"/>
                    <div class="pa-5">
                        <label>By registering you agree to the Msg Terms of Use</label>
                    </div>
                </v-col>

                    

                <v-col cols="12" md="12">
                    <v-btn style="width: 100%" color="green" class="white--text">Register</v-btn>
                </v-col>

                <label class="mx-auto mt-5">Already have an account ? <router-link to="/">Login</router-link> </label>

            </v-row>

        </v-form>

    </v-card>


  </div>

</template>