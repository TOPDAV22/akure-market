<template>
  <div class="productImageRapper">
    <div style="text-align: center;">
      <img :src="product.image" class="measurement-image" />
    </div>
     <div class="productName">{{product.name}}</div>
     <div  class="productdiscrip">
      {{product.description}} </div>
      <a class="uk-button uk-button-default" v-on:click="variant">SEE VARIANT</a>
  </div>
 
</template>

<script>
export default {
  name: "productsPageTopDisplay",
  components: {},
  props: ["product"],
  data() {
    return{
    }
  },
  methods:{
    variant(){
      const variantId = this.product.id;
      let linkvariants = `/products/${variantId}/productVariant`

      this.$router.push(linkvariants);
  }
  
  }
};
</script>



<style scoped>
.ellipsis {
  text-overflow: ellipsis;

  /* Required for text-overflow to do anything */
  white-space: nowrap;
  overflow: hidden;
}
.productImageRapper {
  border: 1px solid #fff;
  width: 230px;
  box-shadow: 0px 0px 9px 1px #eee;
  border-radius: 1rem;
  margin: 10px 0;
  background-color: rgb(238, 246, 247);
  display: grid;
}
.measurement-image {
  width: auto;
  height: 200px;
  border-radius: 1rem 1rem 0 0;
  max-width: 100%;
  margin-top: 2em;
}
.productName{
  text-align: center;
  font-weight: bold;

}

.productdiscrip{
  text-align: center;
  margin-bottom: 2em;
}

</style>