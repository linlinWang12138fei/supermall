<template>
  <div id="app">
    <keep-alive exclude="Detail" include="Home">
      <router-view v-if="this.$route.meta.keepAlive"/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from "components/content/MainTabBar/MainTabBar";
  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
