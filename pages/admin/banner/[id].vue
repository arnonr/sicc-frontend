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
                <NuxtLink href="/admin/banner"> รายการ Banner </NuxtLink>
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
                            name: 'admin-banner-edit-id',
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
                          <span class="fw-bold">ชื่อ Banner (TH) : </span>
                          <span>{{ item.title_th }}</span>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">รูปภาพ Banner : </span>
                          <img
                            :src="item.banner_file"
                            class="mt-20"
                            style="max-height: 200px"
                          />
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">ลิงค์ Banner : </span>
                          <span>{{ item.banner_url }}</span>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">วันที่ลงข้อมูล : </span>
                          <span>{{
                            dayjs(item.created_banner)
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
                          <span class="fw-bold">ชื่อ Banner (EN) : </span>
                          <span>{{ item.title_en }}</span>
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
    `${runtimeConfig.public.apiBase}/banner/${route.params.id}`,
    {
      params: {
        lang: useCookie("lang").value,
      },
    }
  ).catch((error) => error.data);

  item.value = data.data;
};

onMounted(() => {
  fetchItem();
});

// Event
const onConfirmDelete = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
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
  await $fetch(`${runtimeConfig.public.apiBase}/banner/${id}`, {
    method: "delete",
  })
    .then((res) => {
      if (res.msg == "success") {
        useToast("ลบรายการเสร็จสิ้น", "success");
        router.push({ path: "/admin/banner" });
      } else {
        throw new Error("ERROR");
      }
    })
    .catch((error) => error.data);
};

useHead({
  title: "Banner",
});
</script>

<style scoped>
.breadcrumb__title {
  font-size: 50px;
}
</style>
