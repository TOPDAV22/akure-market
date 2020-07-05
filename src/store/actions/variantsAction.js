import {variantApi} from "../../apis/variant"

 export const variantAction ={
    displayVariants: async (context)=>{
        let variants = await variantApi();
        context.commit("SET_VARIANT",variants)
    } 
 }