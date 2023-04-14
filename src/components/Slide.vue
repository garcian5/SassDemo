<script lang="ts">
  export default { name: 'Slide' }
</script>

<script setup lang="ts">
  import { computed, onMounted, reactive, ref } from 'vue';
  import { SlideData } from '../data/schema/SlideData';

  const props = defineProps({
    slide: SlideData,
    id: {type: Number, default: 0}
  });

  const slide: SlideData = reactive<SlideData>({
    title: "New Title",
    bodyHTML: "<p>New Body</p>",
    imgs: [],
    bodyIsHTML: true,
    bodyText: null,
    bodyList: [],
    subTitle: null,
    links: [],
    smallText: null,
    showSwitchFilter: false,
	smallerImgs: false,
	showColumnDemo: false
  });

  const clickedDiv = ref<number | 0>(0);

  //#region methods
  const setSlideData = () => {
    if (props.slide) {
      slide.title = props.slide.title;
      slide.subTitle = props.slide.subTitle;
      slide.bodyHTML = props.slide.bodyHTML;
      slide.imgs = props.slide.imgs;
      slide.bodyIsHTML = props.slide.bodyIsHTML
      slide.bodyText = props.slide.bodyText;
      slide.bodyList = props.slide.bodyList;
      slide.links = props.slide.links;
      slide.smallText = props.slide.smallText;
      slide.showSwitchFilter = props.slide.showSwitchFilter;
      slide.smallerImgs = props.slide.smallerImgs;
      slide.showColumnDemo = props.slide.showColumnDemo;
    }
  }
  //#endregion

  const selectDiv = (num: number) => {
	  setTimeout(() => {
		clickedDiv.value = 0;		
	}, 500);
	setTimeout(() => {
		clickedDiv.value = num;		
	}, 600);
  }

  
  const scrollToView = (id: number) => {
    const pageId = "#slide-" + id;
    let pageBottom = document.querySelector(pageId);
    if (pageBottom) pageBottom.scrollIntoView();
  }

  const getPic = (index: number) => {
    return '../assets/' + slide.imgs[index] + '.png';
  }

  onMounted(setSlideData);
  defineExpose({setSlideData});
</script>

<template>
  <div class="slide-btns">
    <div class="arrow-btn prev" @click="scrollToView(props.id-1)"><p>&#9650;</p></div>
    <div class="arrow-btn next" @click="scrollToView(props.id+1)"><p>&#9660;</p></div>
  </div>

  <div class="slide w100 h100" :id="'slide-' + props.id">
    <div class="slide-title">{{ slide.title }}</div>

    <!-- body will need to be embeded as an html element -->
    <div class="slide-body" v-if="slide.bodyIsHTML">
      <div v-html="slide.bodyHTML"></div>
    </div>
    <div class="slide-body" v-else>
      <div class="slide-subtitle" v-if="slide.subTitle">{{ slide.subTitle }}</div>
      <small class="slide-small" v-if="slide.smallText">{{ slide.smallText }}</small>

      <p class="slide-text" v-if="slide.bodyText">{{ slide.bodyText }}</p>

      <ul class="slide-text" v-if="slide.bodyList.length > 0">
        <li v-for="(listItem, index) in slide.bodyList" :key="listItem.parent + index">
          {{ listItem.parent }}
          <ul v-if="listItem.children.length > 0">
            <li v-for="(childItem, index) in listItem.children" :key="childItem + index">{{ childItem }}</li>
          </ul>
        </li>
      </ul>

      <div class="container" v-if="slide.showSwitchFilter">
        <div class="box" @click="selectDiv(1)" :class="{'switchFilter': clickedDiv == 1}">1</div>
        <div class="box" @click="selectDiv(2)" :class="{'switchFilter': clickedDiv == 2}">2</div>
      </div>

      <div class="column-demo" v-if="slide.showColumnDemo">
        <div class="col-title">Flexbox Implementation:</div>
		<div class="flex">
			<div class="f-child">Flex 1</div>
			<div class="f-child">Flex 2</div>
			<div class="f-child">Flex 3</div>
		</div>

		<div class="col-title">Grid Implementation:</div>
		<div class="grid">
			<div class="g-child">Grid 1</div>
			<div class="g-child">Grid 2</div>
			<div class="g-child">Grid 3</div>
			<div class="g-child">Grid 4</div>
		</div>

		<div class="col-title">Table Implementation:</div>
		<div id="table">
			<div class="tr">
				<div class="td">Row 1 Col 1</div>
				<div class="td">Row 1 Col 2</div>
			</div>
			<div class="tr">
				<div class="td">Row 2 Col 1</div>
				<div class="td">Row 2 Col 2</div>
			</div>
		</div>

		<div class="col-title">Float Implementation:</div>
		<div class="wMarg">
			<div class="l cell-style float-item">Div 1</div>
			<div class="r cell-style float-item">Div 3</div>

			<div class="cell-style float-item">Div 2</div>
		</div>
      </div>
      
      <div class="imgs" v-if="slide.imgs.length > 0">
        <img v-for="(img, index) in slide.imgs" :src="img" alt="" :key="img + index" :class="{'mH200': slide.smallerImgs}" />
      </div>
    </div>

    <div class="links" v-if="slide.links.length > 0">
	  <div v-for="(link, index) in slide.links" :key="index">
      	<a  :href="link.href" target="_blank" rel="noopener noreferrer">{{ link.linkName }}</a>
	  </div>
    </div>
  </div>

  <!-- <div @click="selectDiv(1)" :class="{'switchFilter': clickedDiv == 1}">1</div>
  <div @click="selectDiv(2)" :class="{'switchFilter': clickedDiv == 2}">2</div>

  <h3 class="hover">Hover Me</h3>
  <img src="https://picsum.photos/id/1022/200/200" alt="a nighty sky"> -->
