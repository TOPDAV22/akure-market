
<template>
  <div>
    <ul>
      <li v-for="(selectedItems ,index) in cart" v-bind:key="index">
        <div class="itemsWrapper">
          <div class="itemsWrapperlist">
            {{selectedItems.quantity}}
            {{selectedItems.scale.name}}
            {{selectedItems.productvariant.name}}
          </div>
          <div class="price">₦{{selectedItems.per_unit_cost*selectedItems.quantity}}</div>
        </div>
        <hr/>
      </li>
      <div class="totalCost">Total= ₦{{total}}</div>
    </ul>

    <br />
  </div>
</template>



<script>
import { mapState } from "vuex";

export default {
  name: "cart",
  date() {
    return {};
  },

  computed: {
    ...mapState(["cart"]),

    total() {
      return this.$store.getters.cartPricetotal;
    }
  }
};
</script>


<style scoped>
.itemsWrapper {
  display: flex;
  justify-content: space-between;
}
.price {
 
  color: black;
  height: auto;
  width: auto;
  margin-top: 0;
   margin-right: 3rem;
}
.itemsWrapperList {
  background-color: teal;
  height: 3rem;
  width: 15rem;
  float: left;
}
.totalCost {
  color: black;
  width: auto;
  display: flex;
  justify-content: flex-end;
  margin-right: 3rem;
  text-decoration-line: underline;
  text-decoration-color: forestgreen;
  font-weight: 600;

}
</style>