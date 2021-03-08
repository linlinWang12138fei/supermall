<template>
  <div id="detail">
    <detail-nav-bar @detailtitleclick="detailTitleClick" :current-index="currentIndex"/>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :spullUpLoad="true">
      <detail-swiper :top-images="topImgs" ref="detailSwiper"/>
      <detail-base-info :detail-goods="detailGoods" ref="baseInfo"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @image-load="imageLoad"/>
      <detail-param-info :param-info="paramInfo"  ref="paramInfo"/>
      <detail-coment-info :comment-info="commentInfo"  ref="commentInfo"/>
      <detail-recommend-info :recommend-list="recommendList"  ref="recommendList"/>
    </scroll>
    <detail-tab-bar/>

    <back-top @backtop="backTop" v-show="showBackTop"/>

  </div>
</template>

<script>

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailComentInfo from "./childComps/DetailComentInfo";
  import DetailRecommendInfo from "./childComps/DetailRecommendInfo";
  import DetailTabBar from "./childComps/DetailTabBar";
  import BackTop from "components/content/backTop/BackTop";

  import Scroll from "components/common/scroll/Scroll";

  import {getDetail, GoodsInfo, Shop, GoodsParam, getRecommend} from 'network/detail'

  import {BACKTOP_DISTANCE} from "common/const";

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImgs: [],//轮播图
        detailGoods: {},//详情页数据
        shop: {},//店铺信息数据
        detailInfo: {},//商品的详情数据
        paramInfo: {},//参数信息，如尺码
        commentInfo: {},
        recommendList: [],
        themeTops: [],
        currentIndex: 0,
        showBackTop: false
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailComentInfo,
      DetailRecommendInfo,
      DetailTabBar,
      BackTop
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.query.iid;
      //2.根据iid请求详情数据
      getDetail(this.iid).then( res => {
        const data = res.result;

        //2.1获取顶部的轮播图片数据
        this.topImgs = data.itemInfo.topImages

        //2.2获取商品信息
        this.detailGoods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)

        //2.3创建店铺信息
        this.shop = new Shop(data.shopInfo)

        //2.4保存商品的详情数据
        this.detailInfo = data.detailInfo;

        //2.5获取参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule );

        //2.6获取评论信息
        if(data.rate.list){
          this.commentInfo = data.rate.list[0];
        }

        console.log(res);
      });
      this._getRecommend();
    },
    updated() {
      this._getOffsetTops();
    },
    methods: {
      backTop() {
        this.$refs.scroll.scrollTo(0,0);
        this.$refs.scroll.refresh()
      },

      _getOffsetTops() {
        this.themeTops = []
        this.themeTops.push(this.$refs.detailSwiper.$el.offsetTop)
        this.themeTops.push(this.$refs.paramInfo.$el.offsetTop)
        this.themeTops.push(this.$refs.commentInfo.$el.offsetTop)
        this.themeTops.push(this.$refs.recommendList.$el.offsetTop)
        this.themeTops.push(Number.MAX_VALUE)
      },

      contentScroll(position) {
        //1.是否显示回到顶部按钮
        this.showBackTop = -position.y > BACKTOP_DISTANCE
        // 2.监听滚动到哪一个主题
        this._listenScrollTheme(-position.y)
      },

      _listenScrollTheme(position) {
        let length = this.themeTops.length;
        for (let i = 0; i < length; i++) {
          let iPos = this.themeTops[i];
          /**
           * 判断的方案:
           *  方案一:
           *    条件: (i < (length-1) && currentPos >= iPos && currentPos < this.themeTops[i+1]) || (i === (length-1) && currentPos >= iPos),
           *    优点: 不需要引入其他的内容, 通过逻辑解决
           *    缺点: 判断条件过长, 并且不容易理解
           *  方案二:
           *    条件: 给themeTops最后添加一个很大的值, 用于和最后一个主题的top进行比较.
           *    优点: 简洁明了, 便于理解
           *    缺点: 需要引入一个较大的int数字
           * 疑惑: 在第一个判断中, 为什么不能直接判断(currentPos >= iPos)即可?
           * 解答: 比如在某一个currentPos大于第0个时, 就会break, 不会判断后面的i了.
           */
          if (position >= iPos && position < this.themeTops[i+1]) {
            if (this.currentIndex !== i) {
              this.currentIndex = i;
            }
            break;
          }
        }
      },

      imageLoad() {
        this.$refs.scroll.refresh()
      },
      _getRecommend() {
        getRecommend().then( (res, err) => {
          if (err) return
          this.recommendList = res.data.list;
        })
      },

      detailTitleClick(index) {
        this.currentIndex = index
        this.$refs.scroll.scrollTo(0, -this.themeTops[index])
      }
    }
  }
</script>

<style scoped>
  #detail{
    height: 100vh;
    position: relative;
    z-index: 10;
    background-color: #fff;
  }

  .content{
    width: 100%;
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>
