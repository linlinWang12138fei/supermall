<template>
  <div class="category-content">
    <tab-control class="tab-control2"
                 ref="bottomTitle2"
                 :titles="['综合', '新品', '销量']"
                 @tabClick="tabClick"
                 v-show="isShowTitle"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <div class="content-top"
           v-for="item in contentTop">
        <div class="content-top-img">
          <img v-lazy="item.image" @load="imagLoad"/>
        </div>
        <span>{{item.title}}</span>
      </div>
      <tab-control ref="bottomTitle"
                   :titles="['综合', '新品', '销量']"
                   @tabClick="tabClick"/>
      <content-bottom :bottom-content="contentBottom"/>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import ContentBottom from "./ContentBottom";
  import TabControl from "components/content/tabCortrol/TabControl";

  import {debounce} from "common/util";
  import {itemListenerMixin} from 'common/mixin'

  export default {
    name: "CategoryMenuContent",
    components: {ContentBottom, Scroll, TabControl},
    mixins: [itemListenerMixin],
    data() {
      return {
        titleTop: 0,
        isShowTitle: false
      }
    },
    props: {
      contentTop: {
        type: Array,
        default() {
          return []
        }
      },
      contentBottom: {
        type: Array,
        default() {
          return []
        }
      }
    },
    mounted() {

    },
    methods: {
      tabClick(index) {
        this.$bus.$emit('contentbottonclick', index)
        this.$refs.bottomTitle2.currentIndex = index
        this.$refs.bottomTitle.currentIndex = index
      },
      imagLoad() {
        debounce((this.titleTop = this.$refs.bottomTitle.$el.offsetTop), 500);
      },
      contentScroll(position) {
        if(this.$route.path.indexOf('/category') === 0){
          this.isShowTitle = (-position.y) > this.titleTop ? true : false
        }
      }
    }
  }
</script>

<style scoped>
  .category-content{
    width: 75vw;
    height: auto;
    position: relative;
  }
  .content{
    width: 100%;
    height: 84.5vh;
    position: relative;
  }
  .content-top{
    width: 25%;
    height: 13%;
    font-size: 12px;
    display: inline-block;
    margin: 20px 0 20px 20px;
    text-align: center;
  }
  .content-top img{
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
  }

  .tab-control2{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
    z-index: 9;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }

</style>
