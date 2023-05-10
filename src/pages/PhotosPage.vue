<template>
  <div>
    <v-row>
      <photo-item v-for="photo in photos" :key="photo.id" :photo="photo" />
    </v-row>
  </div>
</template>

<script>
import PhotoItem from "@/components/photo/PhotoItem.vue";
export default {
  components: { PhotoItem },
  data() {
    return {
      photos: [],
    };
  },
  mounted() {
    this.fetchTodo();
  },
  methods: {
    fetchTodo() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then((response) => (this.photos = response.data));
    },
  },
};
</script>

<style></style>
