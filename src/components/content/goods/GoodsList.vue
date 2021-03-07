<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
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
    },
    created() {
    }
  }
</script>

<style scoped>
  .goods{

    display: flex;
    /*设置这个之后子元素需要具体的width 或者百分比*/
    flex-wrap: wrap;
    /*均等分*/
    justify-content: space-around;

    padding: 2px;
  }

  /*一行显示两个*/

</style>
