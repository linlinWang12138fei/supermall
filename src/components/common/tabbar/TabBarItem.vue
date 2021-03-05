<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isShow">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      link: String,
      activeColor: {
        type: String,
        default: '#786550'
      }
    },
    data() {
      return {
        // isShow: true
      }
    },
    computed: {
      isShow() {
        //判断当前处于活跃状态的路由是否和传过来的路由一样，并且不能为-1
        return this.$route.path.indexOf(this.link) !== -1;
      },
      activeStyle() {
        return this.isShow ? {color: this.activeColor} : {color: '#786550'}
      }
    },

    methods: {
      itemClick() {
        this.$router.push(this.link);
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;/*去掉图片下面默认多的3px*/
  }
</style>
