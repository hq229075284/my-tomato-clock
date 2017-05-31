<template>
  <div class="userIcon">
    <div class="cirle-border">
      <i class="iconfont icon-user" />
    </div>
    <div class="user-name">
      <slot>User</slot>
    </div>
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
