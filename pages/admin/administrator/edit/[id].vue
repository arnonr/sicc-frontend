<template>
  <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="breadcrumb__list">
              <span> ผู้ดูแลระบบ </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span>
                <NuxtLink href="/admin/administrator">
                  รายการบุคลากร
                </NuxtLink></span
              >
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span> แก้ไขข้อมูล </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="portfolio__area pt-40 pb-40">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4>แบบฟอร์มแก้ไขข้อมูลบุคลากร</h4>
        </div>

        <div class="mt-30 pl-10 pt-15 pb-10 bg-grey">
          <h4>
            <i class="fa-solid fa-edit"></i>
            <span class="ml-10">ภาษาไทย</span>
          </h4>
        </div>

        <div class="col-12">
          <div class="card" style="border: none">
            <div class="card-body">
              <div class="form-group row mt-10">
                <label for="prefix" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>คำนำหน้า :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-prefix"
                    v-model="item.prefix_th"
                  />
                </div>
              </div>
              <div class="form-group row mt-10">
                <label for="firstname" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>ชื่อ :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-firstname"
                    v-model="item.firstname_th"
                  />
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="surname" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>นามสกุล :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-surname"
                    v-model="item.surname_th"
                  />
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="department_id" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>ฝ่ายงาน :
                </label>
                <div class="col-sm-9">
                  <v-select
                    label="title"
                    placeholder="ฝ่ายงาน"
                    :options="selectOptions.departments"
                    id="slt-department"
                    v-model="item.department_id"
                    class="form-control v-select-no-border"
                    :clearable="true"
                  ></v-select>
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="email" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>email :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-email"
                    v-model="item.email"
                  />
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="phone" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>โทรศัพท์ :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-phone"
                    v-model="item.phone"
                  />
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>รูปภาพ 320x250 pixels :
                </label>

                <div class="col-sm-7">
                  <input
                    ref="file"
                    class="form-control"
                    type="file"
                    id="formFile"
                  />
                </div>
                <div class="col-sm-2">
                  <a
                    :href="item.team_file_old"
                    target="_blank"
                    class="btn btn-primary"
                    style="width: 100%"
                  >
                    View Old File
                  </a>
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="is-publish" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>สถานะ :
                </label>
                <div class="col-sm-9">
                  <v-select
                    label="name_th"
                    placeholder="การเผยแพร่"
                    :options="selectOptions.publishes"
                    id="slt-is_publish"
                    v-model="item.is_publish"
                    class="form-control v-select-no-border"
                    :clearable="true"
                  ></v-select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-30 pl-10 pt-15 pb-10 bg-grey">
          <h4>
            <i class="fa-solid fa-edit"></i>
            <span class="ml-10">English</span>
          </h4>
        </div>

        <div class="col-12">
          <div class="card" style="border: none">
            <div class="card-body">
              <div class="form-group row mt-10">
                <label for="prefix-en" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>คำนำหน้า :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-prefix-en"
                    v-model="item.prefix_en"
                  />
                </div>
              </div>
              <div class="form-group row mt-10">
                <label for="firstname-en" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>ชื่อ :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-firstname-en"
                    v-model="item.firstname_en"
                  />
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="surname-en" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>นามสกุล :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-surname-en"
                    v-model="item.surname_en"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 mt-20">
          <div class="contact__btn-2 text-center">
            <button class="btn btn-warning" @click="onSubmit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import dayjs from "dayjs";
import "dayjs/locale/th";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import booking_data from "~~/mixins/bookingData";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

// Variable
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

const item = ref({
  department_id: null,
});
const file = ref(null);

const selectOptions = ref({
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

const fetchItem = async () => {
  let data = await $fetch(
    `${runtimeConfig.public.apiBase}/team/${route.params.id}`,
    {
      params: {
        is_publish: 1,
      },
    }
  ).catch((error) => error.data);

  item.value = data.data;
  item.value.team_file_old = data.data.team_file;
  item.value.team_file = null;

  item.value.department_id = {
    title: data.data.department.name_th,
    value: data.data.department_id,
  };

  item.value.is_publish = selectOptions.value.publishes[data.data.is_publish];
};

// Event
const onSubmit = async () => {
  if (
    item.value.is_publish == null ||
    item.value.is_publish.id == null ||
    item.value.department_id == null ||
    item.value.department_id.value == null ||
    item.value.prefix_th == "" ||
    item.value.prefix_th == null ||
    item.value.firstname_th == "" ||
    item.value.firstname_th == null ||
    item.value.surname_th == "" ||
    item.value.surname_th == null ||
    item.value.email == "" ||
    item.value.email == null ||
    item.value.phone == "" ||
    item.value.phone == null ||
    item.value.prefix_en == "" ||
    item.value.prefix_en == null ||
    item.value.firstname_en == "" ||
    item.value.firstname_en == null ||
    item.value.surname_en == "" ||
    item.value.surname_en == null
  ) {
    useToast("โปรดระบุข้อมูลให้ครบถ้วน", "error");
    return;
  }

  let type_object = {
    text_success: "แก้ไขรายการเสร็จสิ้น",
    method: "put",
    url: runtimeConfig.public.apiBase + "/team/" + item.value.id,
  };

  let data = {
    ...item.value,
    team_file: file.value.files != null ? file.value.files[0] : null,
    department_id:
      item.value.department_id == null
        ? undefined
        : item.value.department_id.value,
    is_publish: item.value.is_publish.value,
  };

  var form_data = new FormData();
  for (var key in data) {
    form_data.append(key, data[key]);
  }

  await $fetch(type_object.url, {
    method: type_object.method,
    body: form_data,
  })
    .then((res) => {
      if (res.msg == "success") {
        useToast(type_object.text_success, "success");
        router.push({ path: "/admin/administrator/" + res.id });
      } else {
        throw new Error("ERROR");
      }
    })
    .catch((error) => error.data);
};

onMounted(() => {
  fetchDepartments();
  fetchItem();
});
</script>
