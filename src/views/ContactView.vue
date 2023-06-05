<template>
    <DefaultLayout>
        <div class="contact-section text-center">
            <img class="title mb-8" src="../../public/title-contact-min.png" alt="" height="30">

            <h3>Contact me</h3>
            <p>email@email.com</p>

            <h3>Subscribe to our mailing list</h3>
            <v-form ref="mailing_form" @submit.prevent="submit">
                <v-text-field label="Name" v-model="form.name" :rules="rules.name" :counter="20"></v-text-field>
                <v-text-field label="Email" v-model="form.email" :rules="rules.email"></v-text-field>
                <v-select label="Country/Region"></v-select>
                <p v-if="message.text" :class="`mt-2 mb-4 text-${message.color}`">{{ message.text }}</p>
                <v-btn type="submit">Subsribe</v-btn>
            </v-form>
        </div>
    </DefaultLayout>
</template>

<script setup>
import { ref } from 'vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { addNewDoc } from "../services/firestore";

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
    console.log('submit');
    const { valid } = await mailing_form.value.validate();
    if (valid) {
        const timestamp = Date.now();
        console.log(timestamp);
        const newId = await addNewDoc('mailingList', { ...form.value, timestamp });
        if (newId) {
            // emptyForm();
            message.value.text = "Thank you, we've saved your information!";
            mailing_form.value.reset();
            console.log('CREATED:', newId);
            setTimeout(() => { message.value = { ...defaultMessage } }, 8000);
        } else {
            message.value.text = 'There was an error saving the concert, try again';
            message.value.color = 'red';
        }
    } else {
        message.value.text = 'Please fill up all required fields';
            message.value.color = 'red-darken-3';
    }
}


</script>

<style scoped></style>