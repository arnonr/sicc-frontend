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
                <NuxtLink href="/admin/user">รายการผู้ใช้งาน</NuxtLink>
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
                            name: 'admin-user-edit-id',
                            params: { id: item.id },
                          }"
                          v-if="
                            useCookie('user').value.group_id == 1 ||
                            item.user.group_id == null ||
                            (useCookie('user').value.group_id == 3 &&
                              item.user.group_id != 1)
                          "
                          class="btn btn-warning"
                          >Edit
                        </NuxtLink>
                      </div>
                    </div>

                    <div class="mt-30 mb-30 pl-10 pt-15 pb-10 bg-grey">
                      <h4>
                        <i class="fa-solid fa-book"></i>
                        <span class="ml-10">ข้อมูลผู้ใช้งาน</span>
                      </h4>
                    </div>

                    <div class="postbox__details-content-wrapper mt-20">
                      <div class="row">
                        <div class="col-12">
                          <span class="fw-bold">ชื่อ-นามสกุล : </span>
                          <span>{{
                            item.prefix + item.firstname + " " + item.surname
                          }}</span>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">ประเภทผู้ใช้งาน : </span>
                          <span>{{
                            selectOptions.member_statuses[
                              item.member_status - 1
                            ].name_th
                          }}</span>
                          <hr />
                        </div>

                        <div class="col-12">
                          <span class="fw-bold">กลุ่มผู้ใช้งาน : </span>
                          <span>{{
                            item.user.group_id == 1
                              ? "ADMIN"
                              : item.user.group_id == 3
                              ? "STAFF"
                              : "USER"
                          }}</span>
                          <hr />
                        </div>

                        <div class="col-12">
                          <span class="fw-bold">สถานะ : </span>
                          <span
                            v-if="item.user.status != null"
                            :class="
                              'badge rounded-pill bg-' +
                              selectOptions.user_statuses[item.user.status]
                                .color
                            "
                            >{{
                              selectOptions.user_statuses[item.user.status]
                                .name_th
                            }}</span
                          >

                          <hr />
                        </div>

                        <div class="col-12">
                          <span class="fw-bold">หน่วยงาน : </span>
                          <span>{{ item.organization }}</span>
                          <hr />
                        </div>

                        <div class="col-12">
                          <span class="fw-bold"
                            >ที่อยู่ที่สามารถติดต่อได้ :
                          </span>
                          <span>{{ item.contact_address }}</span>
                          <hr />
                        </div>

                        <div class="col-12">
                          <span class="fw-bold">โทรศัพท์ : </span>
                          <span>{{ item.phone }}</span>
                          <hr />
                        </div>

                        <div class="col-12">
                          <span class="fw-bold">E-mail : </span>
                          <span>{{ item.user.email }}</span>
                          <hr />
                        </div>

                        <div class="col-12">
                          <span class="fw-bold"
                            >ชื่อในการออกใบกำกับภาษี :
                          </span>
                          <span>{{ item.invoice_name }}</span>
                          <hr />
                        </div>

                        <div class="col-12">
                          <span class="fw-bold">ที่อยู่ออกใบกำกับภาษี : </span>
                          <span>{{ item.invoice_address }}</span>
                          <hr />
                        </div>

                        <div class="col-12">
                          <span class="fw-bold">เลขประจำตัวผู้เสียภาษี : </span>
                          <span>{{ item.tax_id }}</span>
                          <hr />
                        </div>

                        <!-- <div class="col-12">
                          <span class="fw-bold">ประเภทข่าว : </span>
                          <span>{{ item.news_type.name }}</span>
                          <hr />
                        </div>
                        <div class="col-12">
                          <span class="fw-bold">เนื้อหาข่าว : </span>
                          <div v-html="item.detail_th"></div>
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
                        </div> -->
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

const selectOptions = ref({
  publishes: booking_data.data().publishes,
  member_statuses: booking_data.data().member_statuses,
  user_statuses: booking_data.data().user_statuses,
});

// Fetch
const fetchItem = async () => {
  let data = await $fetch(
    `${runtimeConfig.public.apiBase}/profile/${route.params.id}`,
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

definePageMeta({
  middleware: "auth",
});

// Event
useHead({
  title: "Users",
});

</script>

<style scoped>
.breadcrumb__title {
  font-size: 50px;
}
</style>
