<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banner"></home-swiper>
    <home-recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    data() {
      return {
        banner: [],
        recommends: []
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
    },
    created() {//生命周期函数，创建完成时调用此方法
      getHomeMultidata().then( res => {
        console.log(res);
        // this.multidata = res.data;
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
