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
          children: ['What is SASS?', 'Nesting', 'Variables', '"At-Rules"', 'Flow Control']
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

    new SlideData({
      title: '"At-Rules"',
      bodyIsHTML: false,
      bodyText: 'Some of the most useful "At-Rules" are:',
      bodyList: [
        {
          parent: 'Mixins = allows you to define styles that can be re-used throughout your stylesheet.',
          children: ['@Mixin = the directive lets you create CSS code that is to be reused.', '@Include = directive is created to let you use (include) the mixin.']
        },
        {
          parent: 'Functions = allows you to define complex operations on SassScript values that you can re-use throughout your stylesheet.',
          children: ['They make it easy to abstract out common formulas and behaviors in a readable way', 'Mixins and functions are very similar but remember that functions should be used to compute values and return values while mixins should define styles.']
        },
        {
          parent: 'Extension = allows you share a set of CSS properties from one selector to another.',
          children: ['This is useful if you have almost identically styled elements that only differ in some small details.']
        }
      ]
    }),

    new SlideData({
      title: '"Flow Control"',
      bodyIsHTML: false,
      bodyText: `These are another set of "At-Rules" that make it possible to control whether styles get emitted, or to emit them multiple times with small variations.      
      
      They can also be used in mixins and functions to write small algorithms to make writing your Sass easier.`,
      bodyList: [
        {
          parent: '@if controls whether or not a block is evaluated.',
          children: []
        },
        {
          parent: '@each evaluates a block for each element in a list or each pair in a map.',
          children: []
        },
        {
          parent: '@for evaluates a block a certain number of times.',
          children: []
        },
        {
          parent: '@while evaluates a block until a certain condition is met.',
          children: []
        }
      ]
    }),

    new SlideData({
      title: 'switchFilter in CSS',
      bodyIsHTML: false,
      bodyText: `Generating the switchFilter (animated border) in the Legacy system is dark and complex. Today, I will try to replicate the simple animation on its border with CSS (and maybe some dark magic)`,
      showSwitchFilter: true
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