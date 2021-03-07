<template>
  <div>
    <h2>分类</h2>
<!--    <button @click="btnClick">按钮</button>-->
    <div class="wrapper">
      <ul>

        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
        <li>1123</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name: "Category",
    data() {
      return {

      }
    },
    methods: {
      btnClick() {
        console.log('------');
      }
    },
    created() {
      //在这个生命周期函数中不能拿到元素
      // new BScroll('.wrapper', {});
    },
    mounted() {
      //默认情况下BScroll是不可以实时监听滚动位置的
      //probeType  侦测
      //0，1都是不侦测实时的位置
      //2:在手指滚动的过程中侦测，而在手中离开的惯性的过程是不侦测的
      //3: 只要是滚动都被侦测
      const bscroll = new BScroll('.wrapper',{
        //开启滚动事件
        probeType: 2,
        click: true,
        pullUpLoad: true,
      });
      //滚动事件
      bscroll.on('scroll', (position) => {
        // console.log(position);
      })
      //上拉加载事件
      bscroll.on('pullingUp', () => {
        console.log('上拉加载更多');
        //先发送网络请求，请求更多页的数据

        //等数据请求完成，并且将新的数据展示出来和，必须调用以下函数
        setTimeout( () => {
          bscroll.finishPullUp();
        }, 2000)
      })
    }
  }
</script>

<style scoped>
  .wrapper{
    height: 150px;
    background-color: red;
    width: 100%;

    overflow: hidden;
    /*overflow-y: scroll;*/
  }
</style>
