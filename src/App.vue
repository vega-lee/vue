<template>
  <div id="app">
    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="第一个 Vue 项目"></mt-header>

    <!-- 中间的 路由 router-view 区域 -->
    <!-- <router-view><router-view/> -->

    <!-- 底部 Tabbar 区域 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/Tabbar";
export default {
  name: "App",
  components: {
    TabBar
  }
};
</script>

<style>
</style>
