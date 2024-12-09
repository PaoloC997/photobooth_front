<template>
  <div class="pictures">
    <Swiper
      :effect="'Autoplay'"
      :direction="'vertical'"
      :grabCursor="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :loop="true"
      :slidesPerView="1"
      :spaceBetween="0"
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
      const images = Array.from({ length: 20 }, (_, index) => ({
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
    
  top: 10vh;
    width: 25vw;
    height: 25vh;
    overflow: visible;
    left: -200%;


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
      width: 80vw;
      height: 50vh;
    }
  }

  .film-frame {
  width: 300px;
  height: 200px;
  background-color: #000; /* Fondo del contenedor */
  border: 10px solid #222; /* Marco del contenedor */
  border-radius: 5px;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.film-frame:before,
.film-frame:after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 15px; /* Altura del área con perforaciones */
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 10px,
    #fff 10px,
    #fff 12px,
    transparent 12px
  );
  z-index: 1;
}

.film-frame:before {
  top: -15px; /* Se coloca fuera del marco */
}

.film-frame:after {
  bottom: -15px; /* Se coloca fuera del marco */
}
  </style>