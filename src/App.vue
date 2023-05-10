<template>
  <div>
    <v-app>
      <navbar-comp />
      <router-view></router-view>
    </v-app>
  </div>
</template>
<script>
import NavbarComp from "./components/NavbarComp.vue";
export default {
  name: "App",
  components: {
    NavbarComp,
  },
};
</script>
