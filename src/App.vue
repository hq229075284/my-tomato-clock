<template>
  <div class="application">
    <leftMenu/>
    <mainContent/>
  </div>
</template>

<script>
  // import Vue from 'vue'
  // import 'style/menu/menu.scss'
  import "normalize.css"
  import leftMenu from 'components/menu/menu.vue'
  import mainContent from 'components/content/index.vue'
  export default {
    components: {
      leftMenu,
      mainContent
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less" scoped>
  .application {
    display: flex;
    width: 100%;
  }
</style>

