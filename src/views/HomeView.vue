
<template>
  <DafaultLayout>
    <div class="noche-img">
      <a href="https://orcd.co/noche" target="_blank">
        <img src="../../public/noche-cover-min.jpg">
      </a>
    </div>
  </DafaultLayout>
</template>

<script setup>
import DafaultLayout from '../layouts/DefaultLayout.vue';
</script>

<style scoped>
.noche-img {
  margin: 3rem 0;
  text-align: center;
}

a img {
  width: 100%;
  max-width: 600px;
}
</style>