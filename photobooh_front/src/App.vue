<template>
  <div>
    <nav>
      <router-link to="/"></router-link>
      <router-link to="/about"></router-link>
    </nav>
    <router-view />
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

.boton {
  position: absolute;
  bottom: 35vh;
  
  color: black;
  text-decoration: none;
  font-size: 50px;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1;


}

.boton:hover {
  background-color: black;
  color: rgb(255, 255, 255); 
  transform: scale(1.1);
}
.About {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  text-decoration: none;
  font-size: 20px;
}
.Main {
  display: flex;
  flex-direction: row;
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
      background-image: radial-gradient(rgb(255, 255, 255), rgb(245, 209, 217));
      background-position: 0% 0%;
     
    }
     
    .snowflake {
      position: absolute;
      
      
        
      background-image: url('./assets/pngwing.com.png');

      background-size: 100% 100%;
      animation: fall  linear infinite;
    
    
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
    


  .section1 {
  position: absolute;
    height: 20vh;
    width: 20vw;
  right: -30%;
    
  }
  


  .logo {
    width: 18vw;
    height: auto;
    
    animation-name: beat;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    
  }
  .section2 {
  position: absolute;
  
    height: 20vh;
    width: 20vw;
    
    right: 30%;
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



  

    

   

</style>
