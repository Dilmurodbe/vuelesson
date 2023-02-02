<!-- eslint-disable vue/multi-word-component-names -->
<template>

  <form class="d-flex align-items-center flex-column justify-content-center " @submit.prevent="login">
    <div class="col-4 d-flex align-items-center flex-column justify-content-center">
 
    <input  required v-model="email" placeholder="email"/>

    <input type="password" autocomplete="on" required v-model="password" placeholder="password"/>
    <button>LOGIN</button>
  </div>
  </form>
</template>
<style>
.hig{
  width: 100%;
  height: 500px;
  background-color: rgb(69, 69, 69);
}
button{
height: 20px;
background-color: rgb(114, 226, 221);
width: 100%;
height: 50px;
margin-top: 30px;
color: #fff ;
border: none;
}
input{
  width: 100%;
  font-size: 20px;
  color: black;
  height: 70px;
  padding: 20px;
  margin-top: 20px;
}
label{
  font-size: 20px;
  color: rgb(255, 255, 255);

}

</style>
<script>
import router from "../router/index.js";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {

      let email = "qwer";
      let password = "1234";
      if (this.email == email) {
        if (this.password == password) {
          console.log("login buldi");
          router.push("/home");
        } else {
          console.log("parol xato");
        }
      } else {
        console.log("email xato");
      }
    },
  },
};
</script>
