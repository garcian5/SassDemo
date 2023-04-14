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
          parent: 'Different Ways to Create Columns with CSS',
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
      ],
	  imgs: ['public/imgs/variables.png']
    }),

    new SlideData({
      title: '"At-Rules"',
      bodyIsHTML: false,
      bodyText: 'Some of the most useful "At-Rules" are:',
      bodyList: [
        {
          parent: 'Mixins = allows you to define styles that can be re-used throughout your stylesheet.',
          children: ['@Mixin = the directive lets you create CSS code that is to be reused.', '@Include = directive is created to let you use (include) the mixin.', 'Kinda has the same concept as Mixins in Vue.']
        },
        {
          parent: 'Functions = allows you to define complex operations on SassScript values that you can re-use throughout your stylesheet.',
          children: ['They make it easy to abstract out common formulas and behaviors in a readable way', 'Mixins and functions are very similar but remember that functions should be used to compute values and return values while mixins should define styles.']
        },
        {
          parent: 'Extension = allows you share a set of CSS properties from one selector to another.',
          children: ['This is useful if you have almost identically styled elements that only differ in some small details.']
        }
      ],
	  imgs: ['public/imgs/mixin.png', 'public/imgs/extend.png']
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
      ],
	  imgs: ['public/imgs/flow.png']
    }),
	
    new SlideData({
      title: 'Creating Columns in CSS',
      bodyIsHTML: false,
	  smallerImgs: true,
	  subTitle: 'Flex vs Grids vs Tables vs Float, what really is the best way?',
      bodyText: `The answer is: It depends. (It's Flex)`,
	  imgs: ['public/imgs/flex.jpg', 'public/imgs/grid.png', 'public/imgs/table.jpg', 'public/imgs/float.jpg']
    }),
	
    new SlideData({
      title: "Columns in CSS cont'd",
	  subTitle: 'Why should you use...',
      bodyIsHTML: false,
	  bodyList: [
        {
          parent: 'Flex? Because it is a one-dimensional layout system that we can use to create a row or a column axis layout.',
          children: ['It makes life so much easier when styling responsive/dynamic pages.', 'Could use instead of a float property that is both difficult to implement and maintain.']
        },
        {
          parent: 'Grid? Because it is a two-dimensional layout system, we can work with rows and columns together.',
          children: ['This means that it opens a lot of different possibilities to build more complex and organized design systems, without having to fall back to some “hacky ways” that were being used in the past.']
        },
        {
          parent: 'Table? Because it is a layout designed specifically to accomodate Table design needs.',
          children: ['This is very useful when rendering data in a table.', 'Display: table does not work on IE6 or 7 so it\'s best to use the HTML element <table> since they\'re practically the same idea.']
        },
        {
          parent: 'Float? Because you might want to have an element to be positioned either to the left or right of its container.',
          children: ['This allows text and inline elements to wrap around it.']
        }
      ],
    }),
	
    new SlideData({
      title: 'Flex vs Grids vs Tables vs Float',
      bodyIsHTML: false,
	  smallerImgs: true,
	  showColumnDemo: true
    }),

    new SlideData({
      title: 'switchFilter in CSS',
      bodyIsHTML: false,
      bodyText: `Generating the switchFilter (animated border) in the Legacy system is dark and complex. Today, I will try to replicate the simple animation on its border with CSS (and maybe some dark magic)`,
      showSwitchFilter: true,
	  imgs: ['public/imgs/cat.jpg']
    }),

    new SlideData({
      title: 'Tools to test your CSS',
	  subTitle: 'The different tools/methods to test your application & Where to get CSS info/resources',
      bodyIsHTML: false,
      bodyList: [
        {
          parent: 'Cypress => the Advanced Editor & E-sign team uses this for e2e testing.',
          children: ['This can be installed within your Vue project.']
        },
        {
          parent: 'TightVnc => for iOS device testing',
          children: ['Can be installed through KACE']
        },
        {
          parent: 'Google Chrome/Other browser dev tools',
          children: ['CTRL+SHIFT+J to open devtools', 'Or right click + inspect devices']
        },
        {
          parent: 'Chrome #inspect/devices => for Android testing',
          children: ['This will allow you to connect your mobile device to your computer and inspect/debug your website on an actual device.']
        },
        {
          parent: 'Chrome Dev tools Local Override method',
          children: ['Awesome option on devtools when you want to make changes to the Source/Elements but want the change to remain even after refresh.']
        },
        {
          parent: 'W3Schools, Stackoverflow, Sass Doc, & most importantly: Google search engine are your best friends when it comes to writing CSS',
          children: []
        }
      ],
	  links: [
		{
			linkName: 'Remote Debug Android Devices',
			href: 'https://developer.chrome.com/docs/devtools/remote-debugging/'
		},
		{
			linkName: 'Local Overrides',
			href: 'https://developer.chrome.com/blog/new-in-devtools-65/#overrides'
		},
	  ]
    }),
	
    new SlideData({
      title: 'Questions!',
	  subTitle: 'Any Question, Comments or Concerns?',
      bodyIsHTML: false,
	  imgs: ['public/imgs/cat-question.jpg']
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