import {axiosInstance} from '../apis/baseAxios'


export const variantApi = async() => {

    try {
        const response = await axiosInstance.get("/v1/scales")
        console.log('scale')
    return response.data;
    } catch (error) {
        console.log(error);
        
    }
}