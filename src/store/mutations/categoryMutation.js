import Vue from "vue"
 

export const categoryMutation ={
    SET_CATEGORY :(store , payload)=>{
        Vue.set(store,"categories",payload);
        
    }
   
}