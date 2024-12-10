<template>
  <div class="pictures">
    <Swiper
      :loop="true"
      :slidesPerView="1"
      :spaceBetween="10"
      :modules="modules"
      class="mySwiper"
    >
      <Swiper-slide v-for="image in images" :key="image.id">
        <img class="film-frame" :src="image.url" alt="Placeholder Image" />
      </Swiper-slide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css';
import { loadRouteLocation } from 'vue-router';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
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
      }));
      this.images = images;
    },
  },
};
</script>
  
  <style>


  .swiper {
    
    
    width: 25vw;
    height: 25vh;
    overflow: visible;
    


  }

  .swiper-slide {
    width: 100% ;
    height: 100%

  }
  
  img {
   
    width: 100%;
    height: auto;
    
    
  }
  

@media (max-width: 480px) {
    .swiper {
      width: 100vw;
      height: 50vh;
      overflow: visible;
      left: 5vw;
    }
  }
  </style>