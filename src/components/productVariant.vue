<template>
  <div>
    <div class="productvariantwrapper">
      <productvariantpage
        v-for="productVariant in filterVariant"
        :key="productVariant.id"
        :productVariant="productVariant"
      />
    </div>
  </div>
</template>


<script>
import { mapState } from "vuex";
import productvariantpage from "./productvariantpage"
export default {
  name: "productVariant",
  components: {productvariantpage},
  data() {
    return {};
  },

 
 computed: {
    ...mapState(["variants"]),

    filterVariant:function(){
      const fixedid = this.$route.params.myId;

      const filterproductvariant = this.variants.filter( variant =>{
       return variant.productId == fixedid;
      });
      return filterproductvariant

    },
  }


};

</script>
<style scoped>
.productvariantwrapper {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>