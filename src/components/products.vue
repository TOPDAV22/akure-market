<template>
  <div>
    
    <div class="productwrapper">
      <productsPageTopDisplay
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import productsPageTopDisplay from "./productsPageTopDisplay";
export default {
  name: "products",
  components: { productsPageTopDisplay },

  data() {
    return {};
  },
  methods: {},

  mounted() {
    
  },
  computed: {
    ...mapState(["products"]),

     filteredProducts: function() {
       //console.log('this.$route.params', this.$route.params)
       const otherid = this.$route.params.Dvalue;
      // console.log(this.products);
    const filteredItems = this.products.filter(product => {
        return product.categoryId == otherid;
    }); 
    return filteredItems;
  }
  },
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.TopDisplayContainer {
  height: 15rem;
  justify-content: center;
  padding: 2rem 1rem 2rem 1rem;
  background: url("~@/assets/picture.png") no-repeat;
  background-size: 100%;
}

.productwrapper {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
