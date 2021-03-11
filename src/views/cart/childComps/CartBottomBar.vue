<template>
  <div class="bottom-bar">
    <div class="btm-check">
      <check-button
        :value="checkAll" @click.native='selectAll'>
      </check-button>
      <span>全选</span>
    </div>
    <div class="totalPrice">
      合计：{{totalPrice}}
    </div>
    <div class="calculate" @click="calculateClick">
      去计算：{{checkLength}}
    </div>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton";
  import {mapGetters} from 'vuex'
  export default {
    name: "CartBottomBar",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['getCartList']),
      totalPrice() {
          return "￥" + this.getCartList
            .filter( item => item.checked)
            .reduce((pro, res) => pro + res.price * res.count, 0)
            .toFixed(2)

      },
      checkLength() {
          return this.getCartList.filter( item => item.checked).length

      },
      checkAll() {
        if(this.getCartList.length === 0)return false
        // return !(this.getCartList.filter(item => !item.checked).length
        return !(this.getCartList.find(item => !item.checked))
        // return !(this.getCartList.some(item => !item.checked))
      }
    },
    methods: {
      selectAll() {
        if(this.checkAll){//全部选中，需要变成全部不选中
          this.getCartList.forEach(item => item.checked = false);
        }else {//全部不选中，需要变成全部选中
          this.getCartList.forEach(item => item.checked = true)
        }
      },
      calculateClick() {
        if(!this.checkAll){
          this.$toast.show('请选择需要购买的商品')
        }else {
          //付钱
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    width: 100%;
    height: 40px;
    background-color: rgba(0,0,0,.11);
    position: relative;
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  .btm-check{
    display: flex;
    width: 50px;
  }

  .totalPrice{
    margin-left: 20px;
    flex: 1;
  }

  .calculate{
    width: 95px;
    height: 40px;
    background-color: var(--color-tint);
    text-align: center;
    line-height: 40px;
    color: #fff;
  }
</style>
