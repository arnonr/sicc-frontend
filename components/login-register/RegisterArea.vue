<template>
  <!--  -->
  <section class="postbox__area pt-40 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="postbox__wrapper">
            <div class="postbox__main" v-if="useCookie('user').value == null">
              <div class="row">
                <div class="col-lg-12">
                  <div class="postbox__main-wrapper">
                    <div class="postbox__details-content-wrapper">
                      <!-- <h3>{{ item.equipment_department.name }}</h3> -->
                      <h3>ข้อมูลส่วนตัว</h3>
                    </div>

                    <div class="mt-30 pl-10 pt-15 pb-10 bg-grey">
                      <h4>
                        <i class="fa-solid fa-edit"></i>
                        <span class="ml-10">แก้ไข</span>
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
                                  ><span class="text-danger">*</span
                                  >ชื่อ-นามสกุล/Name Surname :
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
                                  ><span class="text-danger">*</span
                                  >สถานะ/Member Status :
                                </label>
                                <div class="col-sm-9">
                                  <v-select
                                    :label="
                                      useCookie('lang') == 'en'
                                        ? 'name_en'
                                        : 'name_th'
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
                                <label
                                  for="staticPhone"
                                  class="col-sm-3 col-form-label"
                                  ><span class="text-danger">*</span
                                  >โทรศัพท์/Phone :
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
                                <label
                                  for="staticEmail"
                                  class="col-sm-3 col-form-label"
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
                                <label
                                  for="staticPassword"
                                  class="col-sm-3 col-form-label"
                                  ><span class="text-danger">*</span>Password :
                                </label>
                                <div class="col-sm-9">
                                  <input
                                    type="password"
                                    class="form-control form-control-plaintext"
                                    id="txt-password"
                                    v-model="item.password"
                                  />
                                </div>
                              </div>

                              <div class="form-group row mt-10">
                                <label
                                  for="staticPassword"
                                  class="col-sm-3 col-form-label"
                                  ><span class="text-danger">*</span>Confirm
                                  Password :
                                </label>
                                <div class="col-sm-9">
                                  <input
                                    type="password"
                                    class="form-control form-control-plaintext"
                                    id="txt-confirm-password"
                                    v-model="item.confirm_password"
                                  />
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
                                <label
                                  for="TaxID"
                                  class="col-sm-3 col-form-label"
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
                <div class="col-lg-12 text-center mt-40">
                  <button class="btn btn-warning" @click="onConfirmSubmit()">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div v-else>...</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import booking_data from "~~/mixins/bookingData";

import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

// Equipment
const item = ref({});

const text_error = ref("ไม่สามารถแก้ไขข้อมูลได้");

const selectOptions = ref({
  member_statuses: booking_data.data().member_statuses,
});

// Function Fetch
const onConfirmSubmit = async () => {
  if (
    item.value.prefix == null ||
    item.value.prefix == "" ||
    item.value.firstname == null ||
    item.value.firstname == "" ||
    item.value.surname == null ||
    item.value.surname == "" ||
    item.value.member_status == null ||
    item.value.member_status.id == null ||
    item.value.phone == null ||
    item.value.phone == "" ||
    item.value.email == null ||
    item.value.email == "" ||
    item.value.password == null ||
    item.value.password == "" ||
    item.value.confirm_password == null ||
    item.value.confirm_password == ""
  ) {
    useToast("โปรดระบุข้อมูลให้ครบถ้วน", "error");
    return;
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  if (!validateEmail(item.value.email)) {
    useToast("รูปแบบอีเมลไม่ถูกต้อง", "error");
    return;
  }

  if (item.value.password != item.value.confirm_password) {
    useToast("ยืนยันรหัสผ่านไม่ถูกต้อง", "error");
    return;
  }

  Swal.fire({
    title: "ยืนยันการส่งข้อมูล",
    text: "หลังจากส่งข้อมูลแล้วไม่สามารถกลับมาแก้ไขได้",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, confirm it!",
  }).then((result) => {
    if (result.isConfirmed) {
      onSubmit();
    }
  });
};

const onSubmit = async () => {
  let data = {
    ...item.value,
    group_id: 2,
    status: 1,
    member_status: item.value.member_status.id,
    is_publish: 1,
  };

  await $fetch(`${runtimeConfig.public.apiBase}/user/register`, {
    method: "post",
    body: data,
  })
    .then((res) => {
      if (res.msg == "success") {
        useToast(
          "ระบบได้ทำการส่งข้อมูลยืนยันไปยังอีเมล โปรดตรวจสอบอีเมลของท่าน",
          "success"
        );
        router.push({
          path: "/login",
        });
      } else {
        console.log("error");
      }
    })
    .catch((error) => {
      console.log(error.data);
      useToast(error.data.msg,'error')
    });
};

useHead({
  title:
    "ศูนย์เครื่องมือวิทยาศาสตร์และถ่ายทอดเทคโนโลยี คณะวิทยาศาสตร์ประยุกต์",
});

definePageMeta({
  middleware: "auth",
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
