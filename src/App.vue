<script setup lang="ts">
</script>

<template>
  <header>
    <div class="header-box">
      <h1>Sass in VueJs and CSS tricks</h1>
      <h4>By Nheljee Garcia</h4>
    </div>
  </header>
</template>

<style scoped lang="scss">
  @import './assets/mixin.scss';
  header {
    @include bgImgConfig(url(/src/assets/imgs/bg1.jpg), fixed, linear-gradient(rgb(6 0 9 / 70%), rgb(124 8 138 / 70%)));
    height: 100vh;
  }
  .header-box {
    max-width: 1140px;
    width: 90%;
    font-size: 30px;
    @include position(50%, auto, auto, 50%);
    transform: translate(-50%, -50%);
    color: wheat;
  }

  h1 {
    @include gradientFont(linear-gradient(45deg, #f3ec78, #af4261));
  }
</style>
