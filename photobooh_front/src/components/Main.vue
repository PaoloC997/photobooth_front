<template>
    <div class="Main">
      <HomeView class="section1"/>
      <header class="App-header">
      <img src="../assets/image.png" alt="" class="logo">
      </header>
      <a class="boton" href="/Gallery">Todas Las Fotos</a>
      <HomeView class="section2"/>
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



<style scoped>
.boton {
    font-family: 'Yuji Mai', cursive;
}


</style>