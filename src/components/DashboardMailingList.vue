<template>
    <v-list>
        <v-list-item title="MAILING LIST"></v-list-item>
        <v-list-item>
            <div class="mailing-item">
                <p>DATE</p>
                <p>NAME</p>
                <p>EMAIL</p>
                <p>COUNTRY</p>
            </div>
        </v-list-item>
        <v-list-item v-for="(item) in mailingListStore.mailingList" :key="item.id">
            <div class="mailing-item">
                <p>{{ formatDate(item.timestamp) }}</p>
                <p>{{ item.name }}</p>
                <p>{{ item.email }}</p>
                <p>{{ item.country }}</p>
            </div>
        </v-list-item>
    </v-list>
</template>

<script>
import { useMailingListStore } from "../stores/mailingList";

export default {
    setup() {
        const mailingListStore = useMailingListStore();
        mailingListStore.getMailingList()

        return { mailingListStore }
    },
    methods: {
        formatDate(timestamp) {
            return new Date(timestamp).toLocaleDateString('en-GB');
        }
    }
}
</script>

<style>
.mailing-item {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr;
}

/* .mailing-item>.item-name {} */
</style>