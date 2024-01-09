<template>
  <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="breadcrumb__list">
              <span> ผู้ดูแลระบบ </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span> ระบบจอง </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span> รายการจอง </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="portfolio__area pt-40">
    <div class="container">
      <div class="mt-10 mb-30 pl-10 pt-15 pb-10 bg-grey">
        <h4>
          <i class="fa-solid fa-search"></i>
          <span class="ml-10">ค้นหา</span>
        </h4>
      </div>

      <div class="row">
        <div
          class="col-12 col-lg-6"
          v-if="selectOptions.equipments.length != 0"
        >
          <v-select
            label="title"
            placeholder="เครื่องมือ"
            :options="selectOptions.equipments"
            v-model="search.equipment_id"
            class="form-control v-select-no-border"
            :clearable="true"
          ></v-select>
        </div>

        <div
          class="col-12 col-lg-6"
          v-if="selectOptions.booking_statuses.length != 0"
        >
          <v-select
            label="name_th"
            placeholder="สถานะการจอง"
            :options="selectOptions.booking_statuses"
            v-model="search.status_id"
            class="form-control v-select-no-border"
            :clearable="true"
          ></v-select>
        </div>

        <div class="col-12 col-lg-4">
          <input
            class="form-control"
            v-model="search.firstname"
            name="firstname"
            type="text"
            placeholder="ชื่อ"
          />
        </div>

        <div class="col-12 col-lg-4">
          <input
            class="form-control"
            v-model="search.surname"
            name="surname"
            type="text"
            placeholder="นามสกุล"
          />
        </div>

        <div class="col-12 col-lg-4">
          <input
            class="form-control"
            v-model="search.email"
            name="email"
            type="text"
            placeholder="เมล"
          />
        </div>

        <div class="col-12 col-lg-4">
          <input
            class="form-control"
            v-model="search.organization"
            name="organization"
            type="text"
            placeholder="หน่วยงาน"
          />
        </div>

        <div
          class="col-12 col-lg-4"
          v-if="selectOptions.member_statuses.length != 0"
        >
          <v-select
            label="name_th"
            placeholder="สถานะสมาชิก"
            :options="selectOptions.member_statuses"
            v-model="search.member_status"
            class="form-control v-select-no-border"
            :clearable="true"
          ></v-select>
        </div>

        <div class="col-12 col-lg-4 mt-1">
          <VueDatePicker
            v-model="search.booking_date"
            :enable-time-picker="false"
            placeholder="วันที่จอง"
            locale="th"
            auto-apply
            :format="format"
          >
            <template #year-overlay-value="{ text }">
              {{ parseInt(text) + 543 }}
            </template>
            <template #year="{ value }">
              {{ value + 543 }}
            </template>
          </VueDatePicker>
        </div>

        <div class="col-12 col-lg-4">
          <!-- <v-select
            label="title"
            placeholder="สถานะการจอง"
            :options="selectOptions.booking_statuses"
            v-model="search.status"
            class="form-control v-select-no-border"
            :clearable="true"
          ></v-select> -->
        </div>
      </div>
    </div>
  </section>

  <section class="portfolio__area pt-40 pb-40">
    <div class="container">
      <div class="mt-10 mb-30 pl-10 pt-15 pb-10 bg-grey">
        <h4>
          <i class="fa-regular fa-news"></i>
          <span class="ml-10">รายการจอง</span>
        </h4>
      </div>
      <div class="mb-30">
        <!-- <button
          type="button"
          class="btn btn-warning"
          @click="
            () => {
             $router.push({ path: '/admin/booking/add' });
            }
          "
        >
          <i class="fa-regular fa-plus"></i>
          ADD
        </button> -->
      </div>

      <div class="row gx-2 grid">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-bordered table-striped table-admin">
              <thead>
                <tr>
                  <th class="text-center">รายการ</th>
                  <th class="text-center">วันที่จอง</th>
                  <th class="text-center">ช่วงเวลา</th>
                  <th class="text-center">ชื่อผู้จอง</th>
                  <th class="text-center">หน่วยงาน</th>
                  <th class="text-center">สถานะ</th>
                  <th class="text-center">จัดการ</th>
                </tr>
              </thead>
              <tbody v-if="items.length != 0">
                <tr v-for="(it, idx) in items" :key="idx">
                  <td>{{ it.equipment.title }}</td>
                  <td class="text-center">
                    {{ it.booking_date_show }}
                  </td>
                  <td class="text-center">{{ it.period_time_show }}</td>
                  <td class="text-center">
                    {{ it.prefix + it.firstname + " " + it.surname }}
                  </td>
                  <td class="text-center">{{ it.organization }}</td>
                  <th class="text-center">
                    <span
                      v-if="it.booking_status_show"
                      :class="
                        'badge rounded-pill bg-' + it.booking_status_show.color
                      "
                      data-v-eb4900e3=""
                      >{{ it.booking_status_show.name }}</span
                    >
                  </th>
                  <td class="text-center">
                    <NuxtLink
                      :to="{
                        name: 'admin-booking-id',
                        params: { id: it.id },
                      }"
                      class="btn btn-warning text-uppercase"
                    >
                      <i class="fa-regular fa-edit"></i>
                    </NuxtLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="col-xxl-12">
        <div class="tp-pagination mt-30">
          <blog-pagination
            :totalPage="totalPage"
            :currentPage="currentPage"
            @update:currentPage="currentPage = $event"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

