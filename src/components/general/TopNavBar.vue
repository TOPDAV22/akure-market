<template>
  <div class="TopNavBar">
    <a>
      <img src="@/assets/matlogo.png" id="matlogo" />
    </a>
    <div id="ProjectName">AKURE MARKET</div>
    <div class="inputTag">
      <input @input='handleSearchInput' />
    </div>
    <div id="acces">Login/Register</div>
    <div class="Cart">
      {{NumberItems}}
      <a>
        <router-link to="/cart">
          <img src="@/assets/carticon.png" id="image" />
        </router-link>
      </a>
    </div> 
    <div class="navigatorheader"> 
      
       <div id="arowimage">
        PRODUCTS
        <img id="image" src="@/assets/png2.png" />
      </div></div> 
    
  </div>
  
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TopNavBar",
  props: [],
  data() {
    return {};
  },
  methods: {
    handleSearchInput(event){
      this.$store.commit('SET_SEARCH_KEY', event.target.value);
    }
  },
  computed: {
    NumberItems() {
      return this.$store.getters.cartCounter;
    },
    ...mapState(["searchKey"])
  }
};
</script>

<style scoped>
.TopNavBar {
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 149px;
  background: rgb(33, 80, 153);
  box-shadow: 1px 1px 5px 0 #ddd;
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
  z-index: 2;
}
#ProjectName {
  font-weight: bold;
  font-size: 1rem;
  width: 16rem;
  line-height: 2;
  float: left;
  margin-top: 20px;
}
.inputTag {
  margin-top: 30px;
  justify-content: center;
  margin-bottom: 20rem;
}

.Cart {
  justify-content: left;
  margin-left: 2rem;
  margin-top: 1rem;
}
#image {
  height: 30px;
  width: 30px;
}
#acces {
  margin-top: 2rem;
}
#matlogo {
  height: 40px;
  width: 40px;
  margin-top: 20px;
}
.navigatorheader{
 height: 4rem;
    width: 100%;
    background-color:  rgb(33, 80, 153);
    align-self: flex-end;
    position: absolute;
}
#arowimage {
  height: inherit;
 width: 113px;
  background-color: #215099;
  color: white;
  float: left;
  margin-bottom: 0;
}
#image{
  height: 30px;
    width: 30px;
}


</style>
