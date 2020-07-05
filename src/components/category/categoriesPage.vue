<template>
  <div>
    
    <div id="categoryWrapper">
      <categoriesListPage v-for="category in categories" :key="category.id" :category="category" />
    </div>


  </div>
</template>

<script>
import categoriesListPage from "./categoriesListPage";
import { mapState } from "vuex";

export default {
  name: "categoriesPage",
  components: { categoriesListPage },
  data() {
    return {};
  },
  mounted() {
    
  },
  

  computed: {
    ...mapState(["categories"]),
  }
};
</script>


<style  scoped>
#categoryWrapper {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 9rem;
}
</style>