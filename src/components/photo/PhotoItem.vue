<template>
  <v-col cols="4">
    <v-card>
      <v-card-title>
        {{ photo.title }}
      </v-card-title>
      <v-card-text>
        <v-img width="200" height="200" :src="photo.url" />
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style></style>
