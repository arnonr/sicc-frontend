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
                <NuxtLink href="/admin/user">รายการผู้ใช้งาน</NuxtLink>
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
        <div class="col-lg-12">
          <div class="postbox__main-wrapper">
            <div class="mt-30 pl-10 pt-15 pb-10 bg-grey">
              <h4>
                <i class="fa-solid fa-edit"></i>
                <span class="ml-10">แบบฟอร์มแก้ไขข้อมูลผู้ใช้งาน</span>
              </h4>
            </div>

            <div class="postbox__details-content-wrapper mt-20 row">
              <div class="col-xxl-12 col-xl-12 col-lg-12">
                <div>
                  <div class="card" style="border: none">
                    <div class="card-body">
                      <div class="form-group row">
                        <label
                          for="staticSurname"
                          class="col-sm-3 col-form-label"
                          ><span class="text-danger">*</span>ชื่อ-นามสกุล/Name
                          Surname :
                        </label>
                        <div class="col-sm-9">
                          <div class="row">
                            <div class="col-md-2">
                              <input
                                type="text"
                                class="form-control form-control-plaintext"
                                id="txt-prefix"
                                v-model="item.prefix"
                                placeholder="คำนำหน้า"
                              />
                            </div>
                            <div class="col-md-5">
                              <input
                                type="text"
                                class="form-control form-control-plaintext"
                                id="txt-firstname"
                                v-model="item.firstname"
                                placeholder="ชื่อ"
                              />
                            </div>
                            <div class="col-md-5">
                              <input
                                type="text"
                                class="form-control form-control-plaintext"
                                id="txt-surname"
                                v-model="item.surname"
                                placeholder="นามสกุล"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="form-group row mt-10">
                        <label
                          for="staticMemberStatus"
                          class="col-sm-3 col-form-label"
                          ><span class="text-danger">*</span>สถานะ/Member Status
                          :
                        </label>
                        <div class="col-sm-9">
                          <v-select
                            :label="
                              useCookie('lang') == 'en' ? 'name_en' : 'name_th'
                            "
                            placeholder="สถานะ/Member Status"
                            :options="selectOptions.member_statuses"
                            id="slt-member-status"
                            v-model="item.member_status"
                            class="form-control v-select-no-border"
                            :clearable="true"
                          ></v-select>
                        </div>
                      </div>

                      <div class="form-group row mt-10">
                        <label
                          for="staticOrganization"
                          class="col-sm-4 col-form-label"
                          >ชื่อหน่วยงาน/Organization :
                        </label>
                        <div class="col-sm-8">
                          <input
                            type="text"
                            class="form-control form-control-plaintext"
                            id="txt-organization"
                            v-model="item.organization"
                          />
                        </div>
                      </div>

                      <div class="form-group row mt-10">
                        <label
                          for="staticContactAddress"
                          class="col-sm-4 col-form-label"
                          >ที่อยู่ที่สามารถติดต่อได้/Contact Address :
                        </label>
                        <div class="col-sm-8">
                          <textarea
                            class="form-control"
                            placeholder=""
                            id="txt-contact-address"
                            style="height: 70px"
                            v-model="item.contact_address"
                          ></textarea>
                        </div>
                      </div>

                      <div class="form-group row mt-10">
                        <label for="staticPhone" class="col-sm-3 col-form-label"
                          ><span class="text-danger">*</span>โทรศัพท์/Phone :
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
                          ><span class="text-danger">*</span>E-mail :
                        </label>
                        <div class="col-sm-9">
                          <input
                            type="email"
                            class="form-control form-control-plaintext"
                            id="txt-email"
                            v-model="item.email"
                          />
                        </div>
                      </div>

                      <div class="form-group row mt-10">
                        <label for="group-id" class="col-sm-3 col-form-label"
                          ><span class="text-danger">*</span>กลุ่มผู้ใช้งาน :
                        </label>
                        <div class="col-sm-9">
                          <v-select
                            label="name"
                            placeholder="กลุ่มผู้ใช้งาน"
                            :options="selectOptions.groups"
                            :selectable="
                              (it) =>
                                useCookie('user').value.group_id == 3 &&
                                it.id == 1
                                  ? it.disabled
                                  : true
                            "
                            id="slt-group-id"
                            v-model="item.group_id"
                            class="form-control v-select-no-border"
                            :clearable="true"
                          ></v-select>
                        </div>
                      </div>

                      <hr />

                      <div class="form-group row mt-10">
                        <label
                          for="staticInvoiceName"
                          class="col-sm-4 col-form-label"
                          >ชื่อในการออกใบกำกับภาษี/ Invoice Name :
                        </label>
                        <div class="col-sm-8">
                          <input
                            type="text"
                            class="form-control form-control-plaintext"
                            id="txt-invoice-name"
                            v-model="item.invoice_name"
                          />
                        </div>
                      </div>

                      <div class="form-group row mt-10">
                        <label
                          for="staticInvoiceAddress"
                          class="col-sm-4 col-form-label"
                          >ที่อยู่ออกใบกำกับภาษี/ Invoice Address :
                        </label>
                        <div class="col-sm-8">
                          <textarea
                            class="form-control"
                            placeholder=""
                            id="txt-invoice-address"
                            style="height: 70px"
                            v-model="item.invoice_address"
                          ></textarea>
                        </div>
                      </div>

                      <div class="form-group row mt-10">
                        <label for="TaxID" class="col-sm-3 col-form-label"
                          >เลขประจำตัวผู้เสียภาษี/Tax ID :
                        </label>
                        <div class="col-sm-9">
                          <input
                            type="text"
                            class="form-control form-control-plaintext"
                            id="txtTaxID"
                            v-model="item.tax_id"
                          />
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

