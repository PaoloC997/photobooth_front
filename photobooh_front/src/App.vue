<template>
  <div class="App">
  <Main/>
  </div>
</template>

<script>
import Main from './components/Main.vue';
export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style >
.Main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.snow-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
}
    
    .snow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(rgb(219, 216, 199), rgb(240, 227, 234));
      background-position: 0% 0%;
     
    }
     
    .snowflake {
      position: absolute;
      
      
        
      background-image: url('./assets/pngwing.com.png');

      background-size: 100% 100%;
      animation: fall  linear infinite;
    
    
    }
    
    .App-header {
    height: 50vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50vh;
  }

  .logo {
    width: 20vw;
    height: auto;
    margin-bottom: 20px;
    animation-name: beat;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  @keyframes beat {
    0% {
      transform: scale(1);
    }
    8% {
      transform: scale(1.1);
    }
    13% {
      transform: scale(1);
    }
    18% {
      transform: scale(1.1);
    }
    23% {
      transform: scale(1);
    }
    
    }

  @media (max-width: 768px) {
    .App-header {
      top: 30vh;
    }
    .logo {
      width: 30vw;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 480px) {
    .App-header {
      top: 30vh;
    }
    .logo {
      width: 60vw;
      margin-bottom: 5px;
    }
  }



    @keyframes fall {
      0% {
        transform: translateY(0) ;
        opacity: 0 ;
      }
     
      100% {
        transform: translateY(-100vh) rotate(60deg) ;
        opacity: 1;
      }
    }

    

   

</style>
