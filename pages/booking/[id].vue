<template>
  <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12" v-if="item != null">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="postbox__category">
              <NuxtLink
                :to="{
                  path: '/sample-submission',
                }"
                style="padding: 10px"
              >
                {{ $t("Sample Submission") }}
              </NuxtLink>
            </div>

            <div class="breadcrumb__list">
              <span class="breadcrumb-item-1">
                <NuxtLink
                  :to="{
                    path: '/',
                  }"
                >
                  {{ $t("Home") }}
                </NuxtLink>
              </span>
              <span class="dvdr breadcrumb-item-1"
                ><i class="fa-solid fa-circle-small"></i
              ></span>
              <span class="breadcrumb-item-1">
                <NuxtLink href="/equipment-and-rate">
                  {{ $t("Sample Submission") }}</NuxtLink
                >
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
          <div class="postbox__wrapper" v-if="item">
            <!-- Content -->
            <div class="postbox__main">
              <div class="row">
                <div class="col-lg-12">
                  <div class="postbox__main-wrapper">
                    <div class="postbox__details-content-wrapper">
                      <!-- <h3>{{ item.equipment_department.name }}</h3> -->
                      <h3>{{ item.title_en }}</h3>
                      <h3>{{ item.title_th }}</h3>
                    </div>

                    <div class="mt-30 pl-10 pt-15 pb-10 bg-grey">
                      <h4>
                        <i class="fa-solid fa-microscope"></i>
                        <span class="ml-10">{{ $t("Booking") }}</span>
                      </h4>
                    </div>

                    <div class="postbox__details-content-wrapper mt-20 row">
                      <div class="col-xxl-12 col-xl-12 col-lg-12">
                        <div>
                          <div v-if="checkSummary == true">
                            <div class="card" style="border: none">
                              <div class="card-body row">
                                <div class="col-lg-12">
                                  <span class="fw-bold text-dark"
                                    >เครื่องมือ/Scientific Instrument : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    item.title
                                  }}</span>

                                  <hr class="hr-dotted" />
                                </div>
                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >วันที่จอง/Booking Date : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    useCookie("lang") == "en"
                                      ? dayjs(booking.booking_date).format(
                                          "DD/MM/YYYY"
                                        )
                                      : dayjs(booking.booking_date)
                                          .locale("th")
                                          .format("DD MMM BBBB")
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >สถานะการจอง/Booking Status :
                                  </span>

                                  <span
                                    v-if="booking.booking_status_show"
                                    :class="
                                      'badge rounded-pill bg-' +
                                      booking.booking_status_show.color
                                    "
                                    data-v-eb4900e3=""
                                    >{{
                                      booking.booking_status_show.name
                                    }}</span
                                  >
                                  <hr class="hr-dotted" />
                                </div>

                                <div
                                  class="col-lg-12 mt-10"
                                  v-if="booking.status_id == 3"
                                >
                                  <span class="fw-bold text-dark"
                                    >หมายเหตุ :
                                  </span>
                                  <span>{{ booking.reject_comment }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >ข้อมูลตัวอย่าง/Example : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.example
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >รายการวิเคราะห์/Method List :
                                  </span>
                                  <br />

                                  <div class="mt-20">
                                    <div
                                      class="row"
                                      v-for="(
                                        it, index
                                      ) in booking.equipment_booking_method"
                                      :key="index"
                                    >
                                      <div class="col-lg-6 col-md-6">
                                        <span
                                          :style="
                                            index === 0
                                              ? 'padding-right: 12px'
                                              : 'padding-right: 8px'
                                          "
                                          >{{ index + 1 }}.</span
                                        >
                                        <span>{{
                                          it.name + " " + it.name_short
                                        }}</span>
                                      </div>
                                      <div class="col-lg-3 col-md-3 col-6">
                                        <span
                                          >{{ $t("Quantity") }}
                                          {{ it.quantity }}
                                          {{ it.unit }}</span
                                        >
                                      </div>
                                      <div class="col-lg-3 col-md-3 col-6">
                                        <span>
                                          {{ $t("Price") }}
                                          {{ it.total_price }}.00

                                          {{ $t("Bath") }}</span
                                        >
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <h4
                                      class="fw-bold text-center mt-20 mb-20 pt-20 pb-20 text-dark"
                                      style="background-color: #eee"
                                    >
                                      {{ $t("Total Price") }}
                                      {{ booking.total_price }}.00
                                      {{ $t("Bath") }}
                                    </h4>
                                  </div>

                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >ชื่อ-นามสกุล/Name Surname : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.prefix +
                                    booking.firstname +
                                    " " +
                                    booking.surname
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >สถานะ/Member Status : </span
                                  ><span class="text-color-primary fw-bold">
                                    {{ booking.member_status.name_th }}
                                  </span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >ชื่อหน่วยงาน/Organization : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.organization
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >ที่อยู่ที่สามารถติดต่อได้/Contact Address : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.contact_address
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-6 mt-10">
                                  <span class="fw-bold text-dark"
                                    >โทรศัพท์/Phone : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.phone
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-6 mt-10">
                                  <span class="fw-bold text-dark"
                                    >E-mail : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.email
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >เลขประจำตัวผู้เสียภาษี/Tax ID : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.tax_id
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >ที่อยู่ในการออกใบกำกับภาษี/ Invoice Address
                                    : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.invoice_address
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >ตำบล/อำเภอ/จังหวัด : </span
                                  ><span
                                    class="text-color-primary fw-bold"
                                  >{{ booking.address_all.label}}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >โทรศัพท์ที่สามารถติดต่อได้/Phone : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.phone2
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="text-center">
                                  <button
                                    class="btn btn-warning text-uppercase"
                                    @click="
                                      () => {
                                        $router.push({
                                          path: '/booking/edit/' + booking.id,
                                        });
                                      }
                                    "
                                    :disabled="
                                      booking.status_id > 1 ? true : false
                                    "
                                  >
                                    <i class="fa-regular fa-edit"></i>
                                    <span class="pl-5">Edit</span>
                                  </button>

                                  <button
                                    class="btn btn-danger warning text-uppercase ml-5"
                                    :disabled="
                                      booking.status_id > 1 ? true : false
                                    "
                                    @click="onConfirmDelete(booking.id)"
                                  >
                                    <i class="fa-regular fa-trash"></i>
                                    <span class="pl-5">cancle</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div v-else>
                            <h2 class="text-center mt-50 text-danger">
                              {{ text_summary_error }}
                            </h2>
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
    </div>
  </section>
