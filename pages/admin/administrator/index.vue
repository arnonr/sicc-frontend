<template>
  <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="breadcrumb__list">
              <span> ผู้ดูแลระบบ </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span> รายการบุคลากร </span>
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
        <div class="col-12 col-lg-3">
          <input
            class="form-control"
            v-model="search.firstname_th"
            name="firstname_th"
            type="text"
            placeholder="ชื่อ (TH)"
          />
        </div>
        <div class="col-12 col-lg-3">
          <input
            class="form-control"
            v-model="search.firstname_en"
            name="firstname_en"
            type="text"
            placeholder="ชื่อ (EN)"
          />
        </div>

        <div
          class="col-12 col-lg-6"
          v-if="selectOptions.departments.length != 0"
        >
          <v-select
            label="title"
            placeholder="ฝ่ายงาน"
            :options="selectOptions.departments"
            v-model="search.department_id"
            class="form-control v-select-no-border"
            :clearable="true"
          ></v-select>
        </div>
      </div>
    </div>
  </section>

  <section class="portfolio__area pt-40 pb-40">
    <div class="container">
      <div class="mt-10 mb-30 pl-10 pt-15 pb-10 bg-grey">
        <h4>
          <i class="fa-regular fa-news"></i>
          <span class="ml-10">รายการบุคลากร</span>
        </h4>
      </div>
      <div class="mb-30">
        <button
          type="button"
          class="btn btn-warning"
          @click="
            () => {
             $router.push({ path: '/admin/administrator/add' });
            }
          "
        >
          <i class="fa-regular fa-plus"></i>
          ADD
        </button>
      </div>

      <div class="row gx-2 grid">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-bordered table-striped table-admin">
              <thead>
                <tr>
                  <th class="text-center"></th>
                  <th class="text-center">ชื่อ (TH)</th>
                  <th class="text-center">ชื่อ (EN)</th>
                  <th class="text-center">ฝ่ายงาน</th>
                  <th class="text-center">อีเมล</th>
                  <th class="text-center" style="min-width: 80px">ลำดับ</th>
                  <th class="text-center">สถานะ</th>
                  <th class="text-center">จัดการ</th>
                </tr>
              </thead>
              <tbody v-if="items.length != 0">
                <tr v-for="(it, idx) in items" :key="idx">
                  <td>
                    <img
                      :src="it.team_file"
                      alt=""
                      class="img-thumbnail"
                      style="width: 100px"
                    />
                  </td>
                  <td>
                    {{ it.prefix_th + it.firstname_th + " " + it.surname_th }}
                  </td>
                  <td>
                    {{ it.prefix_en + it.firstname_en + " " + it.surname_en }}
                  </td>
                  <td>
                    {{ it.department.name_th }}
                  </td>
                  <td>
                    {{ it.email }}
                  </td>
                  <td>
                    <button
                      class="btn btn-sm btn-info"
                      @click="onChangeLevel(it.id, 'up')"
                    >
                      <i class="fa fa-arrow-up"></i>
                    </button>
                    <button
                      class="btn btn-sm btn-warning ml-5"
                      @click="onChangeLevel(it.id, 'down')"
                    >
                      <i class="fa fa-arrow-down"></i>
                    </button>
                  </td>
                  <td class="text-center">
                    <span
                      v-if="it.is_publish != null"
                      :class="
                        'badge rounded-pill bg-' +
                        selectOptions.publishes[it.is_publish].color
                      "
                      >{{
                        selectOptions.publishes[it.is_publish].name_th
                      }}</span
                    >
                  </td>
                  <td class="text-center">
                    <NuxtLink
                      :to="{
                        name: 'admin-administrator-id',
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

// import tableItem from "~/components/list/TableItem.vue";
import BlogPagination from "~/components/common/pagination/BlogPagination.vue";
import booking_data from "~~/mixins/bookingData";
// Variable

dayjs.extend(buddhistEra);
// const route = useRoute();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const items = ref([]);
const perPage = ref(20);
const currentPage = ref(1);
const totalPage = ref(1);
const totalItems = ref(0);
const search = ref({});

const selectOptions = ref({
  perPage: [
    { title: "20", value: 20 },
    { title: "40", value: 40 },
    { title: "60", value: 60 },
  ],
  publishes: booking_data.data().publishes,
  departments: [],
});

// Function Fetch
const fetchDepartments = async () => {
  let data = await $fetch(`${runtimeConfig.public.apiBase}/department`, {
    params: {
      is_publish: 1,
    },
  }).catch((error) => error.data);

  selectOptions.value.departments = data.data.map((e) => {
    return { title: e.name_th, value: e.id };
  });
};

const fetchItems = async () => {
  let params = {
    ...search.value,
    department_id:
      search.value.department_id == null
        ? undefined
        : search.value.department_id.value,
    perPage: perPage.value,
    currentPage: currentPage.value,
    lang: "th",
  };

  let data = await $fetch(`${runtimeConfig.public.apiBase}/team`, {
    params: params,
  }).catch((error) => error.data);

  items.value = data.data;
  totalPage.value = data.totalPage;
  totalItems.value = data.totalData;
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
  fetchDepartments();
  fetchItems();
});

const onChangeLevel = async (id, type) => {
  await $fetch(runtimeConfig.public.apiBase + "/team/change-level/" + id, {
    method: "put",
    body: {
      type: type,
    },
  })
    .then((res) => {
      if (res.msg == "success") {
        useToast("แก้ไขข้อมูลเสร็จสิ้น", "success");
        fetchItems();
      } else {
        throw new Error("ERROR");
      }
    })
    .catch((error) => error.data);
};

useHead({
  title: "รายการบุคลากร",
});

definePageMeta({
  middleware: "auth",
});
</script>

<style scoped></style>
