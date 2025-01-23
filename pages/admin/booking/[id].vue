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
                <NuxtLink href="/admin/booking"> รายการจอง </NuxtLink></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  -->
  <section class="postbox__area pt-40 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="postbox__wrapper" v-if="item">
            <!-- Content -->
            <div class="postbox__main">
              <div class="row">
                <div class="col-lg-12">
                  <div class="postbox__main-wrapper">
                    <div class="postbox__details-content-wrapper">
                      <!-- <h3>{{ item.equipment_department.name }}</h3> -->
                      <h3>{{ item.title_en }}</h3>
                      <h3>{{ item.title_th }}</h3>
                    </div>

                    <!-- Button -->
                    <div class="text-end">
                      <button
                        class="btn btn-success text-uppercase"
                        @click="
                          () => {
                            booking.status_id = {
                              name_th: booking.booking_status_show.name,
                              value: booking.booking_status_show.value,
                            };
                            modalForm.show();
                          }
                        "
                      >
                        <i class="fa-regular fa-edit"></i>
                        <span class="pl-5">Change Status</span>
                      </button>

                      <button
                        class="btn btn-warning text-uppercase ml-5"
                        @click="
                          () => {
                            $router.push({
                              path: '/admin/booking/edit/' + booking.id,
                            });
                          }
                        "
                      >
                        <i class="fa-regular fa-edit"></i>
                        <span class="pl-5">Edit</span>
                      </button>

                      <button
                        class="btn btn-danger warning text-uppercase ml-5"
                        v-if="
                          useCookie('user').value &&
                          useCookie('user').value.group_id == 1
                        "
                        @click="onConfirmDelete(booking.id)"
                      >
                        <i class="fa-regular fa-trash"></i>
                        <span class="pl-5">Delete</span>
                      </button>
                    </div>

                    <div class="mt-30 pl-10 pt-15 pb-10 bg-grey">
                      <h4>
                        <i class="fa-solid fa-microscope"></i>
                        <span class="ml-10">{{ $t("Booking") }}</span>
                      </h4>
                    </div>

                    <div class="postbox__details-content-wrapper mt-20 row">
                      <div class="col-xxl-12 col-xl-12 col-lg-12">
                        <div>
                          <div v-if="checkSummary == true">
                            <div class="card" style="border: none">
                              <div class="card-body row">
                                <div class="col-lg-12">
                                  <span class="fw-bold text-dark"
                                    >เครื่องมือ/Scientific Instrument : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    item.title
                                  }}</span>

                                  <hr class="hr-dotted" />
                                </div>
                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >วันที่จอง/Booking Date : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    useCookie("lang") == "en"
                                      ? dayjs(booking.booking_date).format(
                                          "DD/MM/YYYY"
                                        )
                                      : dayjs(booking.booking_date)
                                          .locale("th")
                                          .format("DD MMM BBBB")
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >สถานะการจอง/Booking Status :
                                  </span>

                                  <span
                                    v-if="booking.booking_status_show"
                                    :class="
                                      'badge rounded-pill bg-' +
                                      booking.booking_status_show.color
                                    "
                                    data-v-eb4900e3=""
                                    >{{
                                      booking.booking_status_show.name
                                    }}</span
                                  >
                                  <hr class="hr-dotted" />
                                </div>

                                <div
                                  class="col-lg-12 mt-10"
                                  v-if="booking.status_id == 3"
                                >
                                  <span class="fw-bold text-dark"
                                    >หมายเหตุ :
                                  </span>
                                  <span>{{ booking.reject_comment }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >ข้อมูลตัวอย่าง/Example : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.example
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >รายการวิเคราะห์/Method List :
                                  </span>
                                  <br />

                                  <div class="mt-20">
                                    <div
                                      class="row"
                                      v-for="(
                                        it, index
                                      ) in booking.equipment_booking_method"
                                      :key="index"
                                    >
                                      <div class="col-lg-6 col-md-6">
                                        <span
                                          :style="
                                            index === 0
                                              ? 'padding-right: 12px'
                                              : 'padding-right: 8px'
                                          "
                                          >{{ index + 1 }}.</span
                                        >
                                        <span>{{
                                          it.name + " " + it.name_short
                                        }}</span>
                                      </div>
                                      <div class="col-lg-3 col-md-3 col-6">
                                        <span
                                          >{{ $t("Quantity") }}
                                          {{ it.quantity }}
                                          {{ it.unit }}</span
                                        >
                                      </div>
                                      <div class="col-lg-3 col-md-3 col-6">
                                        <span>
                                          {{ $t("Price") }}
                                          {{ it.total_price }}.00

                                          {{ $t("Bath") }}</span
                                        >
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <h4
                                      class="fw-bold text-center mt-20 mb-20 pt-20 pb-20 text-dark"
                                      style="background-color: #eee"
                                    >
                                      {{ $t("Total Price") }}
                                      {{ booking.total_price }}.00
                                      {{ $t("Bath") }}
                                    </h4>
                                  </div>

                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >ชื่อ-นามสกุล/Name Surname : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.prefix +
                                    booking.firstname +
                                    " " +
                                    booking.surname
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >สถานะ/Member Status : </span
                                  ><span class="text-color-primary fw-bold">
                                    {{ booking.member_status.name_th }}
                                  </span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >ชื่อหน่วยงาน/Organization : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.organization
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >ที่อยู่ที่สามารถติดต่อได้/Contact Address : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.contact_address
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-6 mt-10">
                                  <span class="fw-bold text-dark"
                                    >โทรศัพท์/Phone : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.phone
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-6 mt-10">
                                  <span class="fw-bold text-dark"
                                    >E-mail : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.email
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >เลขประจำตัวผู้เสียภาษี/Tax ID : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.tax_id
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >ที่อยู่ในการออกใบกำกับภาษี/ Invoice Address
                                    : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.invoice_address
                                  }}</span>
                                  <hr class="hr-dotted" />
                                </div>

                                <!-- <div class="col-lg-12 mt-10">
                                  <span class="fw-bold text-dark"
                                    >ตำบล/อำเภอ/จังหวัด : </span
                                  ><span
                                    class="text-color-primary fw-bold"
                                  >{{ booking.address_all.label}}</span>
                                  <hr class="hr-dotted" />
                                </div> -->

                                <div class="col-lg-12 mt-10 mb-20">
                                  <span class="fw-bold text-dark"
                                    >โทรศัพท์ที่สามารถติดต่อได้/Phone : </span
                                  ><span class="text-color-primary fw-bold">{{
                                    booking.phone2
                                  }}</span>
                                  <!-- <hr class="hr-dotted" /> -->
                                </div>

                                <div>
                                  <hr style="border-top: 2px solid #888" />
                                </div>

                                <div class="col-lg-12 mt-10">
                                  <div class="d-flex justify-content-between">
                                    <div>
                                      <span class="fw-bold text-dark"
                                        >รายงาน :
                                      </span>
                                      <div
                                        v-for="(rep, idx) in report_res"
                                        :key="idx"
                                      >
                                        <span>ไฟล์ที่ {{ idx + 1 }} : </span>
                                        <a
                                          :href="rep.report_file"
                                          target="_blank"
                                          class="text-color-primary"
                                        >
                                          <!-- {{rep.report_file}} -->
                                          ดาวน์โหลด
                                        </a>
                                      </div>
                                    </div>
                                    <button
                                      class="btn btn-primary float-right"
                                      @click="
                                        () => {
                                          modalReportForm.show();
                                        }
                                      "
                                    >
                                      Upload File
                                    </button>
                                  </div>
                                  <hr class="hr-dotted" />
                                  <!--  -->
                                  <div class="row">
                                    <div class="col-lg-12 mt-10">
                                      <span class="fw-bold text-dark"
                                        >หลักฐานการชำระเงิน :</span
                                      >
                                    </div>

                                    <div
                                      class="col-lg-12 mt-10"
                                      v-if="
                                        booking.status_id > 5 &&
                                        preview_slip_file
                                      "
                                    >
                                      <span class="fw-bold text-dark"
                                        >วันที่โอนเงิน : </span
                                      ><span class="text-color-primary fw-bold">
                                        {{
                                          dayjs(booking.slip_date)
                                            .locale("th")
                                            .format("DD MMM BBBB")
                                        }}
                                        {{ booking.slip_time }} น.</span
                                      >
                                    </div>

                                    <div
                                      class="col-lg-12 mt-10"
                                      v-if="
                                        booking.status_id > 5 &&
                                        preview_slip_file
                                      "
                                    >
                                      <span class="fw-bold text-dark"
                                        >ธนาคาร : </span
                                      ><span class="text-color-primary fw-bold">
                                        {{ booking.slip_bank }}</span
                                      >
                                    </div>

                                    <div
                                      class="col-lg-12 mt-10"
                                      v-if="
                                        booking.status_id > 5 &&
                                        preview_slip_file
                                      "
                                    >
                                      <span class="fw-bold text-dark"
                                        >จำนวนเงิน : </span
                                      ><span class="text-color-primary fw-bold">
                                        {{
                                          parseFloat(
                                            booking.slip_price
                                          ).toLocaleString("en-US", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                          })
                                        }}
                                        บาท</span
                                      >
                                    </div>

                                    <div
                                      class="col-lg-12 mt-10"
                                      v-if="
                                        booking.status_id > 5 &&
                                        preview_slip_file
                                      "
                                    >
                                      <span class="fw-bold text-dark"
                                        >ไฟล์ :
                                      </span>

                                      <a
                                        :href="preview_slip_file"
                                        v-if="preview_slip_file"
                                        target="_blank"
                                        class="text-color-primary fw-bold"
                                        >ดาวน์โหลด
                                      </a>
                                    </div>
                                  </div>
                                  <hr
                                    class="hr-dotted"
                                    v-if="booking.status_id == 8"
                                  />
                                  <!-- <div class="d-flex justify-content-between">
                                    <div>
                                      <span class="fw-bold text-dark"
                                        >หลักฐานการชำระเงิน :
                                      </span>
                                      <span
                                        v-if="preview_slip_file"
                                        class="me-5"
                                        >ธนาคาร : {{ item.slip_bank }}</span
                                      >
                                      <a
                                        :href="preview_slip_file"
                                        v-if="preview_slip_file"
                                        target="_blank"
                                        >ดาวน์โหลด
                                      </a>
                                      <span v-else>-</span>
                                    </div>
                                  </div> -->
                                  <hr class="hr-dotted" />
                                  <div class="d-flex justify-content-between">
                                    <div>
                                      <span class="fw-bold text-dark"
                                        >ใบเสร็จรับเงิน :
                                      </span>

                                      <a
                                        :href="preview_invoice_file"
                                        v-if="preview_invoice_file"
                                        class="text-color-primary"
                                        target="_blank"
                                        >ดาวน์โหลด
                                      </a>
                                      <span v-else>-</span>
                                    </div>

                                    <button
                                      class="btn btn-primary float-right"
                                      @click="
                                        () => {
                                          modalInvoiceForm.show();
                                        }
                                      "
                                    >
                                      Upload File
                                    </button>
                                  </div>
                                  <hr class="hr-dotted" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div v-else>
                            <h2 class="text-center mt-50 text-danger">
                              {{ text_summary_error }}
                            </h2>
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
            แบบฟอร์มเปลี่ยนสถานะการจอง
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-12 mt-10">
                <label for="recipient-name" class="col-form-label"
                  ><span class="text-danger">*</span>สถานะการจอง :</label
                >
                <v-select
                  label="name_th"
                  placeholder="สถานะ"
                  :options="selectOptions.booking_statuses"
                  id="slt-is-publish"
                  v-model="booking.status_id"
                  class="form-control v-select-no-border"
                  :clearable="true"
                ></v-select>
              </div>
              <div class="col-12">
                <label for="recipient-name" class="col-form-label"
                  >หมายเหตุ :</label
                >
                <input
                  type="text"
                  class="form-control form-control-plaintext"
                  id="txt-reject_comment"
                  v-model="booking.reject_comment"
                  placeholder="หมายเหตุ"
                />
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
          <button type="button" class="btn btn-warning" @click="onApprove()">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Report Form -->
  <div
    class="modal fade"
    id="modal-report-form"
    tabindex="-1"
    aria-labelledby="modal-report-form"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modal-form-label">
            แบบฟอร์มอับโหลดรายงาน
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="fetchReport"
          ></button>
        </div>
        <div class="modal-body">
          <div class="col-sm-12">
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
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="fetchReport"
          >
            Close
          </button>
          <!-- <button
            type="button"
            class="btn btn-warning"
            @click="onSubmitReport()"
          >
            Submit
          </button> -->
        </div>
      </div>
    </div>
  </div>

  <!-- Slip Form -->
  <div
    class="modal fade"
    id="modal-slip-form"
    tabindex="-1"
    aria-labelledby="modal-slip-form"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modal-form-label">
            แบบฟอร์มอับโหลดหลักฐานการชำระเงิน
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="fetchItem"
          ></button>
        </div>
        <div class="modal-body">
          <div class="col-sm-12">
            <!--  -->
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="fetchReport"
          >
            Close
          </button>
          <!-- <button
            type="button"
            class="btn btn-warning"
            @click="onSubmitReport()"
          >
            Submit
          </button> -->
        </div>
      </div>
    </div>
  </div>

  <!-- Slip Invoice -->
  <div
    class="modal fade"
    id="modal-invoice-form"
    tabindex="-1"
    aria-labelledby="modal-invoice-form"
    aria-hidden="true"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modal-form-label">
            แบบฟอร์มอับโหลดใบเสร็จรับเงิน
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="fetchItem"
          ></button>
        </div>
        <div class="modal-body">
          <div class="col-sm-12">
            <label class="col-form-label">อับโหลดไฟล์</label>
            <input
              ref="invoice_file"
              class="form-control"
              type="file"
              id="formInvoiceFile"
              @change="onSubmitInvoice"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="fetchItem"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import booking_data from "~~/mixins/bookingData";
