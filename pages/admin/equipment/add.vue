<template>
    <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12">
                    <div class="breadcrumb__content p-relative z-index-1">
                        <div class="breadcrumb__list">
                            <span> ผู้ดูแลระบบ </span>
                            <span class="dvdr"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>
                            <span>
                                <NuxtLink href="/admin/equipment">
                                    รายการเครื่องมือ
                                </NuxtLink>
                            </span>
                            <span class="dvdr"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>
                            <span> เพิ่มข้อมูล</span>
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
                    <h4>แบบฟอร์มเพิ่มข้อมูลเครื่องมือวิทยาศาสตร์</h4>
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
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                    ><span class="text-danger">*</span>ภาควิชา :
                                </label>
                                <div class="col-sm-9">
                                    <v-select
                                        label="title"
                                        placeholder="ภาควิชา"
                                        :options="
                                            selectOptions.equipment_departments
                                        "
                                        id="slt-member-status"
                                        v-model="item.equipment_department_id"
                                        class="form-control v-select-no-border"
                                        :clearable="true"
                                    ></v-select>
                                </div>
                            </div>

                            <div class="form-group row mt-10">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                    ><span class="text-danger">*</span
                                    >ชื่อเครื่องมือ :
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
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                    ><span class="text-danger">*</span>รูปภาพปก
                                    :
                                </label>
                                <div class="col-sm-9">
                                    <input
                                        ref="file"
                                        class="form-control"
                                        type="file"
                                        id="formFile"
                                    />
                                </div>
                            </div>

                            <div class="form-group row mt-10">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                    ><span class="text-danger">*</span
                                    >รูปภาพอัตราค่าใช้บริการ :
                                </label>
                                <div class="col-sm-9">
                                    <input
                                        ref="rate_file"
                                        class="form-control"
                                        type="file"
                                        id="formRateFile"
                                    />
                                </div>
                            </div>

                            <div class="form-group row mt-10">
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
                                    ><span class="text-danger">*</span
                                    >รายละเอียด :
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
                                <label
                                    for="gallery"
                                    class="col-sm-3 col-form-label"
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
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
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
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
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
                                <label
                                    for="staticEmail"
                                    class="col-sm-3 col-form-label"
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
                        <button class="btn btn-warning" @click="onSubmit">
                            Submit
                        </button>
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
import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/vue";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import XHRUpload from "@uppy/xhr-upload";

import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

// Variable
const runtimeConfig = useRuntimeConfig();
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
        equipment_id: null,
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
    console.log(file, reason);
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

// Function Fetch
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
        text_success: "เพิ่มรายการเสร็จสิ้น",
        method: "post",
        url: runtimeConfig.public.apiBase + "/equipment/",
    };

    let data = {
        ...item.value,
        secret_key: r,
        equipment_file: file.value.files != null ? file.value.files[0] : null,
        rate_file:
            rate_file.value.files != null ? rate_file.value.files[0] : null,
        equipment_category_id: 1,
        equipment_department_id:
            item.value.equipment_department_id == null
                ? undefined
                : item.value.equipment_department_id.value,
        created_equipment: dayjs().format("YYYY-MM-DD"),
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
});

definePageMeta({
    middleware: "auth",
});
</script>
