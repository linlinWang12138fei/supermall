<template>
  <div class="cart">
    <nav-bar class="cart-navbar"><div slot="center">购物车({{CartListLength}})</div></nav-bar>

    <cart-list></cart-list>

    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  import { mapGetters } from 'vuex'
  export default {
    name: "Cart",
    data() {
      return {

      }
    },
    components: {
      NavBar,
      CartList,
      CartBottomBar
    },
    computed: {
      ...mapGetters(['CartListLength'])
    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
.cart-navbar{
  background-color: var(--color-tint);
  color: #ffffff;
  font-size: 16px;
  position: relative;
  z-index: 9;
}
</style>
