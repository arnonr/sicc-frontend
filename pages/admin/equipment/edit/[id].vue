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
                <NuxtLink href="/admin/equipment"> รายการเครื่องมือ </NuxtLink>
              </span>
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
          <h4>แบบฟอร์มแก้ไขข้อมูลเครื่องมือวิทยาศาสตร์</h4>
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
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>ภาควิชา :
                </label>
                <div class="col-sm-9">
                  <v-select
                    label="title"
                    placeholder="ภาควิชา"
                    :options="selectOptions.equipment_departments"
                    id="slt-member-status"
                    v-model="item.equipment_department_id"
                    class="form-control v-select-no-border"
                    :clearable="true"
                  ></v-select>
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>ชื่อเครื่องมือ :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-organization"
                    v-model="item.title_th"
                  />
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>รูปภาพปก :
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
                    :href="item.equipment_file_old"
                    target="_blank"
                    class="btn btn-primary"
                    style="width: 100%"
                  >
                    View Old File
                  </a>
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  >รูปภาพอัตราค่าใช้บริการ :
                </label>

                <div class="col-sm-7">
                  <input
                    ref="rate_file"
                    class="form-control"
                    type="file"
                    id="formRateFile"
                  />
                </div>
                <div class="col-sm-2">
                  <a
                    :href="item.rate_file_old"
                    target="_blank"
                    class="btn btn-primary"
                    style="width: 100%"
                  >
                    View Old File
                  </a>
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  ><span class="text-danger">*</span>รายละเอียด :
                </label>
                <div class="col-sm-9">
                  <textarea
                    class="form-control"
                    placeholder=""
                    id="txt-contact-address"
                    style="height: 70px"
                    v-model="item.detail_th"
                  ></textarea>
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="gallery" class="col-sm-3 col-form-label"
                  >รูปภาพเพิ่มเติม :
                </label>

                <div class="col-sm-9">
                  <client-only>
                    <dashboard
                      :uppy="uppy"
                      ref="dash"
                      style="width: 100%"
                      :props="{
                        doneButtonHandler: null,
                        hideCancelButton: true,
                        showRemoveButtonAfterComplete: true,
                      }"
                    />
                  </client-only>
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="staticEmail" class="col-sm-3 col-form-label"
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
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  >ชื่อเครื่องมือ :
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control form-control-plaintext"
                    id="txt-organization"
                    v-model="item.title_en"
                  />
                </div>
              </div>

              <div class="form-group row mt-10">
                <label for="staticEmail" class="col-sm-3 col-form-label"
                  >รายละเอียด :
                </label>
                <div class="col-sm-9">
                  <textarea
                    class="form-control"
                    placeholder=""
                    id="txt-contact-address"
                    style="height: 70px"
                    v-model="item.detail_en"
                  ></textarea>
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

  <!-- <div>
    <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
      <div class="container">
        <div class="row">
          <div class="col-xxl-12">
            <div class="breadcrumb__content p-relative z-index-1">
              <div class="breadcrumb__list">
                <span>
                  <NuxtLink
                    :to="{
                      path: '/',
                    }"
                  >
                    หน้าหลัก
                  </NuxtLink>
                </span>
                <span class="dvdr"
                  ><i class="fa-solid fa-circle-small"></i
                ></span>
                <span>
                  <NuxtLink href="/news"> รายการข่าว</NuxtLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="postbox__area pt-40 pb-120">
      <div class="container">
        <div class="row">
          <div class="col-xxl-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">แก้ไขข่าว</h5>
                <hr />
                <div>
                  <div class="row">
                    <div class="col-md-12 mb-20">
                      <div class="">
                        <label for="">หัวข้อข่าว</label>
                        <input
                          class="form-control"
                          v-model="item.title"
                          name="title"
                          type="text"
                          placeholder="หัวข้อข่าว"
                        />
                      </div>
                    </div>
                    <div class="col-md-12 mb-20">
                      <div class="row">
                        <div class="col-md-12">
                          <label for="formFile" class="form-label"
                            >รูปภาพปก</label
                          >
                        </div>
                        <div class="col-md-10">
                          <input
                            ref="file"
                            class="form-control"
                            type="file"
                            id="formFile"
                            @change="onFileChanged($event)"
                          />
                        </div>
                        <div class="col-md-2">
                          <a
                            :href="item.news_file_old"
                            target="_blank"
                            class="btn btn-primary"
                            style="width: 100%"
                          >
                            View Old File
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12 mb-20">
                      <div class="">
                        <label for="">ประเภท</label>
                        <v-select
                          v-if="selectOptions.newsTypes.length != 0"
                          label="title"
                          :options="selectOptions.newsTypes"
                          v-model="item.news_type_id"
                          class="form-control"
                          :clearable="true"
                        ></v-select>
                      </div>
                    </div>

                    <div class="col-md-12 mb-20">
                      <div class="">
                        <label for="">เนื้อหาข่าว</label>
                        <client-only>
                          <froala
                            :tag="'textarea'"
                            :config="config"
                            v-model="item.detail"
                          ></froala>
                        </client-only>
                      </div>
                    </div>

                    <div class="col-md-12 mb-20">
                      <label for="">วันที่ลงข่าว</label>
                      <VueDatePicker
                        v-model="item.created_news"
                        :enable-time-picker="false"
                        locale="th"
                        auto-apply
                        :format="format"
                      >
                        <template #year-overlay-value="{ text }">
                          {{ parseInt(text) + 543 }}
                        </template>
                        <template #year="{ year }">
                          {{ year + 543 }}
                        </template>
                      </VueDatePicker>
                    </div>

                    <div class="col-md-12 mb-20">
                      <label for="news_file">แกลลอรี</label>
                      <client-only>
                        <dashboard
                          :uppy="uppy"
                          ref="dash"
                          style="width: 100%"
                          :props="{
                            doneButtonHandler: null,
                            hideCancelButton: true,
                            showRemoveButtonAfterComplete: true,
                          }"
                        />
                      </client-only>
                    </div>
                    <div class="col-md-12 mt-20">
                      <div class="contact__btn-2">
                        <button class="btn btn-success" @click="onSubmit">
                          Save
                        </button>
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
  </div> -->
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
import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/vue";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import XHRUpload from "@uppy/xhr-upload";

