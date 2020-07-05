import {measurementactions} from "./measurementactions";
import {productsAction} from './productsAction';
import {categoryAction} from  "./categoryAction"
import { productVariantAction } from "./productvariant";
import { variantAction } from "./variantsAction";






export const myActions = {
  ...measurementactions, ...productsAction, ...categoryAction, ...productVariantAction,...variantAction


};



      