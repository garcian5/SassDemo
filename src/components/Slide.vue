<script lang="ts">
  export default { name: 'Slide' }
</script>

<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      default: 'New Title'
    },
    body: {
      type: [String, HTMLElement],
      default: 'New Body'
    },
    imgs: {
      type: Array,
      default: []
    }
  });
</script>

<template>
  <div>
    <h1></h1>
    <!-- body will need to be embeded as an html element -->
  </div>
</template>

<style lang="scss" scoped>

</style>