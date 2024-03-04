<template>
  <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12" v-if="item != null">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="breadcrumb__list">
              <span> ผู้ดูแลระบบ </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span>
                <NuxtLink href="/admin/about-us"> รายการเกี่ยวกับเรา </NuxtLink>
              </span>
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
                            name: 'admin-about-us-edit-id',
                            params: { id: item.id },
                          }"
                          class="btn btn-warning"
                          >Edit</NuxtLink
                        >
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
                          <span class="fw-bold">หัวข้อ : </span>
                          <span>{{ item.title_th }}</span>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">รายละเอียด : </span>
                          <div v-html="item.detail_th"></div>
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
                          <span class="fw-bold">หัวข้อ : </span>
                          <span>{{ item.title_en }}</span>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">รายละเอียด : </span>
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

const item = ref(null);

// Fetch
const fetchItem = async () => {
  let data = await $fetch(
    `${runtimeConfig.public.apiBase}/about/${route.params.id}`,
    {
      params: {
        lang: "th",
      },
    }
  ).catch((error) => error.data);

  item.value = data.data;
};

onMounted(() => {
  fetchItem();
});

// Event

useHead({
  title: "About Us",
});
</script>

<style scoped>
.breadcrumb__title {
  font-size: 50px;
}
</style>
