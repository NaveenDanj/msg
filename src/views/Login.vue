<template>

  <div style="display: flex; justify-content: center; align-items: center; height:100vh; background-color: #4eac6d; width:100%" >
    
    <v-card class="" width="550" >
        
        <div style="text-align:center" class="mt-5" >
            <h2>Welcome Back !</h2>
            <label>Sign in to continue to Msg.</label>
        </div>

        <v-alert
            class="ml-5 mr-5 mt-3 mb-0"
            dense
            outlined
            type="error"
            v-if="errorString != null"
        >
            
            <div>
                <label>{{ errorString }}</label>
            </div>

        </v-alert><br />


        <v-form ref="loginForm" class="mt-0 pa-5">

            <v-row no-gutters>

                <v-col cols="12" md="12">
                    <v-text-field 
                        v-model="form.email"
                        outlined 
                        dense 
                        label="Email" 
                        placeholder="Enter Email"
                        :rules="[
                            (v) => !!v || 'Email is required'
                        ]"
                    />
                </v-col>

                <v-col cols="12" md="12">
                    <v-text-field 
                        v-model="form.password" 
                        type="password" 
                        outlined 
                        dense 
                        label="Password" 
                        placeholder="Enter Password"
                        :rules="[
                            (v) => !!v || 'Password is required'
                        ]"
                    />

                    <v-checkbox
                        class="mt-2 mb-4"
                        label="Remember Me"
                        color="success"
                        value="success"
                        hide-details
                    ></v-checkbox>
                </v-col>

                    

                <v-col cols="12" md="12">
                    <v-btn @click="handleLogin" style="width: 100%" color="green" class="white--text">Log In</v-btn>
                </v-col>

                <label class="mx-auto mt-5">Don't have an account ? <router-link to="/register">Register </router-link> </label>
            </v-row>

        </v-form>

    </v-card>


  </div>

</template>

<script>

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
    
    data(){
        return {
            form : {
                email : '',
                password : ''
            },

            errorString : null,

        }
    },

    methods : {

        handleLogin(){

            if(!this.$refs.loginForm.validate()){
                return;
            }

            const auth = getAuth();

            signInWithEmailAndPassword(auth, this.form.email, this.form.password)
            .then((userCredential) => {
                const user = userCredential.user;
                this.$store.commit('setIsLoggedIn' , true);
                this.$store.commit('setCurrentUser' , user);
                this.$router.push('/');
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                this.errorString = errorMessage;
            });


        }


    }


}
</script>