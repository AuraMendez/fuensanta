
<template>
  <DafaultLayout :showName="false">
    <div>
      <h1>Ensamble Grande Mexico Tour</h1>
      <h4>April 2024/Abril 2024</h4>
    </div>
  </DafaultLayout>
</template>
  
<script setup>
import DafaultLayout from '../layouts/DefaultLayout.vue';
</script>
  
<style scoped>
.img-container {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img.dibujo {
  max-height: 60vh;
  max-width: 100%;
}

img.latest-news {
  max-height: 100px;
  max-width: 100%;
}

img.latest-news:hover {
  transform: scale(103%);
}
</style>Ï