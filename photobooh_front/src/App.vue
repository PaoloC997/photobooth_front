<template>
  <div class="main">
   <div class="header">
     <h1>Image Gallery</h1>
      </div>
     <div v-if="images.length === 0">
       <p>No images to display</p>
     </div>
     
    <div v-else class="gallery">
      <div v-for="image in images" :key="image.id" class="image-container">
        <img :src="image.url" alt="Placeholder Image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [], // Holds the image data
    };
  },
  mounted() {
    this.fetchImages();
  },
  methods: {
    fetchImages() {
      // Generate an array of placeholder image URLs using Lorem Picsum
      const images = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        url: `https://picsum.photos/300/200?random=${index}`, // Ensure uniqueness with the query param
      }));
      this.images = images; // Assign the image array to the data property
    },
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: auto;
  width: 80vw;
  flex-wrap: wrap;
  justify-content:space-between;
}

.header{
  display:flex;
  justify-content:center;
  margin-top:2rem;
  margin-bottom:5rem;
}

h1{
  margin-left:auto;
  margin-right:auto;
}

.image-container img {
  width: 25vw; 
  height: auto;
  border: 1px solid #ccc;
  object-fit: cover;
}

.image-container img:last-child {
  display: block;
  margin-top: 8px;
}
</style>
