<template>
  <div>{{ getMenubar }}</div>
  <div v-if="getMenubar" class="col-auto">
<a href="#">dilmurod</a>
<a href="#"> javoxir</a>

  </div>

  
  </template>
<script>
import { mapGetters } from 'vuex';
export default {
  name:'SaidbarVue',
  methods:{


  },
  computed:{
    ...mapGetters(['getMenubar']),
  }
}
</script>
  <style>
  
  </style>