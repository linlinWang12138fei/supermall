<template>
  <div class="category">
    <nav-bar class="category-nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="category-content">
      <div class="menuList">
        <category-menu-list :menu-list="menuList"/>
      </div>
      <div class="menuContent">
        <category-menu-content :content-top="contentTopList" :content-bottom="contentBottomList" />
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CategoryMenuList from "./childComps/CategoryMenuList";
  import CategoryMenuContent from "./childComps/CategoryMenuContent";

  import {getCategory, getSubcategory, getCategoryDetail} from "network/category";

  export default {
    name: "Category",
    data() {
      return {
        menuList: {},
        MaitKey: 0,
        miniWallKey: 0,
        contentTopList: [],
        contentBottom: {
          'pop': {list: []},
          'new': {list: []},
          'sell': {list: []}
        },
        contentType: 'pop'
      }
    },
    components: {
      NavBar,
      CategoryMenuList,
      CategoryMenuContent
    },
    computed: {
      contentBottomList() {
        return this.contentBottom[this.contentType].list
      }
    },
    created() {
      console.log('创建');
      //在这个生命周期函数中不能拿到元素
      // new BScroll('.wrapper', {});
      //1.请求左边展示的类型
      getCategory().then( res => {
        //1.1. 获取左边的参数
        this.menuList = res.data.category
        //1.2.获取第一个右边的参数的maitkey
        this.MaitKey = res.data.category.list[0].maitKey
        //1.3.获取右边第一个参数的miniWallKey
        this.miniWallKey = res.data.category.list[0].miniWallkey
        // console.log(this.firstMaitKey);
        // console.log(res);
        //1.3.取出右边第一个的数据
        getSubcategory(this.MaitKey).then( res => {
          // console.log(res);
          this.contentTopList = res.data.list
        })
        //取出右边第一个 下面的数据
        getCategoryDetail(this.miniWallKey, 'pop').then( res => {
          //console.log(res);
          this.contentBottom.pop.list = res
        })
        getCategoryDetail(this.miniWallKey, 'new').then( res => {
          //console.log(res);
          this.contentBottom.new.list = res
        })
        getCategoryDetail(this.miniWallKey, 'sell').then( res => {
          //console.log(res);
          this.contentBottom.sell.list = res
        })
      })
      //3.事件总线监听左边的点击
      this.$bus.$on('menuitemclick', (maitKey, miniWallkey) => {
        this.MaitKey = maitKey
        this.miniWallKey = miniWallkey
        getSubcategory(this.MaitKey).then( res => {
          // console.log(res);
          this.contentTopList = res.data.list
        })
        this.changeContent(this.miniWallKey);
      })

      this.$bus.$on('contentbottonclick', index => {
        // console.log(index);
        switch (index) {
          case 0: this.contentType = 'pop';break;
          case 1: this.contentType = 'new';break;
          case 2: this.contentType = 'sell';break;
        }
      })
    },
    // mounted() {
    //   2.请求右边的数据
    //   默认情况下BScroll是不可以实时监听滚动位置的
    //   probeType  侦测
    //   0，1都是不侦测实时的位置
    //   2:在手指滚动的过程中侦测，而在手中离开的惯性的过程是不侦测的
    //   3: 只要是滚动都被侦测
    //   const bscroll = new BScroll('.wrapper',{
    //     //开启滚动事件
    //     probeType: 2,
    //     click: true,
    //     pullUpLoad: true,
    //   });
    //   //滚动事件
    //   bscroll.on('scroll', (position) => {
    //     // console.log(position);
    //   })
    //   //上拉加载事件
    //   bscroll.on('pullingUp', () => {
    //     console.log('上拉加载更多');
    //     //先发送网络请求，请求更多页的数据
    //
    //     //等数据请求完成，并且将新的数据展示出来和，必须调用以下函数
    //     setTimeout( () => {
    //       bscroll.finishPullUp();
    //     }, 2000)
    //   })
    // },
    methods: {
      changeContent(miniWallkey) {
        getCategoryDetail(miniWallkey, 'pop').then( res => {
          //console.log(res);
          this.contentBottom.pop.list = res
        })
        getCategoryDetail(miniWallkey, 'new').then( res => {
          //console.log(res);
          this.contentBottom.new.list = res
        })
        getCategoryDetail(miniWallkey, 'sell').then( res => {
          //console.log(res);
          this.contentBottom.sell.list = res
        })
      }
    }

  }
</script>

<style scoped>
  .category{
    /*width: 100%;*/
    /*height: 100vh;*/
    /*height: auto;*/
  }
  .category-content{
    display: flex;
  }
  .menuList{
    background-color: rgba(100,100,100,.1);
  }
  .category-nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
    position: relative;
    z-index: 9;
  }

  .menuListScroll{
    width: 25vw;
    height: calc(100% - 49px - 49px);
    overflow: hidden;
  }
  .menuListScroll2{
    width: calc(100% - 25vw);
    height: calc(100% - 49px - 49px);
  }
</style>
