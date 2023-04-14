<script lang="ts">
  import Slide from './Slide.vue'
  export default {
    components: { Slide },
    name: 'Slides'
  }
</script>

<script setup lang="ts">
  import { SlideData } from '../data/schema/SlideData';

  const agenda: SlideData = new SlideData({
    title: 'Agenda',
    bodyIsHTML: false,
    bodyList: [
      {
        parent: 'SASS/SCSS',
        children: ['What is SASS?', 'Nesting & Reference symbols', 'Variables & Object Variables', 'Mixins, Functions, @extends', 'Flow Control']
      },
      {
        parent: 'Different Ways to Create Grid Layouts with CSS',
        children: ["Flex vs Grids vs Tables vs Float, what really is the best way?"]
      },
      {
        parent: 'How I would have implemented the switchFilter (borders) using CSS methods',
        children: ['Definitely not a cry for help.']
      },
      {
        parent: 'The different tools/methods to test your application & Where to get CSS info/resources',
        children: []
      },
      {
        parent: 'Questions',
        children: []
      }
    ]
  })
</script>

<template>
  <slide :slide="agenda"></slide>
</template>

<style lang="scss" scoped>

</style>