<template>
    <client-only>
        <section class="slider__area p-relative" v-if="items.length != 0">
            <swiper
                class="slider__active-12 slider__height-12 swiper-fullwidth"
                :slidesPerView="1"
                :spaceBetween="0"
                :effect="'fade'"
                :loop="true"
                :modules="modules"
                :autoplay="{
                    delay: 5000,
                    disableOnInteraction: true,
                }"
                :pagination="{
                    clickable: true,
                }"
                :navigation="{
                    nextEl: '.slider-button-12-next',
                    prevEl: '.slider-button-12-prev',
                }"
                v-if="items.length != 0"
            >
                <swiper-slide
                    v-for="it in items"
                    :key="it.id"
                >
                <!-- :class="`slider__item-12 slider__bg-12 ${it.bg} d-flex align-items-center`" -->
                    <a :href="it.banner_url">
                        <img
                            :src="it.banner_file"
                            :alt="it.title"
                            style="width: 100%"
                        />
                    </a>
                </swiper-slide>

                <div class="slider-pagination-12 tp-swiper-fraction"></div>
                <div
                    class="slider__nav-arrow-12 d-flex flex-column d-none d-md-block"
                >
                    <button class="slider-button-12-next">
                        <i class="fa-regular fa-chevron-right"></i>
                    </button>
                    <button class="slider-button-12-prev">
                        <i class="fa-regular fa-chevron-left"></i>
                    </button>
                </div>
            </swiper>
        </section>
    </client-only>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
    EffectFade,
    Mousewheel,
    Navigation,
    Pagination,
    Autoplay,
} from "swiper";
export default {
    components: { Swiper, SwiperSlide },
    async setup() {
        const runtimeConfig = useRuntimeConfig();
        const renderFraction = (currentClass, totalClass) => {
            return `<span class="${currentClass}"></span>
                <span class="tp-swiper-fraction-divide"></span>
              <span class="${totalClass}"></span>`;
        };

        const items = ref([]);
        const { data: res } = await useAsyncData("banner", async () => {
            let data = await $fetch(`${runtimeConfig.public.apiBase}/banner`, {
                params: {
                    perPage: 20,
                    currentPage: 1,
                    is_publish: 1,
                },
            });
            return data;
        });

        items.value = res.value.data;

        return {
            items,
            renderFraction,
            modules: [EffectFade, Mousewheel, Navigation, Pagination, Autoplay],
        };
    },
};
</script>

<style scoped>
.slider__height-12 {
    height: auto !important;
}

.slider__bg-12 {
    background: #fff;
}

.slider__nav-arrow-12 button {
    border-radius: 50%;
}
</style>
