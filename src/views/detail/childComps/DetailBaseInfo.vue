<template>
  <div  v-if="Object.keys(detailGoods),length !== 0" class="detail-base-info">
    <div class="detail-info-title">{{detailGoods.title}}</div>
    <div class="detail-info-price">
      <span class="new-price">{{detailGoods.newPrice}}</span>
      <span class="old-price">{{detailGoods.oldPrice}}</span>
      <span v-if="detailGoods.discount" class="discount">{{detailGoods.discount}}</span>
    </div>
    <div class="detail-info-other">
      <span>{{detailGoods.columns[0]}}</span>
      <span>{{detailGoods.columns[1]}}</span>
      <span>{{detailGoods.services[detailGoods.services.length - 1].name}}</span>
    </div>
    <div class="detail-info-service">
      <span class="info-service-item" v-for="index in detailGoods.services.length-1" :key="index">
        <img :src="detailGoods.services[index - 1].icon" />
        <span>{{detailGoods.services[index - 1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      detailGoods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .detail-info-title {
    color: #222
  }

  .detail-info-price {
    margin-top: 10px;
  }

  .detail-info-price .new-price {
    font-size: 24px;
    color: var(--color-high-text);
  }

  .detail-info-price .old-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .detail-info-price .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }

  .detail-info-other {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }

  .detail-info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .info-service-item span {
    font-size: 13px;
    color: #333;
  }
</style>
