<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import ObserveDOM from '@better-scroll/observe-dom'
  BScroll.use(ObserveDOM)
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      spullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      //1. 创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: this.spullUpLoad,
        click: true,
        mouseWheel: true,
        // observeDOM: true,
        // observeImage: true,
      });
      //监听滚动事件
      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll', position => {
          this.$emit('scroll', position)
        })
      }
      //监听上拉加载事件
      if (this.spullUpLoad){
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingup')
        })
      }
    },
    methods: {
      scrollTo(x, y, time = 1000){
        this.scroll && this.scroll.scrollTo(x, y, time);
      },
      finisPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      refresh() {
        console.log('--');
        this.scroll && this.scroll.refresh();
      }
    }
  }
</script>

<style scoped>

</style>