import address_all_data from "~~/mixins/addressAllData";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Swal from "sweetalert2";
import "@vuepic/vue-datepicker/dist/main.css";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/vue";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import XHRUpload from "@uppy/xhr-upload";

dayjs.extend(buddhistEra);
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

// Equipment
const item = ref(null);

const address_all = ref([]);

address_all.value = address_all_data.data().addresses.map((el) => {
  el.label =
    el.district + " > " + el.amphoe + " > " + el.province + " > " + el.zipcode;
  return el;
});

// Equipment_booking
const booking = ref({
  booking_date: dayjs(),
  example: "",
  equipment_booking_method: [],
  prefix: "",
  firstname: "",
  surname: "",
  member_status: null,
  period_time: null,
  organization: "",
  contact_address: "",
  phone: "",
  phone2: "",
  email: "",
  district_code: null,
  invoice_address: "",
  tax_id: "",
  total_price: 0,
  status_id: 1,
  is_publish: 1,
  address_all: "",
});
const equipmentMethod = ref([]);
const checkSummary = ref(false);
const text_summary_error = ref("");
let modalForm;
let modalReportForm;
let modalSlipForm;
let modalInvoiceForm;

const invoice_file = ref(null);
const preview_invoice_file = ref(null);
const slip_file = ref(null);
const preview_slip_file = ref(null);

