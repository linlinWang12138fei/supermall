<template>
  <div class="cart-list">
    <scroll class="cart-content" ref="scroll">
        <cart-list-item v-for="item in $store.state.cartList" :item-info="item" :key="item.iid"></cart-list-item>
    </scroll>

  </div>
</template>

<script>
  import GridView from "components/common/gridView/GridView";
  import CartListItem from "./CartListItem";
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "CartList",
    components: {
      GridView,
      CartListItem,
      Scroll
    },
    activated() {
      this.$refs.scroll.refresh();
    }
  }
</script>

<style scoped>
  .cart-list{
    height: calc(100% - 49px - 49px - 40px);
  }
  .cart-content {
    height: 100%;
    overflow: hidden;
  }
</style>
