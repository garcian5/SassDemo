<script setup lang="ts">
import Slides from "./components/Slides.vue";

const scrollToView = () => {
  let pageBottom = document.querySelector("#main");
  if (pageBottom) pageBottom.scrollIntoView();
}
</script>

<template>
  <header id="header">
    <div class="header-box">
      <h1>Sass in VueJs and CSS tricks</h1>
      <h4>By Nheljee Garcia</h4>
    </div>

    <div class="arrow-btn" @click="scrollToView">
      <p>&#9660;</p>
    </div>
  </header>

  <main id="main">
    <Slides/>
  </main>
</template>

<style scoped lang="scss">
  @import './assets/mixin.scss';
  @import './assets/variables.scss';

  header {
    @include bgImgConfig(url(/src/assets/imgs/bg1.jpg), fixed, linear-gradient(rgb(6 0 9 / 70%), rgb(124 8 138 / 70%)));
    height: 100vh;

    .header-box {
      max-width: 1140px;
      width: 90%;
      font-size: 30px;
      @include position(50%, auto, auto, 50%);
      transform: translate(-50%, -50%);
      color: $primary-color;
    }
  }

  h1 {
    @include gradientFont(linear-gradient(45deg, #f3ec78, #af4261));
  }

  main {
    height: 100vh;
    @include bgImgConfig(none, fixed, linear-gradient(rgb(165 132 181 / 86%), rgb(124 8 138 / 87%)));
  }
</style>
