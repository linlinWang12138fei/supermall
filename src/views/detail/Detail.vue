<template>
  <div class="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImgs"/>
    <detail-base-info :detail-goods="detailGoods"/>
  </div>
</template>

<script>

  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";

  import {getDetail, GoodsInfo} from 'network/detail'

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImgs: [],
        detailGoods: null
      }
    },
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.query.iid;
      //2.根据iid请求详情数据
      getDetail(this.iid).then( res => {
        const data = res.result;

        //2.1获取顶部的轮播图片数据
        this.topImgs = data.itemInfo.topImages


        this.detailGoods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)

        console.log(res);
      })
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
