<script>


export default {
  name: "app",

  data() {
    return {
      count: 0,
    };
  },

  components: {
  

  },
};
</script>
<template>

  <div class="home">

  <div class="container">
    <div class="row">
     <div class="home-div">
<h1 class="header-h1">Biz bilan Pitsa ta’mini xis eting </h1>
<p class="header-p15"> Biz sizga sifatli hamda mazzali pitsalarimizni tavsiya etamiz siz ularni shu saytning o’zidan buyurtma qilishingiz mumkin</p> 

     </div>
        
  </div></div>
</div>
</template>
<style>


.home {
    position: relative;
    width: 100%;

    height: 200px !important;
    object-fit: cover;
    background-color: rgb(0, 0, 0);
}
.header-p15{
  font-family: 'Gilroy';
font-style: normal;
margin-top: 20px;
font-size: 30px ;
line-height: 40px;
color: rgba(255, 255, 255, 0.7);
width: 100%;
text-align: center
;
}
.header-h1{
  font-family: 'Gilroy';
font-style: normal;

font-size: 46px;
line-height: 58px;
color: black;
}
.home-div{
  display: flex;
align-items: center;
  flex-direction: column;

}


.home{
position: relative;
width: 100% ;
margin-top: 0px !important;
height:100vh !important ;
object-fit: cover;

background-color: rgb(0, 0, 0);

}
</style>
