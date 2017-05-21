<template>
  <div class="content">
    this is content
    <span v-html="'<a>123ffff</a>'"></span>
    <router-view></router-view>
  </div>
</template>

<script>
// import 'style/content/index.scss'
export default {
  data() {
    return {
      x: 1
    }
  }
}
</script>

<style>

</style>
