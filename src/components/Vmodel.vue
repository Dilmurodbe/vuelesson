<script>
import Button from '../components/Button.vue'
export default {
  name: "HomepPage",
  components: {
 Button,
  
  },
  data() {
    return {
     
  form:{
    name:'',
    email:""
  },
 

  }},
  methods:{
func (){
  this.data.push(this.form)
}
   
}   

};
</script>
<template>
  <div class="footer">
  <div class="container">

                <h1>{{form.name}}</h1>
                <h1>{{form.email }} </h1>
           
        <div class="d-flex   justify-content-center align-items-center ">
<div class="div">
<div class="turt">

<h3>name</h3>
<input v-model="form.name"  type="text">
<h3>email</h3>
<input v-model="form.email" type="text"><br>
<Button @click="func" class="button" name="push" />
</div></div>
</div></div></div>
<h1>{{ form }}</h1>
</template> 
<script>
</script>
<style>
.button{
  font-size: 20px;
  color: black;
  background-color: rgb(253, 183, 98);
  border-radius: 10px;
  padding: 10px 73px;
  border: none;
  margin-top: 20px;

}
.footer{
  width: 100%;
  height: 100vh;
  background-color: rgb(44, 44, 44);
}
.push{
  font-size: 20px;
  color: rgb(0, 0, 0);
  padding: 10px 20px;
  border-radius: 10px;
  background-color: aquamarine;
  border: none;
  
}
.turt{
  padding: 30px;

}
.push{
  width: 200px;
  height: auto;
margin-top: 20px;
}
input{
margin-top: 10px;

}
.div{
  background-color: antiquewhite;
  border-radius: 10px;
}
</style>