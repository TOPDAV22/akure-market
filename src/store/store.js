import Vue from 'vue';
import Vuex from 'vuex';
import {
  mutations
} from "./mutations/mutations";
import {
  myActions
} from "./actions/actions";
import createPersistedState from "vuex-persistedstate";




const state = {
  measurements: [],
  products: [],
  categories: [],
  cart: [],
  variants: [],
  Scalevariant: [],
  searchKey:'',
};




const getters = {
  cartCounter: state => {
    return state.cart.length
  },

  cartPricetotal: state => {
    let total = 0;
    state.cart.forEach(element => {
      total += element.per_unit_cost * element.quantity;
    });
    console.log(total)
    return total;
  }

}

Vue.use(Vuex);



export const store = new Vuex.Store({
  mutations: mutations,
  actions: myActions,
  state,
  getters,


  plugins: [createPersistedState({
    key: "project"
   })]
});
