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

    <div class="go-down-btn" @click="scrollToView">
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

    .go-down-btn {
      @include position(auto, auto, 25px, 50%);
      transform: translateX(-50%);
      border: 5px solid $primary-color;
      opacity: 0.5;
      border-radius: 50%;
      box-shadow: 3px 6px 12px 7px rgba(0,0,0,0.58);
      background: #444444b8;
      width: 65px;
      height: 65px;
      cursor: pointer;
      p {
        color: $primary-color;
        font-size: 40px;
        margin: 0;
        padding-top: 4px;
        text-align: center;
      }

      &:hover {
        background: #1d1c1cb8;
        transition: all 1s;
      }
    }
  }

  h1 {
    @include gradientFont(linear-gradient(45deg, #f3ec78, #af4261));
  }

  main {
    height: 100vh;
  }
</style>
