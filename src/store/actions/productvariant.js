import {Getproductvariant}from "../../apis/productVariantApi"

export const productVariantAction = {
    displayproductvariant: async (context) =>{
        let productvariant = await Getproductvariant ();
        console.log('here', productvariant)
        context.commit ('SET_PRODUCTVARIANT', productvariant)

    }

} 
