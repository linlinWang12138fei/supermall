<template>
  <div id="home" class="wrapper">


    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <tab-control :titles="titles"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 class="tab-control"
                 v-show="isFixed"/>



    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :spullUpLoad="true"
            @pullingup="loadMore">
      <home-swiper
        :banners="banner"
        @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="titles"
                   @tabClick="tabClick"
                   ref="tabControl2" v-show="!isFixed"/>
      <goods-list :goods="showGoods"/>
    </scroll>
<!--    如果想监听组件的事件，必须加上 .native, 比如：@click.native-->
    <back-top @click.native="backTopClick" v-show="isShow"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";

  import HomeRecommendView from "./childComps/HomeRecommendView";
  import FeatureView from "./childComps/FeatureView";
  import TabControl from "components/content/tabCortrol/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";



  import {getHomeMultidata, getHomeGoods} from "network/home";

  import {debounce} from 'common/util'


  export default {
    name: "Home",
    data() {
      return {
        banner: [],
        recommends: [],
        titles: ['流行', '新款', '精选'],
        goods: {
          'pop': {page: 0,list: []},
          'new': {page: 0,list: []},
          'sell': {page: 0,list: []},
        },
        currentType: 'pop',//当前商品类型
        isShow: false,
        tabOffsetTop: 0,
        isFixed: false,
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
    },
    created() {//生命周期函数，创建完成时调用此方法
      //1.请求多个数据
      this.mGetHomeMultidata();
      //2.请求商品数据
      this.mGetHomeGoods('pop');
      this.mGetHomeGoods('new');
      this.mGetHomeGoods('sell');


    },
    mounted() {
      //图片加载完成的事件监听
      //防抖
      const refresh = debounce(this.$refs.scroll.refresh, 500)
      //监听事件总线
      this.$bus.$on('itemImageLoad', () => {
        // this.$refs.scroll.refresh();
        refresh()
      })



    },
    destroyed() {
      console.log('销毁');
    },
    methods: {


      /**
       * 事件监听相关的方法
       * */
      backTopClick() {
        //scrollTo(x,y,毫秒);
        this.$refs.scroll.scrollTo(0,0);
      }
      ,
      tabClick(index){
        switch (index) {
          case 0: this.currentType = 'pop';break;
          case 1: this.currentType = 'new';break;
          case 2: this.currentType = 'sell';break;
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      contentScroll(position) {
        //返回顶部按钮是否显示
        this.isShow = -position.y > 1000 ? true : false;

        //决定tabControl是否吸顶(position；fixed)
        this.isFixed = -position.y > this.tabOffsetTop
      },
      loadMore() {
        //上拉加载更多
        this.mGetHomeGoods(this.currentType)
      },
      //吸顶效果
      swiperImageLoad() {
        //获取tabControl的offsettop
        //所有的组件都有一个属性：$el 用于获取组件中的元素
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;

      },

      /***
       * 网络请求相关的方法
       */

      mGetHomeMultidata() {
        getHomeMultidata().then( res => {
          // console.log(res);
          this.banner = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      mGetHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then( res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          //完成了上拉加载更多，让上拉加载方法可以复用：finisPullUp()
          this.$refs.scroll.finisPullUp();
        })


      },

    }
  }
</script>
<!--scoped: 作用域
  加上之后只针对当前组件
-->
<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }

  #aaa{
    width: 1px;
    height: 1000px;
  }

  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 9;

    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }

  /*.content{*/
  /*  !*height: 300px;*!*/

  /*  overflow: hidden;*/
  /*  position: absolute;*/
  /*  top: 44px;*/
  /*  bottom: 49px;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*}*/
  .content{
    height: calc(100% - 92px);
    width: 100%;
    position: relative;

    /*margin-top: 44px;*/
  }

  .tab-control{
    position: relative;
    z-index: 9;
  }
</style>
