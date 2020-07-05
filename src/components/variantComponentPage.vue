<template>
    <div class="scalevariantWrapper">

    <div class="scalevariantimage">
        <img :src="variantScale.image" alt=""> </div>
    <div class="section">
    {{variantScale.name}}
    {{variantScale.discription}}    
        
     </div>
       
    </div>



</template>

<script>
export default {
    name: "variantComponentpage",
    props : ["variantScale"],

   
    
}
</script>


<style scoped>
.scalevariantWrapper{
    height: 300px;
    width: 230px;
    border-radius: 1rem;
    box-shadow: 0 0 1rem 0 #eff;
    
    
}
.scalevariantimage{
    height: 50%;
    width: 90%;
    justify-content: center;
    display: grid;
}
.section{
    height: 50%;
    width: 90%;
    justify-content: center;
    display: grid;
    color: black;

}



</style>