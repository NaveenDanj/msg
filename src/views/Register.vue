<template>

  <div style="display: flex; justify-content: center; align-items: center; height:100vh; background-color: #4eac6d; width:100%" >
    
    <v-card class="" width="550" >
        
        <div style="text-align:center" class="mt-5" >
            <h2>Register Account</h2>
            <label>Get your free Msg account now.</label>
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

        <v-form ref="registerForm" class="mt-0 pa-5">

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
                        v-model="form.displayName"
                        outlined
                        dense 
                        label="Display Name" 
                        placeholder="Enter Display Name"
                        :rules="[
                            (v) => !!v || 'Display Name is required'
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
                    <div class="pa-5">
                        <label>By registering you agree to the Msg Terms of Use</label>
                    </div>
                </v-col>

                    

                <v-col cols="12" md="12">
                    <v-btn @click="handleRegister" style="width: 100%" color="green" class="white--text">Register</v-btn>
                </v-col>

                <label class="mx-auto mt-5">Already have an account ? <router-link to="/login">Login</router-link> </label>

            </v-row>

        </v-form>

    </v-card>


  </div>

</template>

<script>

import { getAuth, createUserWithEmailAndPassword , updateProfile  } from "firebase/auth";
import { doc, setDoc , getFirestore} from "firebase/firestore"; 

export default {
    
    data(){

        return {
            form : {
                email : '',
                displayName : '',
                password : '',
            },

            errorString : null

        }

    },

    methods : {

        handleRegister(){

            const db = getFirestore();

            this.errorString = null;

            if(!this.$refs.registerForm.validate()){
                return;
            }

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
            .then((userCredential) => {

                const user = userCredential.user;

                updateProfile(auth.currentUser, {
                    displayName: this.form.displayName
                }).then(async () => {

                    await setDoc(doc(db, "users", user.uid), {
                        displayName: this.form.displayName,
                        userid: user.uid,
                        email : this.form.email,
                        description: ""
                    });



                    this.$store.commit('setIsLoggedIn' , true);
                    this.$store.commit('setCurrentUser' , user);
                    this.$router.push('/');

                }).catch((error) => {
                    const errorMessage = error.message;
                    this.errorString = errorMessage;
                });
                
            })
            .catch((error) => {
                const errorMessage = error.message;
                this.errorString = errorMessage;
            });

        }

    }

}
</script>