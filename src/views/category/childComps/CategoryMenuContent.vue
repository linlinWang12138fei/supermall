<template>
  <div class="category-content">
    <scroll class="content" ref="scroll">
      <div class="content-top"
           v-for="item in contentTop">
        <div class="content-top-img">
          <img v-lazy="item.image" @load="imagLoad"/>
        </div>
        <span>{{item.title}}</span>
      </div>
      <content-bottom :bottom-content="contentBottom"/>

    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import ContentBottom from "./ContentBottom";

  export default {
    name: "CategoryMenuContent",
    components: {ContentBottom, Scroll},
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
    methods: {
      imagLoad() {
        // this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  .category-content{
    width: 75vw;
    height: auto;
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
    margin: 20px 0 0 20px;
    text-align: center;
  }
  .content-top img{
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
  }



</style>
