<template>
  <div class="measurement-item-wrapper">
    <div style="text-align: center">
      <img :src="measurement.image" class="measurement-image" />
      
    </div>
    <div
      class="measurement-name"
    >{{measurement.quantity}} {{measurement.scale.name}} of {{measurement.productvariant.name}} of {{measurement.productvariant.name}}</div>
    <div class="measurement-price">
      <div class="otherprice">₦{{measurement.old_per_unit_cost * measurement.quantity}}</div>
      <div class="ourprice">₦{{measurement.per_unit_cost * measurement.quantity}}</div>
    </div>
    <div class="measurement-actions">
      <div class="qtty-selector"> Quantity </div>
      <div>
        <button @click="reduce">-</button>
        {{measurement.quantity}}
        <button @click="addMore">+</button>
      </div>
      <button @click="addToCart" class="custom-button measurement-button">ADD TO CART</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeasurementItemComponent",
  props: ["measurement"],
  data() {
    return {
      
    };
  },
  methods: {
    addMore: function() {
      console.log('admore clicked');
      this.$store.dispatch("increaseMeasurementQuantity", this.measurement);
    },
  reduce:function (){
    this.$store.dispatch('reduceMeasurementQuantity',this.measurement);
  },

    addToCart() {
      this.$store.commit("ADD_TO_CART", this.measurement);
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

.measurement-item-wrapper {
  border: 1px solid #fff;
  width: 230px;
  box-shadow: 0px 0px 9px 1px #eee;
  border-radius: 1rem;
  margin: 10px 0;
  background-color: white;
}

.measurement-name {
  min-height: 42px;
  text-align: center;
  font-size: 18px;
  border-bottom: 1px solid #eee;
  padding: 0 10px;
  height: 90px;
}

.measurement-price {
  height: 50px;
  padding: 0 10px;
}

.measurement-actions {
  height: 40px;
  padding: 0 10px;
}

.qtty-selector {
  float: left;
}

.measurement-button {
  float: right;
  background-color: #fe7c00;
  color: white;
  border: 0;
  width: 80px;
  margin-bottom: 10px;
}

.measurement-image {
  width: auto;
  height: 200px;
  border-radius: 1rem 1rem 0 0;
  max-width: 100%;
}
.otherprice{
 color:rgb(170, 83, 2);
  text-decoration-line:line-through
}
.ourprice{
  color: rgb(29, 29, 233);
  text-decoration-color: mediumseagreen;
}

</style>
