<script>

export default {
  name: "Api PAge",
  data() {
    return {
      searchTerm: "",
    };
  },
  methods:{
    searchCountry() {
      this.$store.dispatch("getsearch", process.env.VUE_APP_URL + "name/" +this.searchTerm)
    },
  },

  computed: {
    data() {
      return this.$store.getters["getapi"];
    },
  },
  mounted() {
    this.$store.dispatch("getMenu", process.env.VUE_APP_URL + "all");
  },
};
</script>
<template>
  <div class="div">
    <div class="container">
      <div class="row d-flex justify-content-center">
      <div class="col-7 row">
          <div class="col-9 position-relative">
            <img
              style="position: absolute; top: 7px; left: 25px"
              src="./search.svg"
              alt=""
            />
            <input
              class="input"
              type="text"
              v-model="searchTerm"
            />
          </div>
          <div class="col-3">
            <button class="button" @click="searchCountry" >Search</button>
          </div>

        </div>
      <div class="row d-flex justify-content-center">






        </div>


        <div  style="background-color: aqua;" v-if="data.length === 0" >
        <h1 class="not">Not found</h1>
        </div>
        <div v-else  class="col-3 "  v-for="item in data" :key="item.id"  >
          <div class="d-flex flex-column  m-4 p-3 background">
            <img class="img" :src="item.flags.png" alt="itm.title" />
            <h3>{{ item.name.common }}</h3>
            <h4>{{ item.capital }}</h4>
            <h4>{{ item.region }}</h4>
             <h4>{{ item.population }} ming</h4>
          </div>
        </div>



      </div>
    </div>
  </div>
</template>
<style>
.not{
  font-size: 200px;
color: #d000;
font-weight: bolder;
text-align: center;
}
.background{
  background-color: #dedede;
  border-radius: 10px;
  height: 400px;

}
.input {
  width: 100%;
  height: 38px;
  border-radius: 20px;
  border: 1px solid grey;
  padding-left: 40px;
}
input:focus {
  border: none;
  outline-color: blue;
}
.button {
  width: 100%;
  height: 38px;
  border-radius: 20px;
  background-color: blue;
  color: #fff;
  font-weight: bolder;
  border: none;
}
.img {
  width: 100%;
  height: 150px;
}
.div {
  padding-top: 40px;
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: auto;
}
</style>
