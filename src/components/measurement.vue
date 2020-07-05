<template>
<div class="measurementwrapper">

    <MeasurementItemComponent
    v-for="measurementsp in measurements"
    :key=" measurementsp.id"
    :measurementsp="measurements"

     />
    
 </div>

    
</template>



<script>
import { mapState } from "vuex";
import  MeasurementItemComponent from "./measurement/MeasurementItemComponent"
export default {
    name:"Measurement",
    components: { MeasurementItemComponent },

    computed:{
         ...mapState(["measurements"])
    }
    
}
</script>



<style scoped>

</style>