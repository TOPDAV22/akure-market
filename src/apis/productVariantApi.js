
import {
    axiosInstance
  } from '../apis/baseAxios'


  export const Getproductvariant  = async () => {
    console.log("coming")
    try {
      const response = await axiosInstance.get('/v1/productvariants')
      console.log("comeed");
      return response.data;
    } catch (error) {
      console.log(error)
  
    }
  
  
  }

  
