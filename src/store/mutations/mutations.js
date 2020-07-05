import {measurementmutation} from "./measurementmutation";
import {productMutation} from './productsMutation'
import {categoryMutation} from "./categoryMutation"
import { cartMutation } from "./cartMutation";
import {productvariantMutation} from "./productvariantMutation"
import { variantMutations } from "./variantMutation";

export const mutations = {
  ...measurementmutation ,...productMutation, ...categoryMutation, ...cartMutation,
...productvariantMutation,...variantMutations


}
;
 