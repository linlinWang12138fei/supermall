<template>
  <swiper ref="sw">
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isLoad: false
      }
    },
    methods: {
      //图片加载完成的事件
      //js：imageLoad
      //vue：@load
      imageLoad() {
        //this.isLoad 只让这个事件发送一次
        if (!this.isLoad)
        this.$emit("swiperImageLoad")
        this.isLoad = true
      },

      startTimer() {
        this.$refs.sw.startTimer();
      },
      stopTimer() {
        this.$refs.sw.stopTimer();
      }
    }
  }
</script>

<style scoped>

</style>
