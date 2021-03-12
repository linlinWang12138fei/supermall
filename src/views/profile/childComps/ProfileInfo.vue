<template>
  <div class="profile-info">
    <div id="user-info">
      <a href="#" class="clear-fix">
        <div class="user-icon">
          <div class="user-icon-img">
            <img :src="getUserIcon">
          </div>
          <div class="user-info">
            <p>登录/注册</p>
            <p>
              <i><img src="./img/phone.png" width="100%" height="100%"/></i>
              暂无手机号
            </p>
          </div>
          <div class="user-icon-right">
            <img src="./img/right-arrow.png" width="100%" height="100%" />
          </div>
        </div>
      </a>
    </div>
    <div class="account-info">
      <div>
        <p><span class="balance">0.00&nbsp;</span>元</p>
        <p>我的余额</p>
      </div>
      <div>
        <p><span class="balance">0&nbsp;</span>个</p>
        <p>我的优惠</p>
      </div>
      <div>
        <p><span class="balance">0&nbsp;</span>分</p>
        <p>我的积分</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileInfo",
    data() {
      return {
        getUserIcon: ''
      }
    },
    // props: {
    //   getUserIcon: {
    //     type: String,
    //     default() {
    //       return ''
    //     }
    //   }
    // },
    created() {
      this.getUserIcon = 'default-avatar.jpg'
    }
  }
</script>

<style scoped>
  .profile-info{
    margin-bottom: 15px;
  }
  #user-info {
    padding: 15px;
    background-color: var(--color-tint);
  }
.user-icon{
  width: 100%;
  height: 50%;
  color: #fff;
}

.user-icon-img{
  width: 60px;
  height: 60px;
  border-radius: 100%;
  overflow: hidden;
  float: left;
}
.user-icon-img img{
  width: 100%;
  height: 100%;
}

.user-info {
  padding: 10px;
  width: calc(100% - 90px);
  height: auto;
  float: left;
}
  .user-info p:nth-child(2){
    font-size: 13px;
  }
  .user-info p:nth-child(2) i{
    display: inline-block;
    width: 15px;
    height: 25px;
    position: relative;
    top: 8px;
  }


.user-icon-right {
  height: 100%;
  width: 30px;
  float: left;
}
  .user-icon-right img{
    margin-top: 100%;
    transform: translate(-50%, -50%);
  }
  .account-info{
    width: 100%;
    height: 50%;
    background-color: #fff;
    display: flex;
  }
  .account-info div{
    padding: 20px;
    border-right: 1px solid #f2f2f2;
    flex: 1;
    font-size: 12px;
    text-align: center;
  }
  .balance{
    color: #ff5f3e;
    font-size: 28px;
  }
</style>
