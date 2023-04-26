<template>
    <v-dialog v-model="isOpen" width="auto">
        <v-card class="text-center py-6">
            <v-card-text>{{ question }}</v-card-text>
            <v-card-actions >
                <v-spacer></v-spacer>
                <v-btn  @click="cancel">Cancel</v-btn>
                <v-btn color="lime-darken-4" @click="agree" variant="elevated">Agree</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { ref } from 'vue';


export default {
    setup() {
        const isOpen = ref(false);
        const question = ref('');
        let resolveVal = ref(null)

        function open(text) {
            question.value = text;
            isOpen.value = true
            return new Promise((resolve) => {
				resolveVal.value = resolve;
			});
        }

        function agree() {
			resolveVal.value(true);
			isOpen.value = false;
		}

        function cancel() {
			resolveVal.value(false);
			isOpen.value = false;
		}
        return { isOpen, question, open, agree, cancel };
    }
}
</script>