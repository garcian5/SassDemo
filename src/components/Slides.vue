<script lang="ts">
  import Slide from './Slide.vue'
  export default {
    components: { Slide },
    name: 'Slides'
  }
</script>

<script setup lang="ts">
  import { SlideData } from '../data/schema/SlideData';
  import { ref } from 'vue';
  import { watch } from 'vue';

  const currentSlide = ref<number | 0>(0);

  const nextSlide = () => {
    const slideNum = currentSlide.value+1;
    if (slideNum >= slides.length) {
      currentSlide.value = 0;
    } else {
      currentSlide.value = slideNum;
    }
  }

  const prevSlide = () => {
    const slideNum = currentSlide.value-1;
    if (slideNum < 0) {
      currentSlide.value = 0;
    } else {
      currentSlide.value = slideNum;
    }
  }


  const slides: SlideData[] = [
    new SlideData({
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
    }),
  
    new SlideData({
      title: 'SASS/SCSS',
      subTitle: 'What is SASS',
      bodyIsHTML: false,
      bodyText: `SASS stands for Syntactically Awesome Stylesheet. It is a superset of CSS which means all valid CSS is also valid SCSS.
      
      Fun Fact: Sass has two syntaxes`,
      bodyList: [
        {
          parent: 'The SCSS syntax (.scss)',
          children: ['Most commonly used.', 'Think: Javascript syntax']
        },
        {
          parent: 'The SASS syntax (.sass)',
          children: ['A rarely used syntax.', 'Uses indentation rather than curly braces to nest statements, and newlines instead of semicolons to separate them.', 'Think: Python syntax']
        }
      ]
    })

  ];
</script>

<template>
  <!-- <div class="slides-lst h100">
    <slide v-for="(slide, index) in slides" :key="index" :slide="slide"></slide>
  </div> -->
  <!-- <div class="slide-btns">
    <div class="prev" @click="prevSlide">&#60;</div>
    <div class="next" @click="nextSlide">&#62;</div>
  </div>
  <slide :slide="slides[currentSlide]"></slide> -->
  <slide v-for="(slide, index) in slides" :key="index" :slide="slide" :id="index"></slide>
</template>

<style lang="scss" scoped>
</style>