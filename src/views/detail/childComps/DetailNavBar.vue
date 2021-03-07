<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg">
    </div>
    <div slot="center" class="title">
      <div
        v-for="(item, index) in titles"
        class="title-item"
        :class="{active: currentIndex === index}"
        @click="titleItemClick(index)" >{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleItemClick(index){
        this.currentIndex = index
      },
      backClick() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  .title{
    display: flex;
  }

  .title-item{
    flex: 1;
    font-size: 13px;
  }

  .active {
    color: var(--color-high-text);
  }

  .back img{
    margin: 20% 0 0 15%;
  }
</style>
