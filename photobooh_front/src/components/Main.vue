<template>
    <div class="Main">
  
    <HomeView/>
    
    
  
    <header class="App-header">
      <img src="../assets/image.png" alt="" class="logo">
    </header>
  
    
  
  </div>  
  <Snow/>
  </template>

<script>

import HomeView from './HomeView.vue'
import Snow from './Snow.vue';
export default {
  name: 'Main',
  components: {
    Snow,
    HomeView,
    
  }
}
</script>

