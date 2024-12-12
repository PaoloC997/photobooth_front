<template>
  
    <div class="Main">
        <div class="section1">
            <HomeView/>
        </div>
      
        <header class="App-header">
      <img src="../assets/image.png" alt="" class="logo">
      <a class="boton" href="/Gallery">Accede a Las Cuchi Fotos</a>
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



<style scoped>


.Main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  
}
.App-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    }



.boton {
    font-family: 'Yuji Mai', cursive;
  position: absolute;
  bottom: 10vh;
  color: rgb(250, 58, 116);
  text-decoration: none;
  font-size: 50px;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1;


}

.boton:hover {
  background-color: rgb(240, 36, 121);
  color: rgb(255, 230, 230); 
  border-radius: 10px;
  transform: scale(1.1);
}

.section1 {
    top: 5vh;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
}






@media (max-width: 480px) {
  .boton {
    font-size: 20px;
    padding: 5px 10px;
    bottom: 15vh;
  }

  .section1 {
    top: 15vh;
    height: 10vh;
    animation: section1 40s infinite linear;

  }
 @keyframes section1 {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(-1200%);
  }
  
  100% {
    transform: translateX(-100%);
  }
  }
    
 


}



</style>