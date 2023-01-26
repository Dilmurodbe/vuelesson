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
      axios.get("https://api.nuxtjs.dev/mountains").then ((response) => {
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

  <div class="div" v-for="item in items" :key="item">
    <div class="container">
      <div class="row">
    <div class="col-5">
    <img  class="img" :src="item.image"  alt="itm.title"></div>
    <div class="col-7">
 <h2> {{ item.title }}</h2>
<p>{{ item.description}}</p>
<div class="dflex ">
  <p>{{ item.height}}</p>
</div>
</div>

  </div> </div>
    </div>
</template>
<style>
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
  height: auto;
}
.div{
  background-color: aquamarine;
  width: 100%;
height: 500px;
}
</style>
