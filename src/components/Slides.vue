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
          children: ['What is SASS?', 'Nesting', 'Variables', 'Mixins, Functions, @extend', 'Flow Control']
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
      ],
      links: [
        {
          linkName: 'Sass Documentation Link',
          href: 'https://sass-lang.com/'
        }
      ]
    }),

    new SlideData({
      title: 'Nesting',
      bodyIsHTML: false,
      bodyText: `When dealing with a lot of custom styling where keeping track of your CSS classes gets difficult, Nesting becomes your best friend!`,
      bodyList: [
        {
          parent: 'Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML.',
          children: []
        },
        {
          parent: 'Rather than having to repeat the same selectors over and over again, you can write one style rules inside another. Sass will automatically combine the outer rule’s selector with the inner rule’s.',
          children: []
        },
        {
          parent: 'Be careful with too much nesting!',
          children: []
        }
      ],
      imgs: ['public/imgs/nest.jpg', 'public/imgs/nest2.jpg']
    }),

    new SlideData({
      title: 'Variables',
      bodyIsHTML: false,
      bodyText: `Sass variables are one of the most useful tools. Variables make it possible to reduce repetition, do complex math, configure libraries, and much more.`,
      bodyList: [
        {
          parent: 'Although CSS has variables now, their current compatibility across browsers is about 90%.',
          children: []
        },
        {
          parent: 'That may sound like a good percentage but what makes SASS variables a little better is that they don’t compile into CSS variables but rather, they compile to the actual value.',
          children: []
        },
        {
          parent: 'Sass variables are imperative, which means if you use a variable and then change its value, the earlier use will stay the same. CSS variables are declarative, which means if you change the value, it’ll affect both earlier uses and later uses.',
          children: []
        }
      ]
    }),
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