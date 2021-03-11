<template>
  <div>
      <div v-for="(item, index) in menuListItem"
           class="menu-list-item"
           :class="{'category-active': currentIndex === index}"
           @click="categoryItemClick(index)">
        {{item.title}}
      </div>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "CategoryMenuListItem",
    components: {Scroll},
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      menuListItem: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      categoryItemClick(index) {
        this.currentIndex = index
        // console.log(this.menuListItem[index].maitKey);
        this.$bus.$emit('menuitemclick', this.menuListItem[index].maitKey, this.menuListItem[index].miniWallkey)
      }
    }
  }
</script>

<style scoped>
  .menu-list-item{
    width: 100%;
    height: 45px;
  }

  .category-active{
    background-color: #fff;
    color: var(--color-high-text);
    border-left: 4px solid var(--color-high-text);
    font-weight: 700;
  }


</style>
