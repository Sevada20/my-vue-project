<template>
  <v-container fluid>
    <v-app-bar color="orange" dense dark>
      <v-spacer />
      <v-btn outlined class="ml-3">
        <router-link to="/">Header</router-link>
      </v-btn>
      <v-btn outlined class="ml-3">
        <router-link to="/photos">Photos</router-link>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
