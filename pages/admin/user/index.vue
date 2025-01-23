<template>
  <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="breadcrumb__list">
              <span> ผู้ดูแลระบบ </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span> รายการผู้ใช้งาน </span>
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
            v-model="search.organization"
            name="organization"
            type="text"
            placeholder="หน่วยงาน"
          />
        </div>

        <div class="col-12 col-lg-4">
          <v-select
            label="name_th"
            placeholder="ประเภทสมาชิก"
            :options="selectOptions.member_statuses"
            id="slt-member-status"
            v-model="search.member_status"
            class="form-control v-select-no-border"
            :clearable="true"
          ></v-select>
        </div>

        <div class="col-12 col-lg-4">
          <v-select
            label="name"
            placeholder="กลุ่มผู้ใช้งาน"
            :options="[
              { id: 1, value: 1, name: 'ADMIN' },
              { id: 2, value: 2, name: 'USER' },
              { id: 3, value: 3, name: 'STAFF' },
            ]"
            id="slt-group_id"
            v-model="search.group_id"
            class="form-control v-select-no-border"
            :clearable="true"
          ></v-select>
        </div>

        <div class="col-12 col-lg-4">
          <v-select
            label="name_th"
            placeholder="สถานะ"
            :options="selectOptions.user_statuses"
            id="slt-group_id"
            v-model="search.status"
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
          <span class="ml-10">รายการผู้ใช้งาน</span>
        </h4>
      </div>
      <!-- <div class="mb-30">
        <button
          type="button"
          class="btn btn-warning"
          @click="
            () => {
              router.push({ path: '/admin/user/add' });
            }
          "
        >
          <i class="fa-regular fa-plus"></i>
          ADD
        </button>
      </div> -->

      <div class="row gx-2 grid">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table table-bordered table-striped table-admin">
              <thead>
                <tr>
                  <th class="text-center">ชื่อ</th>
                  <th class="text-center">นามสกุล</th>
                  <th class="text-center">email</th>
                  <th class="text-center">หน่วยงาน</th>
                  <th class="text-center">ประเภทสมาชิก</th>
                  <th class="text-center">กลุ่มผู้ใช้งาน</th>
                  <th class="text-center">สถานะ</th>
                  <th class="text-center">จัดการ</th>
                </tr>
              </thead>
              <tbody v-if="items.length != 0">
                <tr v-for="(it, idx) in items" :key="idx">
                  <td>{{ it.firstname }}</td>
                  <td>{{ it.surname }}</td>
                  <td>{{ it.user.email }}</td>
                  <td>{{ it.organization }}</td>
                  <td class="text-center">
                    {{
                      selectOptions.member_statuses[it.member_status - 1]
                        .name_th
                    }}
                  </td>
                  <td class="text-center">
                    {{ it.user.group_id == 1 ? "ADMIN"  : it.user.group_id == 3 ? "STAFF" : "USER" }}
                  </td>
                  <td class="text-center">
                    <span
                      v-if="it.user.status != null"
                      :class="
                        'badge rounded-pill bg-' +
                        selectOptions.user_statuses[it.user.status].color
                      "
                      >{{
                        selectOptions.user_statuses[it.user.status].name_th
                      }}</span
                    >
                  </td>
                  <td class="text-center">
                    <NuxtLink
                      :to="{
                        name: 'admin-user-id',
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
// const router = useRouter();
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
  member_statuses: booking_data.data().member_statuses,
  user_statuses: booking_data.data().user_statuses,
});

// Function Fetch
const fetchItems = async () => {
  let params = {
    ...search.value,
    member_status:
      search.value.member_status == null
        ? undefined
        : search.value.member_status.value,
    status: search.value.status == null ? undefined : search.value.status.value,
    group_id:
      search.value.group_id == null ? undefined : search.value.group_id.value,
    perPage: perPage.value,
    currentPage: currentPage.value,
    lang: "th",
  };

  let data = await $fetch(`${runtimeConfig.public.apiBase}/profile`, {
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
  fetchItems();
});

useHead({
  title: "รายการผู้ใช้งาน",
});

definePageMeta({
  middleware: "auth",
});
</script>

<style scoped></style>
