<template>
  <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="breadcrumb__list">
              <!-- Span -->
              <span>
                <NuxtLink
                  :to="{
                    path: '/',
                  }"
                >
                  {{ $t("Home") }}
                </NuxtLink>
              </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span> {{ $t("Booking List") }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="portfolio__area pt-40 pb-40">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12 mb-20">
          <h3>{{ $t("Booking List") }}</h3>
        </div>
      </div>
      <div class="row gx-2 grid">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th class="text-center">รายการ</th>
                  <th class="text-center">วันที่จอง</th>
                  <th class="text-center">ช่วงเวลา</th>
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
                        name: 'booking-id',
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

            <div class="text-secondary">
              หมายเหตุ: รายการจองที่ได้รับการอนุมัติแล้วไม่สามารถยกเลิกเองได้
            </div>
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
// Import
// import tableItem from "~/components/list/TableItem.vue";
import BlogPagination from "~/components/common/pagination/BlogPagination.vue";
import booking_data from "~~/mixins/bookingData";
// Variable

dayjs.extend(buddhistEra);
const route = useRoute();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const items = ref([]);
const perPage = ref(12);
const currentPage = ref(1);
const totalPage = ref(1);
const totalItems = ref(0);
const search = ref({
  is_publish: 1,
  user_id: null,
});

const selectOptions = ref({
  perPage: [
    { title: "20", value: 20 },
    { title: "40", value: 40 },
    { title: "60", value: 60 },
  ],
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

let year = dayjs().year();

for (let i = 0; i <= 9; i++) {
  selectOptions.value.years.push({
    title: year - i + 543,
    title_en: year - i,
    value: year - i,
  });
}

// Function Fetch
const { data: res } = await useAsyncData("booking", async () => {
  let params = {
    ...search.value,
    equipment_department_id:
      search.value.equipment_department == null
        ? undefined
        : search.value.equipment_department.value,
    created_year:
      search.value.created_year == null
        ? undefined
        : search.value.created_year.value,
    created_month:
      search.value.created_month == null
        ? undefined
        : search.value.created_month.value,
    perPage: perPage.value,
    currentPage: currentPage.value,
    lang: useCookie("lang").value,
  };

  if (useCookie("user").value.group_id != 1 || useCookie("user").value.group_id != 3) {
    params["user_id"] = useCookie("user").value.id;
  }

  let data = await $fetch(`${runtimeConfig.public.apiBase}/booking`, {
    params: params,
  });

  items.value = data.data;
  totalPage.value = data.totalPage;
  totalItems.value = data.totalData;
  return data;
});

const orderBooking = () => {
  items.value = res.value.data.map((x) => {
    x.booking_date_show =
      useCookie("lang").value == "en"
        ? dayjs(x.booking_date).format("DD/MM/YY")
        : dayjs(x.booking_date).locale("th").format("DD MMM BB");

    let period_time = selectOptions.value.period_times.find((p) => {
      return p.id == x.period_time;
    });

    x.period_time_show =
      useCookie("lang").value == "en"
        ? period_time.name_en
        : period_time.name_th;

    let booking_status = selectOptions.value.booking_statuses.find((p) => {
      return p.id == x.status_id;
    });

    x.booking_status_show = {
      name:
        useCookie("lang").value == "en"
          ? booking_status.name_en
          : booking_status.name_th,
      color: booking_status.color,
    };

    return x;
  });
};

orderBooking();

totalPage.value = res.value.totalPage;
totalItems.value = res.value.totalData;

watch(
  [currentPage, search],
  () => {
    refreshNuxtData("booking");
    orderBooking();
  },
  { deep: true }
);

onMounted(() => {
  // window.scrollTo({ top: 0, behavior: "smooth" });
});

watchEffect(() => {
  if (currentPage.value > totalPage.value) currentPage.value = totalPage.value;
});

watch([res], () => {
  if (Array.isArray(res.value.data)) {
    orderBooking();
  }
});

if (process.client) {
  if (localStorage.getItem("added")) {
    useToast("เพิ่มรายการจองเสร็จสิ้น", "success");
    localStorage.removeItem("added");
  }

  if (localStorage.getItem("deleted")) {
    useToast("ยกเลิกรายการแล้ว", "success");
    localStorage.removeItem("deleted");
  }

  if (localStorage.getItem("updated")) {
    useToast("แก้ไขรายการจองเสร็จสิ้น", "success");
    localStorage.removeItem("updated");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// watch([resEquipmentDepartment], () => {
//   selectOptions.value.equipment_departments = resEquipmentDepartment.value.data;
// });

useHead({
  title:
    "รายการจอง เครื่องมือวิทยาศาสตร์และคอมพิวเตอร์สมรรถนะสูง คณะวิทยาศาสตร์ประยุกต์",
});

definePageMeta({
  middleware: "auth",
});
</script>

<style scoped></style>
