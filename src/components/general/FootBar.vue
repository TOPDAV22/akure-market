<template>
  <div class="FootBar">
     <div class="footerSection">
      <div>About</div>
      <div>mission</div>
      <div>Address</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "FootBar"
};
</script>


<style  scoped>
.FootBar {
  width: 100%;
  height: 20rem;
  background-color: black;
  padding: 4rem 0rem 0rem 1rem;
  margin-top: 1rem;
  color: aliceblue;
}
.footerSection {
  display: flex;
  justify-content: space-around;
  height: 130px;
  border-bottom: 1px solid #555;
}
</style>