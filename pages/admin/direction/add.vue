<template>
  <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="breadcrumb__content p-relative z-index-1">
            <div class="breadcrumb__list">
              <span> ผู้ดูแลระบบ </span>
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <NuxtLink to="/admin/direction">
                <span> เนื้อหาอื่น ๆ </span></NuxtLink
              >
              <span class="dvdr"><i class="fa-solid fa-circle-small"></i></span>
              <span> เพิ่มข้อมูล </span>
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
          <h4>แบบฟอร์มเพิ่มข้อมูลเนื้อหาอื่น ๆ </h4>
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
                  ><span class="text-danger">*</span>หัวข้อ :
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
                  ><span class="text-danger">*</span>รายละเอียด :
                </label>
                <div class="col-sm-9">
                  <client-only>
                    <froala
                      tag="textarea"
                      :config="config.detail_th"
                      v-model="item.detail_th"
                    ></froala>

                    <div id="detail-th"></div>
                  </client-only>
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
                  >หัวข้อ :
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
                  <client-only>
                    <froala
                      tag="textarea"
                      :config="config.detail_en"
                      v-model="item.detail_en"
                    ></froala>

                    <div id="detail-en"></div>
                  </client-only>
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
const router = useRouter();

const item = ref({
  title_th: null,
  title_en: null,
  detail_th: "",
  detail_en: "",
});


let config = {};
config["detail_th"] = booking_data.data().froala_config();
config["detail_th"]["events"] = {
  keyup: function (inputEvent) {
    item.value.detail_th = this.html.get();
  },
  click: function (clickEvent) {
    item.value.detail_th = this.html.get();
  },
  "commands.after": function (cmd, param1, param2) {
    item.value.detail_th = this.html.get();
  },
  "paste.after": function (pasteEvent) {
    item.value.detail_th = this.html.get();
  },
  initialized: function () {
    this.html.insert(item.value.detail_th);
  },
};

config["detail_en"] = booking_data.data().froala_config();
config["detail_en"]["events"] = {
  keyup: function (inputEvent) {
    item.value.detail_en = this.html.get();
  },
  click: function (clickEvent) {
    item.value.detail_en = this.html.get();
  },
  "commands.after": function (cmd, param1, param2) {
    item.value.detail_en = this.html.get();
  },
  "paste.after": function (pasteEvent) {
    item.value.detail_en = this.html.get();
  },
  initialized: function () {
    this.html.insert(item.value.detail_en);
  },
};

// Event
const onSubmit = async () => {
  if (
    item.value.title_th == "" ||
    item.value.title_th == null ||
    item.value.detail_th == "" ||
    item.value.detail_th == null
  ) {
    useToast("โปรดระบุข้อมูลให้ครบถ้วน", "error");
    return;
  }

  let type_object = {
    text_success: "เพิ่มรายการเสร็จสิ้น",
    method: "post",
    url: runtimeConfig.public.apiBase + "/direction/",
  };

  let data = {
    ...item.value,
    is_publish: 1,
    created_contact: dayjs().format("YYYY-MM-DD"),
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
        router.push({ path: "/admin/direction/" + res.id });
      } else {
        throw new Error("ERROR");
      }
    })
    .catch((error) => error.data);
};

onMounted(() => {
});
</script>
