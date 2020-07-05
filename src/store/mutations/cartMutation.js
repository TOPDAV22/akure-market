import Vue from "vue"


export const cartMutation = {
  ADD_TO_CART: (store, payload) => {
    const newcart = [...store.cart];
    newcart.push(payload);
   // console.log('here',newcart)
    Vue.set(store, "cart", newcart);
  }
}