const selectOptions = ref({
  member_statuses: booking_data.data().member_statuses,
  booking_statuses: booking_data.data().booking_statuses,
  period_times: booking_data.data().period_times,
  address_all: address_all,
});

const r = (Math.random() + 1).toString(36).substring(7);

const uppy = new Uppy({
  meta: {
    equipment_booking_id: route.params.id,
    secret_key: r,
    id: null,
    table_name: "equipment_booking",
  },
  debug: true,
  //   restrictions: {
  //     allowedFileTypes: ["image/*", "video/*"],
  //   },
}).use(XHRUpload, {
  endpoint: `${runtimeConfig.public.apiBase}/froala/uppy-report`,
  fieldName: "file",
});

uppy.on("upload-success", (file, response) => {
  uppy.setFileMeta(file.id, {
    url: response.body.link,
    equipment_booking_id: response.body.equipment_booking_id,
    id: response.body.id,
  });
});

uppy.on("file-removed", (file, reason) => {
  if (file.meta.id != null) {
    $fetch(`${runtimeConfig.public.apiBase}/report/${file.meta.id}`, {
      method: "DELETE",
    })
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

// Function Fetch
const { data: res1 } = await useAsyncData("booking", async () => {
  let data = await $fetch(
    `${runtimeConfig.public.apiBase}/booking/${route.params.id}`,
    {
      params: {
        lang: useCookie("lang").value,
      },
    }
  );
  return data;
});

booking.value = res1.value.data;
preview_invoice_file.value = res1.value.data.invoice_file;
preview_slip_file.value = res1.value.data.slip_file;

booking.value.address_all = address_all.value.find((x) => {
  return x.district_code == booking.value.district_code;
});

const report_res = ref([]);
const fetchReport = async () => {
  await $fetch(`${runtimeConfig.public.apiBase}/report`, {
    params: {
      is_publish: 1,
      equipment_booking_id: route.params.id,
    },
  })
    .then(async (res) => {
      let report = res.data;
      report_res.value = res.data;

      for (let i = 0; i < report.length; i++) {
        await fetch(report[i].report_file)
          .then((response) => response.blob())
          .then((blob) => {
            let name = report[i].report_file.split("/");
            uppy.addFile({
              name: name[name.length - 1],
              type: blob.type,
              data: blob,
              meta: {
                relativePath: report[i].report_file,
                equipment_booking_id: report[i].equipment_booking_id,
                id: report[i].id,
                secret_key: report[i].secret_key,
                isRemote: true,
              },
              source: "Local",
              isRemote: false,
            });
          });
      }

      //
      uppy.getFiles().forEach((file) => {
        uppy.setFileState(file.id, {
          progress: { uploadComplete: true, uploadStarted: true },
        });
      });
    })
    .catch((error) => error.data);
};

const { data: res } = await useAsyncData("equipment", async () => {
  let data = await $fetch(
    `${runtimeConfig.public.apiBase}/equipment/${res1.value.data.equipment_id}`,
    {
      params: {
        lang: useCookie("lang").value,
      },
    }
  );

  return data;
});

item.value = res.value.data;

const { data: resEquipmentMethod } = await useAsyncData(
  "equipmentMethod",
  async () => {
    let data = await $fetch(
      `${runtimeConfig.public.apiBase}/equipment-method`,
      {
        params: {
          is_publish: 1,
          equipment_id: res1.value.data.equipment_id,
          lang: useCookie("lang").value,
          perPage: 100,
        },
      }
    );

    return data;
  }
);

equipmentMethod.value = resEquipmentMethod.value.data;

// Method

const onLoadEquipmentBookingMethod = () => {
  if (booking.value.equipment_booking_method.length != 0) {
    booking.value.equipment_method = booking.value.equipment_booking_method.map(
      (x) => {
        let equipment_method = equipmentMethod.value.find((em) => {
          return x.equipment_method_id == em.id;
        });

        x.name = equipment_method.name;
        x.name_short = equipment_method.name_short;
        x.total_price = x.price;
        x.unit = equipment_method.unit;

        return x;
      }
    );

    booking.value.total_price = booking.value.price;
  }
};

onMounted(() => {
  modalForm = new bootstrap.Modal(document.getElementById("modal-form"));
  modalReportForm = new bootstrap.Modal(
    document.getElementById("modal-report-form")
  );
  modalSlipForm = new bootstrap.Modal(
    document.getElementById("modal-slip-form")
  );
  modalInvoiceForm = new bootstrap.Modal(
    document.getElementById("modal-invoice-form")
  );

  booking.value.equipment_method = [];
  if (booking.value.period_time) {
    let period_time = booking.value.period_time;
    booking.value.period_time =
      selectOptions.value.period_times[period_time - 1];
  }
  if (booking.value.booking_date) {
    booking.value.booking_date = dayjs(booking.value.booking_date);
  }

  let booking_status = selectOptions.value.booking_statuses.find((p) => {
    return p.id == booking.value.status_id;
  });

  booking.value.booking_status_show = {
    name:
      useCookie("lang").value == "en"
        ? booking_status.name_en
        : booking_status.name_th,
    color: booking_status.color,
    value: booking_status.value,
  };

  if (booking.value.member_status) {
    let member_status = booking.value.member_status;
    booking.value.member_status =
      selectOptions.value.member_statuses[member_status - 1];
  }

  onLoadEquipmentBookingMethod();

  checkSummary.value = true;
  fetchReport();
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
  await $fetch(`${runtimeConfig.public.apiBase}/booking/${id}`, {
    method: "delete",
  })
    .then((res) => {
      if (res.msg == "success") {
        useToast("ลบรายการเสร็จสิ้น", "success");
        router.push({
          path: "/admin/booking",
        });
      } else {
        throw new Error("ERROR");
      }
    })
    .catch((error) => error.data);
};

const onApprove = async () => {
  if (
    booking.value.status_id == null ||
    booking.value.status_id.value == null
  ) {
    useToast("โปรดระบุข้อมูลสถานะ", "error");
    return;
  }

  if (
    booking.value.reject_comment == "" ||
    booking.value.reject_comment == null
  ) {
    if (booking.value.status_id.value == 3) {
      useToast("โปรดระบุหมายเหตุ", "error");
      return;
    }
  }

  await $fetch(
    `${runtimeConfig.public.apiBase}/booking/approve/${booking.value.id}`,
    {
      method: "put",
      body: {
        status_id: booking.value.status_id.value,
        confirmed_date: dayjs().format("YYYY-MM-DD"),
        reject_comment: booking.value.reject_comment,
      },
    }
  )
    .then((res) => {
      if (res.msg == "success") {
        if (res.status_id == 2) {
          useToast("ปรับสถานะเป็นอนุมัติรายการ", "success");
        } else if (res.status_id == 3) {
          useToast("ปรับสถานะเป็น ปฏิเสธรายการ", "success");
        } else if (res.status_id == 4) {
          useToast("ปรับสถานะเป็น ยกเลิกรายการ", "success");
        } else if (res.status_id == 5) {
          useToast("ปรับสถานะเป็น รอการชำระเงิน", "success");
        } else if (res.status_id == 6) {
          useToast("ปรับสถานะเป็น แก้ไขข้อมูลการชำระเงิน", "success");
        } else if (res.status_id == 8) {
          useToast("ปรับสถานะ เป็นเสร็จสิ้น", "success");
        } else {
          useToast("ปรับสถานะเป็น รออนุมัติรายการ", "success");
        }
        modalForm.hide();
        // refreshNuxtData("booking");
        router.push({
          path: "/admin/booking",
        });
      } else {
        throw new Error("ERROR");
      }
    })
    .catch((error) => error.data);
};

const onSubmitReport = async () => {
  console.log("FREEDOM");
};

const onSubmitInvoice = async () => {
  // invoice_File
  // preview_invoice_file
  let data = {
    id: booking.value.id,
    invoice_at: dayjs().format("YYYY-MM-DD"),
    invoice_file:
      invoice_file.value.files != null ? invoice_file.value.files[0] : null,
  };

  var form_data = new FormData();
  for (var key in data) {
    form_data.append(key, data[key]);
  }

  await $fetch(
    `${runtimeConfig.public.apiBase}/booking/invoice-file/${booking.value.id}`,
    {
      method: "put",
      body: form_data,
    }
  ).then((res) => {
    useToast("อับโหลดไฟล์สำเร็จ", "success");
    preview_invoice_file.value = res.invoice_file;
  });
};

useHead({
  title: item.value.title,
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
