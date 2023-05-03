
<template>
  <DafaultLayout>
    <section>
      <div class="noche-img">
        <a href="https://orcd.co/noche" target="_blank">
          <img src="../../public/noche-cover-min.jpg">
        </a>
      </div>
    </section>
    <section>
      <SectionAgenda></SectionAgenda>
    </section>
  </DafaultLayout>
</template>

<script setup>
import SectionAgenda from '../components/SectionAgenda.vue';
import DafaultLayout from '../layouts/DefaultLayout.vue';
</script>

<style scoped>
section {
  margin: 3rem 0;
}

.noche-img {
  text-align: center;
}

a img {
  width: 100%;
  max-width: 600px;
}
</style>