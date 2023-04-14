<script lang="ts">
  export default { name: 'Slide' }
</script>

<script setup lang="ts">
  import { onMounted, reactive } from 'vue';
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
</style>