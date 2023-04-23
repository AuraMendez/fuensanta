
<template>
    <v-btn @click="openForm">New concert</v-btn>
    <p>all concerts here</p>
    <ConcertForm ref="concert_form_component"></ConcertForm>
</template>

<script>
import { ref } from "vue";
import ConcertForm from "./ConcertForm.vue";

export default {
    components: {
        ConcertForm
    },
    setup() {
        const concert_form_component = ref();
        function openForm() {
            concert_form_component.value.open();
        }
        return { concert_form_component, openForm }
    },
}
</script>

<style scoped>
/* Desktop */
@media only screen and (min-width: 768px) {}
</style>
