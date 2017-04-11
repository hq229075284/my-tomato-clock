<template>
  <div class="content">
    this is content
    <span v-html="'<a>123</a>'"></span>
  </div>
</template>

<script>
  import 'style/content/index.scss'
  export default {
    data() {
      return {
        x: 1
      }
    }
  }
</script>
