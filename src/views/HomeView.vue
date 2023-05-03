
<template>
  <header>
    <div class="d-flex mx-3">
      <v-spacer></v-spacer>
      <!-- <h1 class="align-center">FUENSANTA</h1> -->
      <v-img src="../../public/fuensanta.png" height="4rem"></v-img>
      <v-spacer></v-spacer>
      <!-- <v-btn icon="mdi-menu" variant="text" size="x-large"></v-btn> -->
      <v-img src="../../public/menu-btn.png" height="4rem"></v-img>
    </div>
  </header>
  <main>
    <section>
      <a href="https://orcd.co/noche" target="_blank">
        <v-img src="../../public/noche-cover-min.jpg" max-width="600px" class="noche-img"></v-img>
      </a>
    </section>
    <section>
      <SectionAgenda></SectionAgenda>
    </section>
  </main>
  <footer>
    <div>
      <v-btn icon="mdi-instagram" variant="text"></v-btn>
      <v-btn icon="mdi-facebook" variant="text"></v-btn>
      <v-btn icon="mdi-youtube" variant="text"></v-btn>
      <!-- <v-btn icon="mdi-square" variant="text"></v-btn> -->

    </div>
  </footer>
</template>

<script setup>
import SectionAgenda from '../components/SectionAgenda.vue';

</script>

<style>
header {
  text-align: center;
  padding: 2rem 0;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;
}

section {
  margin: 3rem 0;
}

.noche-img {
  margin: 0 auto;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: var(--bg-color);
}
</style>