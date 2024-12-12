<template>
  <div class="pictures">
    <Swiper
      :initialSlide="10"
      :loop="true"
      :centeredSlides="true"
      
      :slidesBeforeOffset="5"
      :slidesAfterOffset="5"
      :slidesPerView="1"
      :spaceBetween="10"
      :modules="modules"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      @slideChange="onSlideChange"
      class="mySwiper"
    >
      <Swiper-slide v-for="image in images" :key="image.id" >
        <img class="film-frame" :src="image.url" alt="Placeholder Image" />
      </Swiper-slide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";

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
    fetchImages(startIndex = 0) {
      // Genera imágenes dinámicamente según el índice inicial
      const newImages = Array.from({ length: 20 }, (_, index) => ({
        id: startIndex + index + 1,
        url: `https://picsum.photos/300/200?random=${startIndex + index}`,
      }));
      this.images.push(...newImages);
    },
    onSlideChange(swiper) {
      const currentIndex = swiper.realIndex;
      const totalSlides = this.images.length;

      // Si estamos cerca del final, carga más slides
      if (currentIndex >= totalSlides - 3) {
        
        
        
      }
    },
  },
};
</script>

<style>
.swiper {
  width: 25vw;
  height: 25vh;
  overflow: visible;
  left:35vw;
}

.swiper-slide {
  width: 100%;
  height: 100%;
  overflow: visible;
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
