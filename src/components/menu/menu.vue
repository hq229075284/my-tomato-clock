<template>
  <el-row class="tac">
    <el-menu default-active="2" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
  </el-row>
</template>

<script>
  import Vue from 'vue'
  import {Row,Menu,Submenu,MenuItem,MenuItemGroup} from 'element-ui'
  import 'style/menu/menu.scss'
Vue.use(Row);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
  export default {
    props: "a",
    data() {
      return {
        message: 'world'
      }
    },
    methods: {
      handleOpen(ev) {
        console.log('handleOpen', ev);
      },
      handleClose(ev) {
        console.log('handleClose', ev);
      }
    },
    components:{
      'el-row':Row,
      'el-menu':Menu,
      'el-submenu':Submenu,
      'el-menu-item':MenuItem,
      'el-menu-item-group':MenuItemGroup
    }
  }
</script>

<style lang="less" scoped>
  .tac {
    display:flex;
    flex:0 0 auto;
    flex-direction:column;
    height:100%;
  }
  .el-menu-vertical{
    flex:1;
  }
</style>
