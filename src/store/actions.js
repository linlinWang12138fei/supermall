import {ADD_TO_CART, ADD_COUNT} from "./mutations-types";

export  default {
  addCart(context, payload) {
    return new Promise( (resolve, reject) => {
      let oldProduct = context.state.cartList.find( item => item.iid === payload.iid)
      if(oldProduct){//数量加一
        context.commit(ADD_COUNT, oldProduct)
        resolve('商品数量加一')
      }else {//添加商品
        context.commit(ADD_TO_CART, payload)
        resolve('加入购物车成功')
      }
    })
  }
}
