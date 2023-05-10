<template>
  <div>
    <h1>{{ `${photo.title} ${photo.id}` }}</h1>
  </div>
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
