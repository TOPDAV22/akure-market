import { axiosInstance } from "./baseAxios";

export const getMeasurementsApi = async () => {
  console.log("about to fetch");
  try {
    const response = await axiosInstance.get("/v1/measurements");
    console.log("fetched");
    return response.data;
  } catch (e) {
    console.log(e);
    console.log(e.response);
    console.log(e.data);
  }
};
