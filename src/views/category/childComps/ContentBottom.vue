<template>
  <div class="content-bottom">
    <div>
      <goods-list :goods="bottomContent"/>
    </div>
  </div>
</template>

<script>
  import GoodsList from "components/content/goods/GoodsList";
  export default {
    name: "ContentBottom",
    components: {GoodsList},
    props: {
      bottomContent: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
