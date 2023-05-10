<template>
  <div>
    <photo-item v-for="photo in photos" :key="photo.id" :photo="photo" />
  </div>
</template>

<script>
import PhotoItem from "@/components/photo/PhotoItem.vue";
export default {
  components: { PhotoItem },
  data() {
    return {
      photos: [
        { id: 1, title: "photo1" },
        { id: 2, title: "photo2" },
        { id: 3, title: "photo3" },
        { id: 4, title: "photo4" },
      ],
    };
  },
};
</script>

<style></style>
