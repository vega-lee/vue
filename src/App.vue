<template>
  <div id="app" class="app-container">
    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="第一个 Vue 项目">
      <span slot="left" @click="backPage()" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- 中间的 路由 router-view 区域 -->
    <!-- <router-view><router-view/> -->
    <transition>
      <router-view></router-view>
    </transition>
    <!-- 底部 Tabbar 区域 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/Tabbar";
export default {
  name: "App",
  data() {
    return {
      flag: false
    };
  },
  created() {
    this.flag = this.$route.path === "/home" ?false:true;
  },
  methods: {
    backPage() {
      this.$router.back();
    }
  },
  components: {
    TabBar
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal == "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.mint-header {
  z-index: 1400;
}
.app-container {
  padding-top: 40px;
  padding-bottom: 60px;
  overflow-x: hidden;
  overflow-x: hidden;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>

