<template>
  <div>
    <div class="con">
      <div class="image"><img :src="infoItemList.imgsrc" /></div>
      <div class="content1">{{infoItemList.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileMessageInfoItem",
    props: {
      infoItemList: {
        type: Object,
        default() {
          return {}
        }
      }

    }
  }
</script>

<style scoped>
  .message-info {
    width: 100%;
    height: auto;
    background-color: #fff;
    padding: 15px 15px;
  }
  .con{
    display: flex;
    margin-bottom: 15px;
  }
  .con div{
  }
  .image{
    width: 24px;
    height: 24px;
    float: left;
    margin-right: 15px;
  }
  .image img{
    width: 100%;
    height: 100%;
  }
  .content1{
    width: 100%;
    height: 30px;
    float: left;
    border-bottom: 2px solid #f2f2f2;
  }
</style>
