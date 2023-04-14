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
  <div>
    <h3>{{ slide.title }}</h3>

    <!-- body will need to be embeded as an html element -->
    <template v-if="slide.bodyIsHTML">
      <div v-html="slide.bodyHTML"></div>
    </template>
    <template v-else>
      <p v-if="slide.bodyText">{{ slide.bodyText }}</p>
      <ul v-if="slide.bodyList.length > 0">
        <li v-for="(listItem, index) in slide.bodyList" :key="listItem.parent + index">
          {{ listItem.parent }}
          <ul v-if="listItem.children.length > 0">
            <li v-for="(childItem, index) in listItem.children" :key="childItem + index">{{ childItem }}</li>
          </ul>
        </li>
      </ul>
    </template>

    <div>
      <img v-for="(img, index) in slide.imgs" :src="img" alt="" :key="img + index" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>