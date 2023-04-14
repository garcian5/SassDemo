<script lang="ts">
  export default { name: 'Slide' }
</script>

<script setup lang="ts">
  import { computed, onMounted, reactive, ref } from 'vue';
  import { SlideData } from '../data/schema/SlideData';

  const props = defineProps({
    slide: SlideData
  });

  const slide: SlideData = reactive<SlideData>({
    title: "New Title",
    bodyHTML: "<p>New Body</p>",
    imgs: [],
    bodyIsHTML: true,
    bodyText: null,
    bodyList: []
  });

  const clickedDiv = ref<number | 0>(0);;

  //#region methods
  const setSlideData = () => {
    if (props.slide) {
      slide.title = props.slide.title;
      slide.bodyHTML = props.slide.bodyHTML;
      slide.imgs = props.slide.imgs;
      slide.bodyIsHTML = props.slide.bodyIsHTML
      slide.bodyText = props.slide.bodyText;
      slide.bodyList = props.slide.bodyList;
    }
  }
  //#endregion

  const selectDiv = (num: number) => {
    clickedDiv.value = num;
    console.warn("hello", clickedDiv)
  }

  onMounted(setSlideData);
  defineExpose({setSlideData});
</script>

<template>
  <div class="slide w100 h100">
    <div class="slide-title">{{ slide.title }}</div>

    <!-- body will need to be embeded as an html element -->
    <div class="slide-body" v-if="slide.bodyIsHTML">
      <div v-html="slide.bodyHTML"></div>
    </div>
    <div class="slide-body" v-else>
      <p class="slide-text" v-if="slide.bodyText">{{ slide.bodyText }}</p>

      <ul class="slide-text" v-if="slide.bodyList.length > 0">
        <li v-for="(listItem, index) in slide.bodyList" :key="listItem.parent + index">
          {{ listItem.parent }}
          <ul v-if="listItem.children.length > 0">
            <li v-for="(childItem, index) in listItem.children" :key="childItem + index">{{ childItem }}</li>
          </ul>
        </li>
      </ul>
    </div>

    <div>
      <img v-for="(img, index) in slide.imgs" :src="img" alt="" :key="img + index" />
    </div>
  </div>

  <div @click="selectDiv(1)" :class="{'switchFilter': clickedDiv == 1}">1</div>
  <div @click="selectDiv(2)" :class="{'switchFilter': clickedDiv == 2}">2</div>

  <h3 class="hover">Hover Me</h3>
  <img src="https://picsum.photos/id/1022/200/200" alt="a nighty sky">
</template>

<style lang="scss" scoped>
@import '../assets/mixin.scss';
@import '../assets/variables.scss';
.slide {
  padding: 20px;
  @include bgImgConfig(url(/src/assets/imgs/bg2.jpg), fixed);
}
.slide-title {
  text-align: center;
  @include textFormats(65px, 700);
  @include gradientFont(linear-gradient(45deg, #1c3aaf, #53af42), #78f392);
}

.slide-body {
  border: 2px solid $tertiary-color;
  border-radius: 20px;
  min-height: calc(100vh - 160px);
  margin-top: 20px;
  .slide-text {
    @include textFormats(20px, 500, $dark);
    margin: 30px;
    li {
      margin: 10px auto;
    }
  }
}


/* https://freefrontend.com/css-border-animations/ */
/* https://codepen.io/t_afif/pen/rNJegrz */
.switchFilter {
  border: 8px solid;
  border-image: repeating-linear-gradient(135deg,#118617 0 10px,#118617 0 20px,#118617 0 30px) 2;
  -webkit-mask: 
    conic-gradient(from 180deg at top 4px right 4px, #0000 90deg,#000 0)
     var(--animate,200%) 0  /200% var(--animate,4px) border-box no-repeat,
    conic-gradient(at bottom 4px left  4px,  #0000 90deg,#000 0)
     0   var(--animate,200%)/var(--animate,4px) 200% border-box no-repeat,
    linear-gradient(#000 0 0) padding-box no-repeat;
  transition: .5s, -webkit-mask-position .5s .5s;
  --animate: 100%;
  transition: .5s, -webkit-mask-size .5s .5s;
}
</style>