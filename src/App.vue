<script>
import { RouterView } from 'vue-router';
import { useAgendaStore } from "@/stores/agenda"

export default {

  setup() {
    const agendaStore = useAgendaStore();
    agendaStore.getConcerts();

    return { RouterView }
  }
}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
