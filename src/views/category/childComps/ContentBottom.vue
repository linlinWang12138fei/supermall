<template>
  <div class="content-bottom">
    <tab-control :titles="['综合', '新品', '销量']" @tabClick="tabClick"/>
    <div>
      <goods-list :goods="bottomContent"/>
    </div>
  </div>
</template>

<script>
  import TabControl from "components/content/tabCortrol/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  export default {
    name: "ContentBottom",
    components: {GoodsList, TabControl},
    props: {
      bottomContent: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      tabClick(index) {
        this.$bus.$emit('contentbottonclick', index)
      }
    }
  }
</script>

<style scoped>
  .content-bottom{
    margin-top: 20px;
  }
</style>
