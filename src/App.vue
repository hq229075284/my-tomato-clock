<template>
  <div class="application">
    <startAnimate/>
    <leftMenu/>
    <mainContent/>
  </div>
</template>

<script>
// import Vue from 'vue'
// import 'style/menu/menu.scss'
import 'normalize.css'
import startAnimate from './start.vue'
import leftMenu from 'components/menu/menu.vue'
import mainContent from 'components/content/index.vue'
export default {
  components: {
    leftMenu,
    mainContent,
    startAnimate
  },
  data() {
    return {}
  }
}
</script>

<style lang="less">
.application {
  display: flex;
  width: 100%;
}
</style>

