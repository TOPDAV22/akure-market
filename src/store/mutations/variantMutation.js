import Vue from "vue"


export const variantMutations ={
    SET_VARIANT :function ( store,variants){
Vue.set (store,'Scalevariant',variants)
    }
}