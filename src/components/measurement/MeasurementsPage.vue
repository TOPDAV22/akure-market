<template>
  <div>
    <div class="TopDisplayContainer">imageslider</div>
    <div id="headermeasurement">
      <div id="arowimage">
        PRODUCTS
        <img id="image" src="@/assets/png2.png" />
      </div>
      <div id="categoryDropDown">
        <button class="button" type="button" v-on:click="displayCategories">CATEGORY</button>
        <div uk-drop="animation: uk-animation-slide-top-small; duration: 1000">
          <div id="categoryList">
            <ul v-for=" (category, index) in categories" v-bind:key="index">{{category.name}}</ul>
          </div>
        </div>
      </div>
    </div>
    <div id="measurement-page-wrapper">
      <div id="measurements-wrapper">
        <measurement-item-component
          v-for="measurement in filteredmeasurementproducts"
          :key="measurement.id"
          :measurement="measurement"
        />items in measurements
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MeasurementItemComponent from "./MeasurementItemComponent";
export default {
  name: "MeasurementsPage",
  data() {
    return {
      filteredmeasurementproducts: []
    };
  },
  components: { MeasurementItemComponent },
  mounted() {
    
  },
  created() {
    this.filteredmeasurementproducts = this.measurements;
  },
  methods: {
    displayCategories() {
      this.$router.push("/categoriesPage");
    }
  },
  watch: {
    measurements: function() {
      this.filteredmeasurementproducts = this.measurements;
    },
    searchKey: function(){
      console.log('searchKey', this.searchKey);
      this.filteredmeasurementproducts = this.measurements.filter(element => {
        return element.productvariant.name
          .toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    }
  },

  computed: {
    ...mapState(["measurements", "categories", "searchKey"])
  }
};
</script>

<style scoped>
.TopDisplayContainer {
  height: 15rem;
  justify-content: center;
  padding: 2rem 1rem 2rem 1rem;
  background: url("~@/assets/picture.png") no-repeat;
  background-size: 100%;
}
#headermeasurement {
  height: 50px;
  background-color: #215099;
  margin-top: 1px;
  padding: 6px 8px 0px 7px;
}
#categoryList {
  background-color: white;
}
.button {
  border: 0;
  color: white;
  background-color: #fe7c00;
}
#arowimage {
  height: inherit;

  width: 137px;
  background-color: #215099;
  color: white;
  float: left;
  margin-bottom: 0;
}
#categoryDropDown {
  float: left;
  height: 42px;
  width: 101px;
  background-color: #215099;
  color: rgb(10, 0, 0);
  margin-top: 8px;
  justify-content: center;
  display: grid;
  background-color: #fe7c00;
}
#image {
  height: 52%;
  width: 51%;
}

#measurements-wrapper {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
#measurement-page-wrapper {
  background-color: #04329711;
}
</style>