</template>

<script setup>
import booking_data from "~~/mixins/bookingData";
import address_all_data from "~~/mixins/addressAllData";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import Swal from "sweetalert2";

import "@vuepic/vue-datepicker/dist/main.css";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

dayjs.extend(buddhistEra);
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

// Equipment
const item = ref(null);

const address_all = ref([]);

address_all.value = address_all_data.data().addresses.map((el) => {
  el.label =
    el.district + " > " + el.amphoe + " > " + el.province + " > " + el.zipcode;
  return el;
});


// Equipment_booking
const booking = ref({
  booking_date: dayjs(),
  example: "",
  equipment_booking_method: [],
  prefix: "",
  firstname: "",
  surname: "",
  member_status: null,
  period_time: null,
  organization: "",
  contact_address: "",
  phone: "",
  phone2: "",
  email: "",
  invoice_address: "",
  district_code: null,
  tax_id: "",
  total_price: 0,
  status_id: 1,
  is_publish: 1,
  address_all: "",
});
const equipmentMethod = ref([]);
const checkSummary = ref(false);
const text_summary_error = ref("");

const selectOptions = ref({
  member_statuses: booking_data.data().member_statuses,
  booking_statuses: booking_data.data().booking_statuses,
  period_times: booking_data.data().period_times,
  address_all: address_all,
});

// Function Fetch
const { data: res1 } = await useAsyncData("booking", async () => {
  let data = await $fetch(
    `${runtimeConfig.public.apiBase}/booking/${route.params.id}`,
    {
      params: {
        lang: useCookie("lang").value,
      },
    }
  );
  return data;
});

booking.value = res1.value.data;

booking.value.address_all = address_all.value.find((x) => {
  return x.district_code == booking.value.district_code;
});

const { data: res } = await useAsyncData("equipment", async () => {
  let data = await $fetch(
    `${runtimeConfig.public.apiBase}/equipment/${res1.value.data.equipment_id}`,
    {
      params: {
        lang: useCookie("lang").value,
      },
    }
  );

  return data;
});

item.value = res.value.data;

const { data: resEquipmentMethod } = await useAsyncData(
  "equipmentMethod",
  async () => {
    let data = await $fetch(
      `${runtimeConfig.public.apiBase}/equipment-method`,
      {
        params: {
          is_publish: 1,
          equipment_id: res1.value.data.equipment_id,
          lang: useCookie("lang").value,
          perPage: 100
        },
      }
    );

    return data;
  }
);

equipmentMethod.value = resEquipmentMethod.value.data;

// Method

const onLoadEquipmentBookingMethod = () => {
  if (booking.value.equipment_booking_method.length != 0) {
    booking.value.equipment_method = booking.value.equipment_booking_method.map(
      (x) => {
        let equipment_method = equipmentMethod.value.find((em) => {
          return x.equipment_method_id == em.id;
        });

        x.name = equipment_method.name;
        x.name_short = equipment_method.name_short;
        x.total_price = x.price;
        x.unit = equipment_method.unit;

        return x;
      }
    );

    booking.value.total_price = booking.value.price;
  }
};

onMounted(() => {
  booking.value.equipment_method = [];
  if (booking.value.period_time) {
    let period_time = booking.value.period_time;
    booking.value.period_time =
      selectOptions.value.period_times[period_time - 1];
  }
  if (booking.value.booking_date) {
    booking.value.booking_date = dayjs(booking.value.booking_date);
  }

  let booking_status = selectOptions.value.booking_statuses.find((p) => {
    return p.id == booking.value.status_id;
  });

  booking.value.booking_status_show = {
    name:
      useCookie("lang").value == "en"
        ? booking_status.name_en
        : booking_status.name_th,
    color: booking_status.color,
  };

  if (booking.value.member_status) {
    let member_status = booking.value.member_status;
    booking.value.member_status =
      selectOptions.value.member_statuses[member_status - 1];
  }

  onLoadEquipmentBookingMethod();

  checkSummary.value = true;
});

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
  await $fetch(`${runtimeConfig.public.apiBase}/booking/${id}`, {
    method: "put",
    body: {
      status_id: 4,
    },
  })
    .then((res) => {
      if (res.msg == "success") {
        localStorage.setItem("deleted", 1);
        router.push({
          path: "/booking",
        });
      } else {
        console.log("error");
      }
    })
    .catch((error) => error.data);
};

useHead({
  title: item.value.title,
});
</script>

<style scoped>
.breadcrumb__title {
  font-size: 50px;
}

.table-method tbody tr td {
  vertical-align: middle;
}

.hr-dotted {
  border-top: 1px dotted #aaa;
}
</style>
