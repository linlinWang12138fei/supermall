<template>
    <div>
      <div class="icon-selector" @click="selectItem" :class="{'selector-active': value}">
        <img src="~/assets/img/cart/tick.svg" alt="">
      </div>
    </div>
</template>

<script>
	export default {
    name: "CheckButton",
    props: {
      value: {
        type: Boolean,
        default() {
          return true
        }
      }
    },
    methods: {
      selectItem() {
        this.$emit('checkbtnclick')
      }
    }
  }
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }

  .selector-active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>
