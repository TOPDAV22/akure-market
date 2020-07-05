<template>
  <div>
    <TopNavBar />
    <hr/>
    <div class="pageWrapper">
      <router-view />
    </div>
    <FootBar />
  </div>
</template>

<script>
import TopNavBar from "./components/general/TopNavBar";
import FootBar from "./components/general/FootBar";
export default {
  name: "App",
  components: { TopNavBar, FootBar },
  mounted(){
    this.$store.dispatch("getMeasurement");
    this.$store.dispatch("DisplayCategory");
    this.$store.dispatch("DisplayProduct");
    this.$store.dispatch("displayproductvariant");
    this.$store.dispatch("displayVariants");
    this.$store.dispatch("DisplayCategory");
    

  }
};
</script>

<style scoped>
.pageWrapper {
  margin-top: 75px;
}
</style>
