<template>
  <el-row class="tac">
    <el-menu default-active="0" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
      <user-icon></user-icon>
      <el-menu-item :index="String(index)" v-for="(o,index) in menuTitle" :key="index">
        <i :class="o.icon"></i>{{o.title}}
      </el-menu-item>
    </el-menu>
  </el-row>
</template>

<script>
import Vue from 'vue'
// import { Row, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'
import userIcon from './userIcon.vue'
import 'style/menu/menu.scss'
// Vue.use(Row)
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)
// Vue.use(MenuItemGroup)

export default {
  props: ['menuId'],
  data() {
    return {
      menuTitle: [
        { title: '番茄钟', icon: 'el-icon-time' },
        { title: '统计', icon: 'el-icon-share' },
        { title: '设置', icon: 'el-icon-setting' }
      ]
    }
  },
  methods: {
    handleOpen(ev) {
      console.log('handleOpen', ev)
    },
    handleClose(ev) {
      console.log('handleClose', ev)
    }
  },
  components: {
    userIcon
    // 'el-row': Row,
    // 'el-menu': Menu,
    // 'el-submenu': Submenu,
    // 'el-menu-item': MenuItem,
    // 'el-menu-item-group': MenuItemGroup
  }
}
</script>

<style lang="less">
.tac {
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  height: 100%;
}

.el-menu-vertical {
  flex: 1;
}
</style>
