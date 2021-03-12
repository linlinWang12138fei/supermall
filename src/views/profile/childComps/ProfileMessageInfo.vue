<template>
  <div class="message-info">
    <profile-message-info-item v-for="item in infoList" :info-item-list="item"/>
  </div>
</template>

<script>
  import ProfileMessageInfoItem from "./ProfileMessageInfoItem";
  export default {
    name: "ProfileMessageInfo",
    components: {ProfileMessageInfoItem},
    props: {
      infoList: {
        type: Array,
        default() {
          return []
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
    margin-bottom: 15px;
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
    background: url("./img/phone.png") no-repeat;
    background-size: 100%;
    float: left;
    margin-right: 15px;
  }
  .content1{
    width: 100%;
    height: 30px;
    float: left;
    border-bottom: 2px solid #f2f2f2;
  }
</style>
