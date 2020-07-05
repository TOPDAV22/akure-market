import Vue from "vue";

export const measurementmutation = {
  SET_MEASUREMENT: function (store, payload) {
    console.log('mutation', payload);
    Vue.set(store, 'measurements', payload);
  },
  

  INCREASE_MEASUREMENT: function(store, measurement){
    let newMeasurements = [...store.measurements];
    newMeasurements.forEach(innerMeasurement =>{
      if (innerMeasurement.id === measurement.id){
        //console.log('increased ', innerMeasurement.id);
        innerMeasurement.quantity = innerMeasurement.quantity +=1;
      }
    }),

    Vue.set(store, 'measurements', newMeasurements);
  },
  REDUCE_MEADSUREMENT: function(store, measurement){
    let newMeasurements = [...store.measurements];
    newMeasurements.forEach(innerMeasurement =>{
      if (innerMeasurement.id === measurement.id){
        //console.log('increased ', innerMeasurement.id);
        innerMeasurement.quantity = innerMeasurement.quantity =-1;
        
      }
    })
    Vue.set(store, 'measurements', newMeasurements);
  },

  SET_SEARCH_KEY: function(store, payload){
    Vue.set(store, 'searchKey', payload);
  }
};
