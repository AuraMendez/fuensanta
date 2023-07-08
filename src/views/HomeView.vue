
<template>
  <DafaultLayout>
    <div class="img-container">
      <img class="dibujo" src="../../public/homepage-blue-min.png" />
      <br />
      <a href="https://orcd.co/principiodelfuego"
        target="_blank">
        <img class="latest-news" src="../../public/principio-out-2-min.png" />
      </a>
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
</style>