<template>
    <grid-view>
      <goods-list-item v-for="item in goods" :goods-item="item"/>
    </grid-view>
</template>

<script>
  import GridView from "components/common/gridView/GridView";
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    data() {
      return {
        list: []
      }
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsListItem,
      GridView
    },
  }
</script>

<style scoped>

</style>
