<script>
import Button from '../components/Button.vue'
export default {
  name: "Kamaz-Navbar",
  data() {
    return {
      showmenu: false,
    };
  },
  components: {
    Button,
  },
  methods: {
    showfunction() {
      this.showmenu ? (this.showmenu = false) : (this.showmenu = true);
      console.log(this.showmenu);
    },
  
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="bosh-div">
      
       <a class="bosh-h1"  href="">Features </a>
       <a class="bosh-h1" href="">Documentation</a>
       <a class="bosh-h1" href="">Support</a>
        
        <Button class="bosh-button" name="call" />
        
   

        <div/>
         <div
            class="menubar"
            :style="{ visibility: showmenu ? 'visible' : 'hidden' }"
          >
            <div class="lists">
              <div class="close">
                <h1 @click="showfunction">close</h1>
              </div>
            </div>
       
          </div>
        </div>

      </div>
        </div>
    


</template>

<style>


.bosh-button{
  font-family: 'Inter';
font-style: normal;
font-size: 18px;
color: rgb(255, 255, 255);
background-color: black;
padding: 0px 10px;
margin-left: 23%;

}
.bosh-button1{
  font-family: 'Inter';
font-style: normal;
font-size: 18px;
color: rgb(0, 0, 0);
background-color: rgb(255, 255, 255);
padding: 10px 20px;
}
.bosh-div{
border: 10px solid rgba(2, 14, 12, 0.01);
border-bottom-color: rgba(2, 14, 12, 0.01) ;
border-left-color: rgba(2, 14, 12, 0.01) ;
background: rgba(2, 14, 12, 0.01);
backdrop-filter: blur(20px);
border-radius: 0px 0px 0px 10px;
}

.logo {
    width: 75px;
    height: 29px;
    margin: 0 50px;
}

.bosh-h1 {
  font-size: 16px;
  color: rgb(255, 255, 255);
  margin: 0 50px;
  text-decoration: none;
}

</style>
