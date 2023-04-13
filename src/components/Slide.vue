<script>
  import { useSlideStore } from '@/stores/slide'
  const slideStore = useSlideStore();
  export default {
    name: 'Slide'
  }

</script>

<template>
  <div>
    <h1>{{ slideStore.title }}</h1>
    <!-- body will need to be embeded as an html element -->
  </div>
</template>

<style lang="scss" scoped>

</style>