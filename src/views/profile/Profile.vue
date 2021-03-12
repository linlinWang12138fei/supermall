<template>
  <div class="profile">
    <nav-bar class="profile-navbar">
      <div slot="center">XXX商城</div>
    </nav-bar>
    <scroll class="content" >
      <profile-info/>
      <profile-message-info :info-list="infoList"/>

      <profile-message-info :info-list="infoList2"/>


      <ul>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";
  import NavBar from "components/common/navbar/NavBar";

  import ProfileInfo from "./childComps/ProfileInfo";
  import ProfileMessageInfo from "./childComps/ProfileMessageInfo";
  export default {
    name: "Profile",
    data() {
      return {
        infoList: [
          {imgsrc: 'https://i-1.lanrentuku.com/2020/11/11/adbfbef3-949e-4ccb-b3a5-9c4c26120ffb.jpg', title: '我的消息'},
          {imgsrc: 'https://d1.lanrentuku.com/upload/img/py5s1c/202011050520/5fa31b104a7c2.jpg', title: '积分商城'},
          {imgsrc: 'https://d1.lanrentuku.com/upload/img/py5s1c/202011032333/5fa178560bab3.jpg', title: '会员卡'},
        ],
        infoList2: [
          {imgsrc: 'https://d1.lanrentuku.com/upload/img/py5s1c/202011041953/5fa29640b6d62.jpg', title: '我的购物车'},
          {imgsrc: 'https://ss1.baidu.com/6ON1bjeh1BF3odCf/it/u=390668532,3118737994&fm=15&gp=0.jpg', title: '下载APP'},
        ]
      }
    },
    components: {
      ProfileMessageInfo,
      NavBar,
      Scroll,
      ProfileInfo
    }
  }
</script>

<style scoped>
  .profile{
    position: relative;
    background-color: #f2f2f2;
    height: 100vh;
  }
  .profile-navbar{
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    font-weight: 700;
  }


    .content{
      height: calc(100% - 11.73333vw - 49px);
      width: 100%;
      overflow: hidden;
    }
</style>
