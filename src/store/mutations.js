import {ADD_COUNT, ADD_TO_CART} from "./mutations-types";

export default {
  // addToCart(state, product) {
  //   if (state.cartList.length === 0){
  //     state.cartList.push(product);
  //   }else {
  //     for (let item of state.cartList){
  //       if(item.iid === product.iid){
  //         item.count++
  //       }else{
  //         state.cartList.push(product);
  //       }
  //     }
  //
  //   }
  //
  //
  //   }
  [ADD_COUNT](state, payload){
    payload.count++
  },
  [ADD_TO_CART](state, payload){
    state.cartList.push(payload)
  }
}
