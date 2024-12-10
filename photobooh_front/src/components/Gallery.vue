<template>
    <div class="gallery">
      <Snow />
      <h1>Cuchi Fotos de la Cuchi Boda</h1>
      <div class="grid">
        <div v-for="image in images" :key="image.id" class="grid-item">
          <img :src="image.url" :alt="image.description" />
        </div>
    </div>
    </div>
  </template>
  
  <script>
  import Snow from './Snow.vue';
  
  export default {
    name: 'Gallery',
    components: {
      Snow,
    },
    data() {
      return {
        images: [],
      };
    },
    mounted() {
      this.fetchImages();
    },
    methods: {
      fetchImages() {
        const images = Array.from({ length: 50 }, (_, index) => ({
          id: index + 1,
          url: `https://picsum.photos/300/200?random=${index}`,
          description: `Foto ${index + 1}`,
        }));
        this.images = images;
      },
    },
  };
  </script>
  
  <style scoped>

.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); 
  grid-template-rows: auto;
  grid-gap: 20px;
  justify-items: center; 
}

.grid-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}


.grid-item:nth-child(odd) {
  transform: rotate(-5deg);
  margin-top: 20px; 
}

.grid-item:nth-child(even) {
  transform: rotate(5deg);
  margin-top: 10px; 
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px; 
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3); 
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
}


.grid-item:hover img {
  transform: scale(1.05); 
  filter: brightness(1.1); 
}


.grid-item:hover {
  transform: translateY(-10px);
}

h1 {
  text-align: center;
  font-family: 'Yuji Mai', cursive;
  font-size: 50px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: rgb(250, 58, 116);
  
  border-radius: 20px;
  }

@media (max-width: 480px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 5px;
  }

  .grid-item {
    margin-top: 5px;
  }

  .grid-item:nth-child(odd) {
    transform: rotate(-2deg);
    margin-top: 5px;
  }

  .grid-item:nth-child(even) {
    transform: rotate(2deg);
    margin-top: 2px;
  }

  h1 {
    font-size: 30px;
  }
}



</style>
