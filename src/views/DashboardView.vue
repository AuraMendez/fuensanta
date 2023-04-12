<template>
  <div>
    <h1>This is a dashboard page </h1>
    <v-card width="400">
      <template v-slot:title>
        This is a title
      </template>

      <template v-slot:subtitle>
        This is a subtitle
      </template>

      <template v-slot:text>
        This is content
      </template>
    </v-card>
  </div>
</template>

<style></style>