// import tableItem from "~/components/list/TableItem.vue";
import BlogPagination from "~/components/common/pagination/BlogPagination.vue";
import booking_data from "~~/mixins/bookingData";
// Variable

dayjs.extend(buddhistEra);
// const route = useRoute();
// const router = useRouter();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const items = ref([]);
const perPage = ref(20);
const currentPage = ref(1);
const totalPage = ref(1);
const totalItems = ref(0);
const search = ref({
  booking_date: "",
});

const selectOptions = ref({
  perPage: [
    { title: "20", value: 20 },
    { title: "40", value: 40 },
    { title: "60", value: 60 },
  ],
  equipments: [],
  years: [],
  months: [
    { title: "มกราคม", title_en: "January", value: "01" },
    { title: "กุมภาพันธ์", title_en: "February", value: "02" },
    { title: "มีนาคม", title_en: "March", value: "03" },
    { title: "เมษายน", title_en: "April", value: "04" },
    { title: "พฤษภาคม", title_en: "May", value: "05" },
    { title: "มิถุนายน", title_en: "June", value: "06" },
    { title: "กรกฎาคม", title_en: "July", value: "07" },
    { title: "สิงหาคม", title_en: "August", value: "08" },
    { title: "กันยายน", title_en: "September", value: "09" },
    { title: "ตุลาคม", title_en: "October", value: "10" },
    { title: "ฑฤศจิกายน", title_en: "November", value: "11" },
    { title: "ธันวาคม", title_en: "December", value: "12" },
  ],
  member_statuses: booking_data.data().member_statuses,
  period_times: booking_data.data().period_times,
  booking_statuses: booking_data.data().booking_statuses,
});

const format = (date) => {
  const day = dayjs(date).locale("th").format("DD");
  const month = dayjs(date).locale("th").format("MMM");
  const year = date.getFullYear() + 543;

  return `${day} ${month} ${year}`;
};

let year = dayjs().year();

for (let i = 0; i <= 9; i++) {
  selectOptions.value.years.push({
    title: year - i + 543,
    title_en: year - i,
    value: year - i,
  });
}

const orderBooking = () => {
  items.value = items.value.map((x) => {
    x.booking_date_show = dayjs(x.booking_date)
      .locale("th")
      .format("DD MMM BB");

    let period_time = selectOptions.value.period_times.find((p) => {
      return p.id == x.period_time;
    });

    x.period_time_show = period_time.name_th;

    let booking_status = selectOptions.value.booking_statuses.find((p) => {
      return p.id == x.status_id;
    });

    x.booking_status_show = {
      name: booking_status.name_th,
      color: booking_status.color,
    };

    return x;
  });
};

// Function Fetch
const fetchEquipments = async () => {
  let data = await $fetch(`${runtimeConfig.public.apiBase}/equipment`, {
    params: {
      is_publish: 1,
      lang: "th",
    },
  }).catch((error) => error.data);

  selectOptions.value.equipments = data.data.map((e) => {
    return { title: e.title_th, value: e.id };
  });
};

const fetchItems = async () => {
  let params = {
    ...search.value,
    equipment_id:
      search.value.equipment_id == null
        ? undefined
        : search.value.equipment_id.value,
    status_id:
      search.value.status_id == null ? undefined : search.value.status_id.value,
    member_status:
      search.value.member_status == null
        ? undefined
        : search.value.member_status.value,
    booking_date:
      search.value.booking_date != "" && search.value.booking_date != null
        ? dayjs(search.value.booking_date).format("YYYY-MM-DD")
        : undefined,
    perPage: perPage.value,
    currentPage: currentPage.value,
    lang: "th",
  };

  let data = await $fetch(`${runtimeConfig.public.apiBase}/booking`, {
    params: params,
  }).catch((error) => error.data);

  items.value = data.data;
  totalPage.value = data.totalPage;
  totalItems.value = data.totalData;

  orderBooking();
};

// Watch
watch(
  [currentPage, search],
  () => {
    fetchItems();
  },
  { deep: true }
);

watchEffect(() => {
  if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});

// Event
onMounted(() => {
  fetchEquipments();
  fetchItems();
});

useHead({
  title: "รายการจอง",
});

definePageMeta({
  middleware: "auth",
});
</script>

<style scoped></style>
