import {getProductApi} from "../../apis/productsApi"

  export const productsAction ={
    DisplayProduct : async (context)=>{
        let products = await getProductApi();
       context.commit( 'SET_PRODUCT', products)       
    }

  }