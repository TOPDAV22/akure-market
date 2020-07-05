import Vue from 'vue'

export const productMutation ={
    SET_PRODUCT: function ( store ,payload){
        Vue.set( store,'products',payload)

    }
}