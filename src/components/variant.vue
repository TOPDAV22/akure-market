<template>
<div> 

<div class="wrapper">
<variantComponentPage
v-for="variantScale in measurements"
:key="variantScale.id"
:variantScale="variantScale"
/>
   

</div>



</div>


    
</template>



<script>
import {mapState} from 'vuex'
import variantComponentPage from "./variantComponentPage"
export default {
name: "variant",
components: {variantComponentPage},

computed:{
    ...mapState(["measurements"])
}
    
}
</script>



<style scoped>

  .wrapper{
      display: flex;
      justify-content: space-between;
      height: auto;
    flex-wrap: wrap;
    background-color: #E0F2F1;
  }  

</style>