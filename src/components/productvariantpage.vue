<template>

<div class="productvariantwrapper">

     <div class="imagewrapper">
         <img :src="productVariant.image" class="image" >
           </div>
           <br/>
    <div class=" description"> 
        <div>{{productVariant.name}}  </div>
        <div> {{productVariant.description}} </div>
       <a>  <button> SEE PRICE </button> </a>
    </div>


</div>
    

</template>
  


<script>
export default {
    name: "productvariantpage",
    props: ["productVariant"]

    
}
</script>


<style scoped>



.productvariantwrapper{
    border-radius: 1rem;
    padding: 2rem;
    width: 230px;
    box-shadow: 1rem 0 0 0;
    margin-top: 1rem;
    height: 300px;

}

.imagewrapper{
    text-align: center;
   color: black;
   font-weight: 300;
   height: 60%;
   border-radius: 1rem;   
    margin: 10px 0;
}

.image{
   height: 100%;
	max-width: 100%;
    border-radius: 1rem;
    
}
.description{
    height: 3rem;

}

</style>