const item = ref({});

const selectOptions = ref({
  publishes: booking_data.data().publishes,
  member_statuses: booking_data.data().member_statuses,
  user_statuses: booking_data.data().user_statuses,
  groups: [
    { id: 1, value: 1, name: "ADMIN" },
    { id: 2, value: 2, name: "USER" },
    { id: 3, value: 3, name: "STAFF" },
  ],
});

// if (useCookie("user").value.group_id == 3) {
//   selectOptions.value.groups = [
//     { id: 2, value: 2, name: "USER" },
//     { id: 3, value: 3, name: "STAFF" },
//   ];
// }

const format = (date) => {
  const day = dayjs(date).locale("th").format("DD");
  const month = dayjs(date).locale("th").format("MMM");
  const year = date.getFullYear() + 543;

  return `${day} ${month} ${year}`;
};

// Function Fetch
const { data: res } = await useFetch(
  `${runtimeConfig.public.apiBase}/profile/${route.params.id}`,
  {
    server: true,
  }
);

// Event
const onSubmit = async () => {
  if (
    item.value.group_id == null ||
    item.value.group_id.value == null ||
    item.value.member_status == null ||
    item.value.member_status.value == null ||
    item.value.status == null ||
    item.value.status.value == null ||
    item.value.firstname == "" ||
    item.value.firstname == null ||
    item.value.surname == "" ||
    item.value.surname == null ||
    item.value.prefix == "" ||
    item.value.prefix == null ||
    item.value.email == "" ||
    item.value.email == null ||
    item.value.phone == "" ||
    item.value.phone == null
  ) {
    useToast("โปรดระบุข้อมูลให้ครบถ้วน", "error");
    return;
  }

  let type_object = {
    text_success: "แก้ไขรายการเสร็จสิ้น",
    method: "put",
    url: runtimeConfig.public.apiBase + "/profile/" + item.value.id,
  };

  let data = {
    ...item.value,
    group_id:
      item.value.group_id == null ? undefined : item.value.group_id.value,
    member_status:
      item.value.member_status == null
        ? undefined
        : item.value.member_status.value,
    status: item.value.status == null ? undefined : item.value.status.value,
  };

  await $fetch(type_object.url, {
    method: type_object.method,
    body: data,
  })
    .then((res) => {
      if (res.msg == "success") {
        useToast(type_object.text_success, "success");
        router.push({ path: "/admin/user/" + res.id });
      } else {
        throw new Error("ERROR");
      }
    })
    .catch((error) => error.data);
};

onMounted(() => {
  item.value = res.value.data;
  item.value.member_status =
    selectOptions.value.member_statuses[res.value.data.member_status - 1];
  item.value.status =
    selectOptions.value.user_statuses[res.value.data.user.status];
  item.value.group_id =
    selectOptions.value.groups[res.value.data.user.group_id - 1];

  item.value.email = item.value.user.email;
});

definePageMeta({
  middleware: "auth",
});
</script>
