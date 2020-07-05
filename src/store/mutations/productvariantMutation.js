import Vue from "vue"

export const productvariantMutation= {
    SET_PRODUCTVARIANT: function (store, productvariant) 
                              {
        Vue.set (store,"variants",productvariant )
        console.log("variants");  

    }

}



