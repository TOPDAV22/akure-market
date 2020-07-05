import {
  getMeasurementsApi
} from "../../apis/measurementsApi";

export const measurementactions = {
  getMeasurement: async (context) => {
    try {
      let measurements = await getMeasurementsApi();
      measurements = measurements.map(measurement => {
        return {
          ...measurement,
          quantity: 1,
        }
      })
      // console.log(measurements);
      context.commit('SET_MEASUREMENT', measurements);
    } catch (error) {
      console.log(error);
    }



  },

  increaseMeasurementQuantity: (context, measurment) => {
    // console.log('called increaseM action')
    context.commit('INCREASE_MEASUREMENT', measurment);
  },
  reduceMeasurementQuantity:(context, measurement)=>{
    context.commit("REDUCE_MEADSUREMENT",measurement);

  },
};
