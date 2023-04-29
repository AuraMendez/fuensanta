<template>
  <div class="login pa-12">
    <v-card max-width="600px" class="py-6  mt-16 mx-auto text-center">
      <v-card-title>Login</v-card-title>
      <v-form @submit.prevent="tryLogin">
        <v-card-text>
          <v-text-field type="email" label="Email" v-model="loginForm.email"></v-text-field>
          <v-text-field type="password" label="password" v-model="loginForm.password"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="lime-darken-4" variant="elevated" type="submit">Login</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { ref } from 'vue';
// import { loginUser } from '../services/authentication';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';

const auth = getAuth();

export default {
  setup() {

    const router = useRouter();

    const loginForm = ref({
      email: '',
      password: '',
    })


    function tryLogin() {
      signInWithEmailAndPassword(auth, loginForm.value.email, loginForm.value.password)
        .then(() => {
          // Signed in 
          router.push('/dashboard')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`Error with login: ${errorCode} - ${errorMessage} `);
        });
    }
    return { loginForm, tryLogin };
  }
}
</script>
<style></style>
