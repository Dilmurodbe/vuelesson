<template>
<button @click="toglemenu">push</button>


</template>
<script>
export default {
  name:'VuexVue',
 methods:{
  toglemenu(){
this.$store.commit('setMenubar')
  }
 }
  
}






</script>
<style>

</style>