</template>

<style lang="scss" scoped>
@import '../assets/mixin.scss';
@import '../assets/variables.scss';

.links {
	position: relative;
	z-index: 900;
}

.slide {
  padding: 20px;
  @include bgImgConfig(url(/src/assets/imgs/bg4.jpg), fixed);
}
.slide-title {
  text-align: center;
  @include textFormats(65px, "bold");
  @include gradientFont(linear-gradient(45deg, #1c3aaf, #53af42), #78f392);
}

.slide-subtitle {
  @include textFormats(30px, "semibold");
  color: $secondary-color;
  text-align: center;
  margin-top: 10px;
}
.slide-small {
  @include textFormats(20px, "regular");
}

.slide-body {
  border: 2px solid $tertiary-color;
  border-radius: 20px;
  min-height: calc(100vh - 180px);
  margin-top: 20px;
  .slide-text {
    @include textFormats(20px, "medium", $dark);
    margin: 30px;
    white-space: pre-line;
    li {
      margin: 10px auto;
    }
  }
}

.col-title {
	text-align: center;
	margin: 30px auto 10px auto;
	@include textFormats(25px, "bold", $dark);
}

.imgs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  img {
    max-height: 300px;
  }
}

.container {
  position: relative;
  z-index: 900;
  display: flex;
  gap: 20px;
  width: 90%;
  margin: 30px auto;
  .box {
    flex: 1;
    padding: 100px 0;
    background: $primary-color;
    text-align: center;
    cursor: pointer;
  }
}

/* https://freefrontend.com/css-border-animations/ */
/* https://codepen.io/t_afif/pen/rNJegrz */
.switchFilter {
  border: 8px solid;
  border-image: repeating-linear-gradient(135deg,#118617 0 10px,#118617 0 20px,#118617 0 30px) 2;
  -webkit-mask: 
    conic-gradient(from 180deg at top 4px right 4px, #0000 90deg,#000 0)
     var(--animate,300%) 0  /300% var(--animate,4px) border-box no-repeat,
    conic-gradient(at bottom 4px left  4px,  #0000 90deg,#000 0)
     0   var(--animate,300%)/var(--animate,4px) 300% border-box no-repeat,
    linear-gradient(#000 0 0) padding-box no-repeat;
  transition: .3s, -webkit-mask-position .3s .3s;
  --animate: 100%;
  transition: .3s, -webkit-mask-size .3s .3s;
}

.slide-btns {
  position: absolute;
  height: 100%;
  width: 100%;
}
.btn-def {
  @include textFormats(40px, "semibold");
  transform: translateX(-50%);
  z-index: 10;
  cursor: pointer;
  opacity: .05;
  box-shadow: none;
  &:hover {
    color: $dark;
    transition: all .4s;
    opacity: .8;
  }
}
.prev {
  @include position(10px, auto, auto, 50%);
  @extend .btn-def;
}
.next {
  @include position(auto, auto, 10px, 50%);
  @extend .btn-def;
}
</style>