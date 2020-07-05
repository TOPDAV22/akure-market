<template>
  <div class="categoriesWrapper">
  <div class="categoriesImageWrapper">
 <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="autoplay: true;autoplay:1000">

    <ul class="uk-slideshow-items" >
        <li v-for=" (image, index) in category.imageList" v-bind:key="index">
          <div id="categoryImage">
            <img :src="image"  class="categoryImage" />
          </div>
        </li>
       
    </ul>


</div>
    </div>
    <div class="categoriesName">{{category.name}}</div>
    <hr/>
    <div class="categoriesdescription">
      <div class="descriptionSection">{{category.description}}</div>
      <div class="buttonSection">
        <a class="uk-button uk-button-default" v-on:click="product">product</a>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "categoriesListPage",
  props: ["category"],
  data() {
    return {};
  },
  methods: {
    product() {
        const categoryId = this.category.id;
        let linkProducts = `categories/${categoryId}/products`
      this.$router.push(linkProducts);
    }
  }
};
</script>

<style scoped>
.ellipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.categoriesWrapper {
  border: 1px solid #fff;
  height: 325px;
  width: 240px;
  box-shadow: 0px 0px 9px 1px #eee;
  border-radius: 1rem;
  margin: 10px 0;
  background-color: white;
  float: left;
  justify-content: center;
}
.categoriesImageWrapper {
  height: 60%;
  width: 100%;
  margin: 6px 6px 6px 6xp;

  justify-content: center;
  
}
.category-image {
  height: 3rem;
  width: 4rem;
}
#category-image{
 height: 3rem;
  width: 4rem;
overflow: inherit;

}
.categoriesName {
      height: 6%;
    width: 85%;
    float: left;
    padding: 7px;
    color: black;
}
.categoriesdescription{
  
  justify-content: space-between;
  width: 90%;
  color: black;
   padding: 4px;
   
   
}
.buttonSection{
  float: right;
  background-color: rgb(202, 217, 247);
}
</style>
