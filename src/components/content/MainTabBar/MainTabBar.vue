<template>
  <tab-bar>
    <tab-bar-item link="/home" active-color="#75e6d6">
      <img slot="item-icon" src="~assets/img/tabbar/home-01.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-02.png">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category" active-color="#ff9ea2">
      <img slot="item-icon" src="~assets/img/tabbar/sort-01.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/sort-02.png">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart" active-color="#ffdb21">
      <img slot="item-icon" src="~assets/img/tabbar/shoppingCart-01.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/shoppingCart-02.png">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile" active-color="#c093fd">
      <img slot="item-icon" src="~assets/img/tabbar/profile-01.png">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile-02.png">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
