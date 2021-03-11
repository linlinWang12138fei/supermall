<template>
  <div v-show="isShow" class="toast">
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        isShow: false,
        message: ''
      }
    },
    methods: {
      show(message, ms=2000) {
        this.isShow = true
        this.message = message

        setTimeout( () => {
          this.isShow = false
          this.message = ''
        }, ms)
      }
    }
  }
</script>

<style scoped>
  .toast{

    position: fixed;
    left: 50%;
    top: 50%;

    z-index: 999;

    padding: 8px 10px;
    border-radius: 5px;
    font-size: 8px !important;

    transform: translate(-50%, -50%);

    color: #fff;
    background-color: rgba(0,0,0,.7);
  }
</style>
