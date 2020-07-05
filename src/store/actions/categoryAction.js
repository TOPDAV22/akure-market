import {GetCategoriesApi} from "../../apis/categoriesApi"




export const categoryAction= {
    DisplayCategory:async (context) =>{
    let category = await GetCategoriesApi();
    console.log('am here', category)
    context.commit ("SET_CATEGORY", category);
    
    }
    

};