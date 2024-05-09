<template>
  <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12" v-if="item != null">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="breadcrumb__list">
              <span> ผู้ดูแลระบบ </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span> <NuxtLink href="/admin/news"> รายการข่าว </NuxtLink></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  -->
  <section class="postbox__area pt-40 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="postbox__wrapper" v-if="item != null">
            <!-- Image -->
            <!-- <div class="postbox__top">
                
              </div> -->
            <!-- Content -->
            <div class="postbox__main">
              <div class="row">
                <div class="col-lg-12">
                  <div class="postbox__main-wrapper">
                    <div class="postbox__details-content-wrapper">
                      <div class="text-end">
                        <NuxtLink
                          :to="{
                            name: 'admin-news-edit-id',
                            params: { id: item.id },
                          }"
                          class="btn btn-warning"
                          >Edit</NuxtLink
                        >

                        <button
                          class="btn btn-danger ml-5"
                          v-if="useCookie('user').value && useCookie('user').value.group_id == 1"
                          @click="onConfirmDelete(item.id)"
                        >
                          Delete
                        </button>
                      </div>
                    </div>

                    <div class="mt-30 mb-30 pl-10 pt-15 pb-10 bg-grey">
                      <h4>
                        <i class="fa-solid fa-book"></i>
                        <span class="ml-10">Thai</span>
                      </h4>
                    </div>

                    <div class="postbox__details-content-wrapper mt-20">
                      <div class="row">
                        <div class="col-12">
                          <span class="fw-bold">หัวข้อข่าว : </span>
                          <span>{{ item.title_th }}</span>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">ประเภทข่าว : </span>
                          <span>{{ item.news_type.name }}</span>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">รูปภาพปกข่าว : </span>
                          <div>
                            <img
                              :src="item.news_file"
                              class="mt-20"
                              style="max-height: 400px"
                            />
                          </div>

                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">เนื้อหาข่าว : </span>
                          <div v-html="item.detail_th"></div>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">วันที่ลงข้อมูล : </span>
                          <span>{{
                            dayjs(item.created_news)
                              .locale("th")
                              .format("DD MMM BBBB")
                          }}</span>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">สถานะ : </span>

                          <span
                            v-if="item.is_publish != null"
                            :class="
                              'badge rounded-pill bg-' +
                              booking_data.data().publishes[item.is_publish]
                                .color
                            "
                            >{{
                              booking_data.data().publishes[item.is_publish]
                                .name_th
                            }}</span
                          >

                          <hr />
                        </div>

                        <div class="col-12">
                          <span class="fw-bold">แกลลอรี่ : </span>
                          <div class="mx-auto">
                            <ClientOnly>
                              <Swiper
                                :slidesPerView="1"
                                :spaceBetween="10"
                                :loop="true"
                                :thumbs="{ swiper: thumbsSwiper }"
                                :navigation="true"
                                :modules="modules"
                                :speed="5000"
                                :autoplay="{
                                  delay: 5000,
                                  disableOnInteraction: true,
                                }"
                                class="mySwiper2 mb-10"
                                v-if="gallery.length != 0"
                              >
                                <SwiperSlide v-for="ng in gallery" :key="ng.id">
                                  <img
                                    :src="ng.news_gallery_file"
                                    style="
                                      max-width: 800px;
                                      margin-left: auto;
                                      margin-right: auto;
                                      display: block;
                                    "
                                  />
                                </SwiperSlide>
                              </Swiper>

                              <Swiper
                                @swiper="setThumbsSwiper"
                                :spaceBetween="10"
                                :slidesPerView="4"
                                :freeMode="true"
                                :watchSlidesProgress="true"
                                :modules="modules"
                                class="mySwiper"
                              >
                                <SwiperSlide v-for="ng in gallery" :key="ng.id">
                                  <img
                                    :src="ng.news_gallery_file"
                                    style="max-width: 200px; cursor: pointer"
                                  />
                                </SwiperSlide>
                              </Swiper>
                            </ClientOnly>
                          </div>

                          <hr />
                        </div>
                      </div>
                    </div>

                    <div class="mt-30 mb-30 pl-10 pt-15 pb-10 bg-grey">
                      <h4>
                        <i class="fa-solid fa-book"></i>
                        <span class="ml-10">English</span>
                      </h4>
                    </div>

                    <div class="postbox__details-content-wrapper mt-20">
                      <div class="row">
                        <div class="col-12">
                          <span class="fw-bold">หัวข้อข่าว : </span>
                          <span>{{ item.title_en }}</span>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">เนื้อหาข่าว : </span>
                          <div v-html="item.detail_en"></div>
                          <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from "swiper";
import dayjs from "dayjs";
import "dayjs/locale/th";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import booking_data from "~~/mixins/bookingData";

import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();
const modules = [Autoplay, FreeMode, Navigation, Pagination, Scrollbar, Thumbs];

const gallery = ref([]);
const thumbsSwiper = ref(null);

const item = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

// Fetch
const fetchGallery = async () => {
  let data = await $fetch(`${runtimeConfig.public.apiBase}/news-gallery`, {
    params: {
      is_publish: 1,
      news_id: route.params.id,
    },
  }).catch((error) => error.data);

  gallery.value = data.data;
};

const fetchItem = async () => {
  let data = await $fetch(
    `${runtimeConfig.public.apiBase}/news/${route.params.id}`,
    {
      params: {
        lang: "th",
      },
    }
  ).catch((error) => error.data);

  item.value = data.data;
};

onMounted(() => {
  fetchGallery();
  fetchItem();
});

// Event
const onConfirmDelete = async (id) => {
  Swal.fire({
    title: "ยืนยันการลบข้อมูล",
    text: "หลังจากลบข้อมูลแล้วไม่สามารถกลับมาแก้ไขได้",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Cancle it!",
  }).then((result) => {
    if (result.isConfirmed) {
      onDelete(id);
    }
  });
};

const onDelete = async (id) => {
  await $fetch(`${runtimeConfig.public.apiBase}/news/${id}`, {
    method: "delete",
  })
    .then((res) => {
      if (res.msg == "success") {
        useToast("ลบรายการเสร็จสิ้น", "success");
        router.push({ path: "/admin/news" });
      } else {
        throw new Error("ERROR");
      }
    })
    .catch((error) => error.data);
};

useHead({
  title: "News",
});
</script>

<style scoped>
.breadcrumb__title {
  font-size: 50px;
}
</style>
