<template>
    <DefaultLayout>
        <div class="contact-section text-center">
            <img class="title mb-8" src="../../public/title-contact-min.png" alt="" height="30">

            <!-- <h3>Contact me</h3> -->
            <p class="mail">email@email.com</p>

            <div class="mailing-list mt-12">
                <h3>Subscribe to my mailing list</h3>
                <v-form ref="mailing_form" @submit.prevent="submit">
                    <v-text-field label="Name" v-model="form.name" :rules="rules.name" :counter="20"></v-text-field>
                    <v-text-field label="Email" v-model="form.email" :rules="rules.email"></v-text-field>
                    <v-select label="Country/Region" v-model="form.country" :items="countries" item-title="name"
                        item-value="code"></v-select>
                    <p v-if="message.text" :class="`mt-2 mb-4 text-${message.color}`">{{ message.text }}</p>
                    <v-btn type="submit">Subscribe</v-btn>
                </v-form>
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup>
import { ref } from 'vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { addNewDoc } from "../services/firestore";
import countries from "../assets/countries.json";

const rules = {
    name: [
        value => {
            if (value) return true
            return 'Name is requred.'
        },
        value => {
            if (value?.length <= 20) return true
            return 'Name must be less than 20 characters.'
        },
    ],
    email: [
        value => {
            if (value) return true
            return 'E-mail is requred.'
        },
        value => {
            if (/.+@.+\..+/.test(value)) return true
            return 'E-mail must be valid.'
        },
    ],
};

const mailing_form = ref();

const form = ref({
    email: '',
    name: '',
    country: '',
});

const defaultMessage = {
    text: '',
    color: 'black'
};
const message = ref({ ...defaultMessage });
async function submit() {
    const { valid } = await mailing_form.value.validate();
    if (valid) {
        const timestamp = Date.now();
        const newId = await addNewDoc('mailingList', { ...form.value, timestamp });
        if (newId) {
            message.value.text = "Thank you, we've saved your information!";
            mailing_form.value.reset();
            setTimeout(() => { message.value = { ...defaultMessage } }, 8000);
        } else {
            message.value.text = 'There was an error saving the concert, try again';
            message.value.color = 'error';
        }
    } else {
        message.value.text = 'Please fill up all required fields';
        message.value.color = 'error';
    }
}


</script>

<style scoped>
.mail {
    font-size: 1.5rem;
}
.mailing-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 24px;
    border-radius: 8px;
    border: 1px solid black;
}

.mailing-list h3 {
    margin-bottom: 24px;
    text-transform: uppercase;
}
</style>