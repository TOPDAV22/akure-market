import {
  axiosInstance
} from "../apis/baseAxios"

export const GetCategoriesApi = async () => {
  try {
    const response = await axiosInstance.get('v1/productcategories');
    console.log("fatched");
    return response.data;
  } catch (error){ 
    console.log(error);

  }


}
