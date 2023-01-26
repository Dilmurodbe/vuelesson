<script>
import axios from 'axios'
export default {
  name: "Api PAge",
  data() {
    return {
      items: [],
    }
  },
  methods: {
    getdata() {
      axios.get("https://api.nuxtjs.dev/rivers").then ((response) => {
        this.items= response.data
      }).catch((error) => {
        console.log(error);
      })

    },
  },  
 mounted(){
this.getdata()
  }
};
</script>
<template>
<div class="Home">
  <div class="div" v-for="item in items" :key="item">
    <div class="container">
      <div class="row">
    <div class="col-5">
    <img  class="img" :src="item.image"  alt="itm.title"></div>
    <div class="col-7">
 <h2> {{ item.title }}</h2>
<p>{{ item.description}}</p>
<div class="dflex ">
  <p>{{ item.length}}</p>
  <p>{{ item.countries}}</p>
</div>
</div>
</div>

  </div> </div>
    </div>
</template>
<style>
h2{
  font-size: 50 px;
  color: #fff;
  text-align: center;
}
.Home{
  width: 100%;
  height: auto;
  background-color: black;
}
.dflex{
  display: flex;
  justify-content: end;
  margin-top: 30px;
}
p{
  font-size: 18px;
  text-align: right;
}
.img{
  width: 100%;
  height: 300px;
}
.div{
  padding: auto;  
  background-color: aquamarine;
  width: 100%;
height: 500px;
padding-top: 100px;
}
</style>
