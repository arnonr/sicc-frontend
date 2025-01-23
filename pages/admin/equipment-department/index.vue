<template>
  <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="breadcrumb__list">
              <span> ผู้ดูแลระบบ </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span>รายการภาควิชา</span>
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
            v-model="search.name_short"
            name="title"
            type="text"
            placeholder="ชื่อย่อ"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="portfolio__area pt-40 pb-40">
    <div class="container">
      <div class="mt-10 mb-30 pl-10 pt-15 pb-10 bg-grey">
        <h4>
          <i class="fa-regular fa-list"></i>
          <span class="ml-10">รายการภาควิชา</span>
        </h4>
      </div>
      <div class="mb-30">
        <button
          type="button"
          class="btn btn-warning"
          @click="
            () => {
              type_submit = 'add';
              item = {};
              modalForm.show();
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
                  <th class="text-center">ชื่อ (TH)</th>
                  <th class="text-center">ชื่อ (EN)</th>
                  <th class="text-center">ชื่อย่อ</th>
                  <th class="text-center">สถานะ</th>
                  <th class="text-center">จัดการ</th>
                </tr>
              </thead>
              <tbody v-if="items.length != 0">
                <tr v-for="(it, idx) in items" :key="idx">
                  <td cla ss="text-center">{{ it.name_th }}</td>
                  <td class="text-center">
                    {{ it.name_en }}
                  </td>
                  <td class="text-center">{{ it.name_short }}</td>
                  <th class="text-center">
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
                  </th>
                  <td class="text-center">
                    <NuxtLink
                      @click="
                        () => {
                          // publish
                          type_submit = 'edit';
                          item = {};
                          let is_publish =
                            selectOptions.publishes[it.is_publish];
                          item = { ...it, is_publish: is_publish };
                          modalForm.show();
                        }
                      "
                      class="btn btn-warning text-uppercase ml-5"
                    >
                      <i class="fa-regular fa-edit"></i>
                    </NuxtLink>

                    <button
                      class="btn btn-danger ml-5"
                      v-if="useCookie('user').value && useCookie('user').value.group_id == 1"
                      @click="onConfirmDelete(it.id)"
                    >
                      <i class="fa-regular fa-trash"></i>
                    </button>
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

  <!-- Modal -->
  <div
    class="modal fade"
    id="modal-form"
    tabindex="-1"
    aria-labelledby="modal-form"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modal-form-label">
            แบบฟอร์มข้อมูลภาควิชา
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- Form ภาควิชา -->
          <form>
            <div class="row">
              <div class="col-12">
                <label for="recipient-name" class="col-form-label"
                  ><span class="text-danger">*</span>ชื่อภาควิชา (TH) :</label
                >
                <input
                  type="text"
                  class="form-control form-control-plaintext"
                  id="txt-prefix"
                  v-model="item.name_th"
                  placeholder="ชื่อภาควิชา"
                />
              </div>

              <div class="col-12 mt-10">
                <label for="recipient-name" class="col-form-label"
                  ><span class="text-danger">*</span>ชื่อภาควิชา (EN) :</label
                >
                <input
                  type="text"
                  class="form-control form-control-plaintext"
                  id="txt-prefix"
                  v-model="item.name_en"
                  placeholder="ชื่อภาควิชา (EN)"
                />
              </div>

              <div class="col-12 mt-10">
                <label for="recipient-name" class="col-form-label"
                  ><span class="text-danger">*</span>ชื่อย่อภาควิชา :</label
                >
                <input
                  type="text"
                  class="form-control form-control-plaintext"
                  id="txt-prefix"
                  v-model="item.name_short"
                  placeholder="ชื่อย่อภาควิชา"
                />
              </div>

              <div class="col-12 mt-10">
                <label for="recipient-name" class="col-form-label"
                  ><span class="text-danger">*</span>สถานะ :</label
                >
                <v-select
                  label="name_th"
                  placeholder="สถานะ"
                  :options="selectOptions.publishes"
                  id="slt-is-publish"
                  v-model="item.is_publish"
                  class="form-control v-select-no-border"
                  :clearable="true"
                ></v-select>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-warning" @click="onSubmit()">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
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
// const route = useRoute();
// const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const items = ref([]);
const item = ref({});
const perPage = ref(20);
const currentPage = ref(1);
const totalPage = ref(1);
const totalItems = ref(0);
const search = ref({});
const type_submit = ref("");
let modalForm;

const selectOptions = ref({
  perPage: [
    { title: "20", value: 20 },
    { title: "40", value: 40 },
    { title: "60", value: 60 },
  ],
  publishes: booking_data.data().publishes,
});

// Function Fetch
const fetchItems = async () => {
  let params = {
    ...search.value,
    perPage: perPage.value,
    currentPage: currentPage.value,
    lang: "th",
  };

  let data = await $fetch(
    `${runtimeConfig.public.apiBase}/equipment-department`,
    {
      params: params,
    }
  ).catch((error) => error.data);

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
  modalForm = new bootstrap.Modal(document.getElementById("modal-form"));
  fetchItems();
});

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
  await $fetch(`${runtimeConfig.public.apiBase}/equipment-department/${id}`, {
    method: "delete",
  })
    .then((res) => {
      if (res.msg == "success") {
        useToast("ลบรายการเสร็จสิ้น", "success");
        fetchItems();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error("ERROR");
      }
    })
    .catch((error) => error.data);
};

const onSubmit = async () => {
  if (
    item.value.is_publish == null ||
    item.value.is_publish.id == null ||
    item.value.name_th == "" ||
    item.value.name_th == null ||
    item.value.name_en == "" ||
    item.value.name_en == null ||
    item.value.name_short == "" ||
    item.value.name_short == null
  ) {
    useToast("โปรดระบุข้อมูลให้ครบถ้วน", "error");
    return;
  }

  let type_object = {
    text_success: "เพิ่มรายการเสร็จสิ้น",
    method: "post",
    url: runtimeConfig.public.apiBase + "/equipment-department/",
  };

  if (type_submit.value == "edit") {
    type_object = {
      text_success: "แก้ไขรายการเสร็จสิ้น",
      method: "put",
      url: type_object.url + item.value.id,
    };
  }

  await $fetch(type_object.url, {
    method: type_object.method,
    body: {
      ...item.value,
      is_publish: item.value.is_publish.value,
    },
  })
    .then((res) => {
      if (res.msg == "success") {
        useToast(type_object.text_success, "success");
        modalForm.hide();
        fetchItems();
        // window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        throw new Error("ERROR");
      }
    })
    .catch((error) => error.data);
};

useHead({
  title: "รายการภาควิชา",
});

definePageMeta({
  middleware: "auth",
});
</script>

<style scoped></style>