import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

const item = ref({
  title_th: null,
  title_en: null,
  equipment_department_id: null,
});
const file = ref(null);
const rate_file = ref(null);

const selectOptions = ref({
  publishes: booking_data.data().publishes,
  equipment_departments: [],
});

const r = (Math.random() + 1).toString(36).substring(7);

const uppy = new Uppy({
  meta: {
    equipment_id: route.params.id,
    secret_key: r,
    equipment_gallery_id: null,
    table_name: "equipment",
  },
  debug: true,
  restrictions: {
    allowedFileTypes: ["image/*", "video/*"],
  },
}).use(XHRUpload, {
  endpoint: `${runtimeConfig.public.apiBase}/froala/uppy`,
  fieldName: "file",
});

uppy.on("upload-success", (file, response) => {
  uppy.setFileMeta(file.id, {
    url: response.body.link,
    equipment_id: response.body.equipment_id,
    equipment_gallery_id: response.body.equipment_gallery_id,
  });
});

uppy.on("file-removed", (file, reason) => {
 
  if (file.meta.equipment_gallery_id != null) {
    $fetch(
      `${runtimeConfig.public.apiBase}/equipment-gallery/${file.meta.equipment_gallery_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        if (res.msg == "success") {
          console.log("success");
        } else {
          console.log("error");
        }
      })
      .catch((error) => error.data);
  }
});

// Fetch
const fetchDepartments = async () => {
  let data = await $fetch(
    `${runtimeConfig.public.apiBase}/equipment-department`,
    {
      params: {
        is_publish: 1,
      },
    }
  ).catch((error) => error.data);

  selectOptions.value.equipment_departments = data.data.map((e) => {
    return { title: e.name_th, value: e.id };
  });
};

const fetchItem = async () => {
  let data = await $fetch(
    `${runtimeConfig.public.apiBase}/equipment/${route.params.id}`,
    {}
  ).catch((error) => error.data);

  item.value = data.data;
  item.value.equipment_file_old = data.data.equipment_file;
  item.value.rate_file_old = data.data.rate_file;
  item.value.equipment_file = null;
  item.value.rate_file = null;

  item.value.equipment_department_id = {
    title: data.data.equipment_department.name,
    value: data.data.equipment_department_id,
  };

  item.value.is_publish = selectOptions.value.publishes[data.data.is_publish]
 
};

const fetchGallery = async () => {
  await $fetch(`${runtimeConfig.public.apiBase}/equipment-gallery`, {
    params: {
      is_publish: 1,
      equipment_id: route.params.id,
    },
  })
    .then(async (res) => {
      let gallery = res.data;

      for (let i = 0; i < gallery.length; i++) {
        await fetch(gallery[i].equipment_gallery_file)
          .then((response) => response.blob())
          .then((blob) => {
            uppy.addFile({
              name: null,
              type: blob.type,
              data: blob,
              meta: {
                relativePath: gallery[i].equipment_gallery_file,
                equipment_id: gallery[i].news_id,
                equipment_gallery_id: gallery[i].id,
                secret_key: gallery[i].secret_key,
                isRemote: true,
              },
              source: "Local",
              isRemote: false,
            });
          });
      }
      //

      //
      uppy.getFiles().forEach((file) => {
        uppy.setFileState(file.id, {
          progress: { uploadComplete: true, uploadStarted: true },
        });
      });
    })
    .catch((error) => error.data);
};

// Event
const onSubmit = async () => {
  if (
    item.value.is_publish == null ||
    item.value.is_publish.id == null ||
    item.value.equipment_department_id == null ||
    item.value.equipment_department_id.value == null ||
    item.value.title_th == "" ||
    item.value.title_th == null ||
    item.value.title_en == "" ||
    item.value.title_en == null ||
    item.value.detail_th == "" ||
    item.value.detail_th == null
  ) {
    useToast("โปรดระบุข้อมูลให้ครบถ้วน", "error");
    return;
  }

  let type_object = {
    text_success: "แก้ไขรายการเสร็จสิ้น",
    method: "put",
    url: runtimeConfig.public.apiBase + "/equipment/" + item.value.id,
  };

  let data = {
    ...item.value,
    equipment_file: file.value.files != null ? file.value.files[0] : null,
    rate_file: rate_file.value.files != null ? rate_file.value.files[0] : null,
    equipment_category_id: 1,
    equipment_department_id:
      item.value.equipment_department_id == null
        ? undefined
        : item.value.equipment_department_id.value,
    // created_equipment: dayjs().format("YYYY-MM-DD"),
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
        router.push({ path: "/admin/equipment/" + res.id });
      } else {
        throw new Error("ERROR");
      }
    })
    .catch((error) => error.data);
};

onMounted(() => {
  fetchDepartments();
  fetchItem();
  fetchGallery();
});
</script>
