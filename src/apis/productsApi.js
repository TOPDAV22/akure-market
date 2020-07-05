import {
  axiosInstance
} from '../apis/baseAxios'

export const getProductApi = async () => {
  console.log("comingg")
  try {
    const response = await axiosInstance.get('/v1/products')
    console.log("come");
    return response.data;
  } catch (error) {
    console.log(error)

  }


}
