<template>
  <div class="menu-list">
    <scroll class="content">
      <category-menu-list-item :menu-list-item="menuList.list"/>
    </scroll>

  </div>
</template>

<script>
  import CategoryMenuListItem from "./CategoryMenuListItem";
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "CategoryMenuList",
    props: {
      menuList: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    components: {
      Scroll,
      CategoryMenuListItem
    }
  }
</script>

<style scoped>
  .menu-list{
    width: 25vw;
    height: 86.5vh;
    text-align: center;
    line-height: 12vw;
  }
  .content{
    width: 25vw;
    height: 86.5vh;
    overflow: hidden;
  }
</style>
