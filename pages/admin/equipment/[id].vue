<template>
    <section class="breadcrumb__area include-bg pb-40 pt-30 grey-bg-4">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12" v-if="item != null">
                    <div class="breadcrumb__content p-relative z-index-1">
                        <div class="breadcrumb__list">
                            <span> ผู้ดูแลระบบ </span>
                            <span class="dvdr"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>
                            <span>
                                <NuxtLink href="/admin/equipment">
                                    รายการเครื่องมือ</NuxtLink
                                >
                            </span>
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
                    <div class="postbox__wrapper" v-if="item != null">
                        <!-- Image -->
                        <!-- <div class="postbox__top">
                
              </div> -->
                        <!-- Content -->
                        <div class="postbox__main">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="postbox__main-wrapper">
                                        <div
                                            class="postbox__details-content-wrapper"
                                        >
                                            <div class="text-end">
                                                <NuxtLink
                                                    :to="{
                                                        name: 'admin-equipment-edit-id',
                                                        params: { id: item.id },
                                                    }"
                                                    class="btn btn-warning"
                                                    >Edit</NuxtLink
                                                >

                                                <button
                                                    class="btn btn-danger ml-5"
                                                    v-if="
                                                        useCookie('user')
                                                            .value &&
                                                        useCookie('user').value
                                                            .group_id == 1
                                                    "
                                                    @click="
                                                        onConfirmDelete(item.id)
                                                    "
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>

                                        <ul
                                            class="nav nav-tabs"
                                            id="myTab"
                                            role="tablist"
                                        >
                                            <li
                                                class="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    class="nav-link active"
                                                    id="home-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#home-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="home-tab-pane"
                                                    aria-selected="true"
                                                >
                                                    EQUIPMENT
                                                </button>
                                            </li>
                                            <li
                                                class="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    class="nav-link"
                                                    id="profile-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#profile-tab-pane"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="profile-tab-pane"
                                                    aria-selected="false"
                                                >
                                                    METHOD
                                                </button>
                                            </li>
                                        </ul>
                                        <div
                                            class="tab-content"
                                            id="myTabContent"
                                        >
                                            <div
                                                class="tab-pane fade show active"
                                                id="home-tab-pane"
                                                role="tabpanel"
                                                aria-labelledby="home-tab"
                                                tabindex="0"
                                            >
                                                <!--  -->
                                                <div
                                                    class="mt-30 mb-30 pl-10 pt-15 pb-10 bg-grey"
                                                >
                                                    <h4>
                                                        <i
                                                            class="fa-solid fa-book"
                                                        ></i>
                                                        <span class="ml-10"
                                                            >Thai</span
                                                        >
                                                    </h4>
                                                </div>

                                                <div
                                                    class="postbox__details-content-wrapper mt-20"
                                                >
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <span
                                                                class="fw-bold"
                                                                >ชื่อเครื่องมือ
                                                                :
                                                            </span>
                                                            <span>{{
                                                                item.title_th
                                                            }}</span>
                                                            <hr />
                                                        </div>
                                                        <div class="col-12">
                                                            <span
                                                                class="fw-bold"
                                                                >ภาควิชา :
                                                            </span>
                                                            <span>{{
                                                                item
                                                                    .equipment_department
                                                                    .name
                                                            }}</span>
                                                            <hr />
                                                        </div>
                                                        <div class="col-12">
                                                            <span
                                                                class="fw-bold"
                                                                >รูปภาพปก :
                                                            </span>
                                                            <div>
                                                                <img
                                                                    :src="
                                                                        item.equipment_file
                                                                    "
                                                                    class="mt-20"
                                                                    style="
                                                                        max-height: 400px;
                                                                    "
                                                                />
                                                            </div>

                                                            <hr />
                                                        </div>
                                                        <div class="col-12">
                                                            <span
                                                                class="fw-bold"
                                                                >รายละเอียด :
                                                            </span>
                                                            <div
                                                                v-html="
                                                                    item.detail_th
                                                                "
                                                            ></div>
                                                            <hr />
                                                        </div>
                                                        <div class="col-12">
                                                            <span
                                                                class="fw-bold"
                                                                >รูปอัตราค่าใช้บริการ
                                                                :
                                                            </span>
                                                            <div>
                                                                <img
                                                                    :src="
                                                                        item.rate_file
                                                                    "
                                                                    class="mt-20"
                                                                    style="
                                                                        max-height: 400px;
                                                                    "
                                                                />
                                                            </div>

                                                            <hr />
                                                        </div>
                                                        <div class="col-12">
                                                            <span
                                                                class="fw-bold"
                                                                >วันที่ลงข้อมูล
                                                                :
                                                            </span>
                                                            <span>{{
                                                                dayjs(
                                                                    item.created_equipment
                                                                )
                                                                    .locale(
                                                                        "th"
                                                                    )
                                                                    .format(
                                                                        "DD MMM BBBB"
                                                                    )
                                                            }}</span>
                                                            <hr />
                                                        </div>
                                                        <div class="col-12">
                                                            <span
                                                                class="fw-bold"
                                                                >สถานะ :
                                                            </span>

                                                            <span
                                                                v-if="
                                                                    item.is_publish !=
                                                                    null
                                                                "
                                                                :class="
                                                                    'badge rounded-pill bg-' +
                                                                    booking_data.data()
                                                                        .publishes[
                                                                        item
                                                                            .is_publish
                                                                    ].color
                                                                "
                                                                >{{
                                                                    booking_data.data()
                                                                        .publishes[
                                                                        item
                                                                            .is_publish
                                                                    ].name_th
                                                                }}</span
                                                            >

                                                            <hr />
                                                        </div>

                                                        <div class="col-12">
                                                            <span
                                                                class="fw-bold"
                                                                >แกลลอรี่ :
                                                            </span>
                                                            <div
                                                                class="mx-auto"
                                                            >
                                                                <ClientOnly>
                                                                    <Swiper
                                                                        :slidesPerView="
                                                                            1
                                                                        "
                                                                        :spaceBetween="
                                                                            10
                                                                        "
                                                                        :loop="
                                                                            true
                                                                        "
                                                                        :thumbs="{
                                                                            swiper: thumbsSwiper,
                                                                        }"
                                                                        :navigation="
                                                                            true
                                                                        "
                                                                        :modules="
                                                                            modules
                                                                        "
                                                                        :speed="
                                                                            5000
                                                                        "
                                                                        :autoplay="{
                                                                            delay: 5000,
                                                                            disableOnInteraction: true,
                                                                        }"
                                                                        class="mySwiper2 mb-10"
                                                                        v-if="
                                                                            gallery.length !=
                                                                            0
                                                                        "
                                                                    >
                                                                        <SwiperSlide
                                                                            v-for="ng in gallery"
                                                                            :key="
                                                                                ng.id
                                                                            "
                                                                        >
                                                                            <img
                                                                                :src="
                                                                                    ng.equipment_gallery_file
                                                                                "
                                                                                style="
                                                                                    max-width: 800px;
                                                                                    margin-left: auto;
                                                                                    margin-right: auto;
                                                                                    display: block;
                                                                                "
                                                                            />
                                                                        </SwiperSlide>
                                                                    </Swiper>

                                                                    <Swiper
                                                                        @swiper="
                                                                            setThumbsSwiper
                                                                        "
                                                                        :spaceBetween="
                                                                            10
                                                                        "
                                                                        :slidesPerView="
                                                                            4
                                                                        "
                                                                        :freeMode="
                                                                            true
                                                                        "
                                                                        :watchSlidesProgress="
                                                                            true
                                                                        "
                                                                        :modules="
                                                                            modules
                                                                        "
                                                                        class="mySwiper"
                                                                    >
                                                                        <SwiperSlide
                                                                            v-for="ng in gallery"
                                                                            :key="
                                                                                ng.id
                                                                            "
                                                                        >
                                                                            <img
                                                                                :src="
                                                                                    ng.equipment_gallery_file
                                                                                "
                                                                                style="
                                                                                    max-width: 200px;
                                                                                    cursor: pointer;
                                                                                "
                                                                            />
                                                                        </SwiperSlide>
                                                                    </Swiper>
                                                                </ClientOnly>
                                                            </div>

                                                            <hr />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    class="mt-30 mb-30 pl-10 pt-15 pb-10 bg-grey"
                                                >
                                                    <h4>
                                                        <i
                                                            class="fa-solid fa-book"
                                                        ></i>
                                                        <span class="ml-10"
                                                            >English</span
                                                        >
                                                    </h4>
                                                </div>

                                                <div
                                                    class="postbox__details-content-wrapper mt-20"
                                                >
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <span
                                                                class="fw-bold"
                                                                >ชื่อเครื่องมือ
                                                                :
                                                            </span>
                                                            <span>{{
                                                                item.title_en
                                                            }}</span>
                                                            <hr />
                                                        </div>
                                                        <div class="col-12">
                                                            <span
                                                                class="fw-bold"
                                                                >รายละเอียด :
                                                            </span>
                                                            <div
                                                                v-html="
                                                                    item.detail_en
                                                                "
                                                            ></div>
                                                            <hr />
                                                        </div>
                                                    </div>
                                                </div>
                                                <!--  -->
                                            </div>
                                            <div
                                                class="tab-pane fade"
                                                id="profile-tab-pane"
                                                role="tabpanel"
                                                aria-labelledby="profile-tab"
                                                tabindex="0"
                                            >
                                                <div class="mb-30 mt-30">
                                                    <button
                                                        type="button"
                                                        class="btn btn-warning"
                                                        @click="
                                                            () => {
                                                                type_submit =
                                                                    'add';
                                                                method_item =
                                                                    {};
                                                                modalForm.show();
                                                            }
                                                        "
                                                    >
                                                        <i
                                                            class="fa-regular fa-plus"
                                                        ></i>
                                                        ADD
                                                    </button>
                                                </div>

                                                <table
                                                    class="table table-bordered table-striped table-admin"
                                                >
                                                    <thead>
                                                        <tr>
                                                            <th
                                                                class="text-center"
                                                            >
                                                                ชื่อ
                                                            </th>
                                                            <th
                                                                class="text-center"
                                                            >
                                                                ตัวย่อ
                                                            </th>
                                                            <th
                                                                class="text-center"
                                                            >
                                                                หน่วย (TH)
                                                            </th>
                                                            <th
                                                                class="text-center"
                                                            >
                                                                หน่วย (EN)
                                                            </th>
                                                            <th
                                                                class="text-center"
                                                            >
                                                                ราคา
                                                                หน่วยงานภายใน
                                                                มจพ.
                                                            </th>
                                                            <th
                                                                class="text-center"
                                                            >
                                                                ราคา
                                                                มหาวิทยาลัยอื่น
                                                                ๆ /
                                                                หน่วยงานราชการ
                                                            </th>
                                                            <th
                                                                class="text-center"
                                                            >
                                                                ราคา เอกชน /
                                                                รัฐวิสาหกิจ
                                                            </th>

                                                            <th
                                                                class="text-center"
                                                            >
                                                                สถานะ
                                                            </th>
                                                            <th
                                                                class="text-center"
                                                            >
                                                                จัดการ
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody
                                                        v-if="
                                                            method_items.length !=
                                                            0
                                                        "
                                                    >
                                                        <tr
                                                            v-for="(
                                                                it, idx
                                                            ) in method_items"
                                                            :key="idx"
                                                        >
                                                            <td>
                                                                {{ it.name_th }}
                                                            </td>
                                                            <td>
                                                                {{
                                                                    it.name_short
                                                                }}
                                                            </td>
                                                            <td>
                                                                {{ it.unit_th }}
                                                            </td>
                                                            <td>
                                                                {{ it.unit_en }}
                                                            </td>
                                                            <td
                                                                class="text-center"
                                                            >
                                                                {{
                                                                    it.member1_price
                                                                }}
                                                            </td>
                                                            <td
                                                                class="text-center"
                                                            >
                                                                {{
                                                                    it.member2_price
                                                                }}
                                                            </td>
                                                            <td
                                                                class="text-center"
                                                            >
                                                                {{
                                                                    it.member3_price
                                                                }}
                                                            </td>
                                                            <th
                                                                class="text-center"
                                                            >
                                                                <span
                                                                    v-if="
                                                                        it.is_publish !=
                                                                        null
                                                                    "
                                                                    :class="
                                                                        'badge rounded-pill bg-' +
                                                                        booking_data.data()
                                                                            .publishes[
                                                                            it
                                                                                .is_publish
                                                                        ].color
                                                                    "
                                                                    >{{
                                                                        booking_data.data()
                                                                            .publishes[
                                                                            it
                                                                                .is_publish
                                                                        ]
                                                                            .name_th
                                                                    }}</span
                                                                >
                                                            </th>
                                                            <td
                                                                class="text-center"
                                                            >
                                                                <button
                                                                    class="btn btn-sm btn-warning"
                                                                    @click="
                                                                        () => {
                                                                            type_submit =
                                                                                'edit';
                                                                            method_item =
                                                                                {};

                                                                            //   let is_fixrate =
                                                                            //     it.is_fixrate == 1
                                                                            //       ? selectOptions.fixrates[1]
                                                                            //       : selectOptions.fixrates[0];

                                                                            let is_publish =
                                                                                selectOptions
                                                                                    .publishes[
                                                                                    it
                                                                                        .is_publish
                                                                                ];
                                                                            method_item =
                                                                                {
                                                                                    ...it,
                                                                                    is_publish:
                                                                                        is_publish,
                                                                                    // is_fixrate: is_fixrate,
                                                                                };
                                                                            modalForm.show();
                                                                        }
                                                                    "
                                                                >
                                                                    <i
                                                                        class="fa fa-edit"
                                                                    ></i>
                                                                </button>
                                                                <button
                                                                    class="btn btn-sm btn-danger ml-5"
                                                                    @click="
                                                                        onMethodConfirmDelete(
                                                                            it.id
                                                                        )
                                                                    "
                                                                >
                                                                    <i
                                                                        class="fa fa-trash"
                                                                    ></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <!--  -->
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
                        แบบฟอร์มข้อมูลวิธีการ
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
                            <div class="col-12">
                                <label
                                    for="recipient-name"
                                    class="col-form-label"
                                    ><span class="text-danger">*</span>ชื่อ
                                    :</label
                                >
                                <input
                                    type="text"
                                    class="form-control form-control-plaintext"
                                    id="txt-prefix"
                                    v-model="method_item.name_th"
                                    placeholder="ชื่อ"
                                />
                            </div>

                            <div class="col-12 mt-10">
                                <label
                                    for="recipient-name"
                                    class="col-form-label"
                                    ><span class="text-danger">*</span>ชื่อย่อ
                                    :</label
                                >
                                <input
                                    type="text"
                                    class="form-control form-control-plaintext"
                                    id="txt-prefix"
                                    v-model="method_item.name_short"
                                    placeholder="ชื่อย่อ"
                                />
                            </div>

                            <div class="col-12 mt-10">
                                <label
                                    for="recipient-name"
                                    class="col-form-label"
                                    ><span class="text-danger">*</span>หน่วย
                                    (TH) :</label
                                >
                                <input
                                    type="text"
                                    class="form-control form-control-plaintext"
                                    id="txt-prefix"
                                    v-model="method_item.unit_th"
                                    placeholder="หน่วย (EN)"
                                />
                            </div>

                            <div class="col-12 mt-10">
                                <label
                                    for="recipient-name"
                                    class="col-form-label"
                                    ><span class="text-danger">*</span>หน่วย
                                    (EN) :</label
                                >
                                <input
                                    type="text"
                                    class="form-control form-control-plaintext"
                                    id="txt-prefix"
                                    v-model="method_item.unit_en"
                                    placeholder="หน่วย (EN)"
                                />
                            </div>

                            <!-- <div class="col-12 mt-10">
                <label for="recipient-name" class="col-form-label"
                  ><span class="text-danger">*</span>Fixrate :</label
                >
                <v-select
                  label="name"
                  placeholder="Fix Rate"
                  :options="selectOptions.fixrates"
                  id="slt-is-publish"
                  v-model="method_item.is_fixrate"
                  class="form-control v-select-no-border"
                  :clearable="true"
                ></v-select>
              </div> -->

                            <div class="col-12 mt-10">
                                <label
                                    for="recipient-name"
                                    class="col-form-label"
                                    ><span class="text-danger">*</span>ราคา
                                    (หน่วยงานภายใน มจพ.) :</label
                                >
                                <input
                                    type="text"
                                    class="form-control form-control-plaintext"
                                    id="txt-prefix"
                                    v-model="method_item.member1_price"
                                    placeholder="ราคา"
                                />
                            </div>
                            <div class="col-12 mt-10">
                                <label
                                    for="recipient-name"
                                    class="col-form-label"
                                    ><span class="text-danger">*</span>ราคา
                                    (มหาวิทยาลัยอื่น ๆ/หน่วยงานราชการ) :</label
                                >
                                <input
                                    type="text"
                                    class="form-control form-control-plaintext"
                                    id="txt-prefix"
                                    v-model="method_item.member2_price"
                                    placeholder="ราคา"
                                />
                            </div>
                            <div class="col-12 mt-10">
                                <label
                                    for="recipient-name"
                                    class="col-form-label"
                                    ><span class="text-danger">*</span>ราคา
                                    (เอกชน/รัฐวิสาหกิจ) :</label
                                >
                                <input
                                    type="text"
                                    class="form-control form-control-plaintext"
                                    id="txt-prefix"
                                    v-model="method_item.member3_price"
                                    placeholder="ราคา"
                                />
                            </div>
                            <div class="col-12 mt-10">
                                <label
                                    for="recipient-name"
                                    class="col-form-label"
                                    ><span class="text-danger">*</span>สถานะ
                                    :</label
                                >
                                <v-select
                                    label="name_th"
                                    placeholder="สถานะ"
                                    :options="selectOptions.publishes"
                                    id="slt-is-publish"
                                    v-model="method_item.is_publish"
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
                    <button
                        type="button"
                        class="btn btn-warning"
                        @click="onMethodSubmit()"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import {
    Autoplay,
    FreeMode,
    Navigation,
    Pagination,
    Scrollbar,
    Thumbs,
} from "swiper";
import dayjs from "dayjs";
import "dayjs/locale/th";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import booking_data from "~~/mixins/bookingData";

import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();
const modules = [Autoplay, FreeMode, Navigation, Pagination, Scrollbar, Thumbs];

const gallery = ref([]);
const thumbsSwiper = ref(null);

const item = ref(null);
const method_items = ref([]);
const method_item = ref({});
const type_submit = ref("");
let modalForm;

const selectOptions = ref({
    publishes: booking_data.data().publishes,
    fixrates: [
        { name: "No", id: null, value: null },
        { name: "Yes", id: 1, value: 1 },
    ],
});

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

// Fetch
const fetchGallery = async () => {
    let data = await $fetch(
        `${runtimeConfig.public.apiBase}/equipment-gallery`,
        {
            params: {
                is_publish: 1,
                equipment_id: route.params.id,
            },
        }
    ).catch((error) => error.data);

    gallery.value = data.data;
};

const fetchItem = async () => {
    let data = await $fetch(
        `${runtimeConfig.public.apiBase}/equipment/${route.params.id}`,
        {
            params: {
                lang: useCookie("lang").value,
            },
        }
    ).catch((error) => error.data);

    item.value = data.data;
};

const fetchMethodItems = async () => {
    let data = await $fetch(
        `${runtimeConfig.public.apiBase}/equipment-method`,
        {
            params: {
                equipment_id: route.params.id,
                perPage: 20,
                currentPage: 1,
                lang: "th",
            },
        }
    ).catch((error) => error.data);

    method_items.value = data.data;
};

onMounted(() => {
    fetchGallery();
    fetchItem();
    modalForm = new bootstrap.Modal(document.getElementById("modal-form"));
    fetchMethodItems();
});

// Event
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
    await $fetch(`${runtimeConfig.public.apiBase}/equipment/${id}`, {
        method: "delete",
    })
        .then((res) => {
            if (res.msg == "success") {
                useToast("ลบรายการเสร็จสิ้น", "success");
                router.push({ path: "/admin/equipment" });
            } else {
                throw new Error("ERROR");
            }
        })
        .catch((error) => error.data);
};

const onMethodConfirmDelete = async (id) => {
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
            onMethodDelete(id);
        }
    });
};

const onMethodDelete = async (id) => {
    await $fetch(`${runtimeConfig.public.apiBase}/equipment-method/${id}`, {
        method: "delete",
    })
        .then((res) => {
            if (res.msg == "success") {
                useToast("ลบรายการเสร็จสิ้น", "success");
                fetchMethodItems();
            } else {
                throw new Error("ERROR");
            }
        })
        .catch((error) => error.data);
};

const onMethodSubmit = async () => {
    if (
        method_item.value.is_publish == null ||
        method_item.value.is_publish.id == null ||
        method_item.value.name_th == "" ||
        method_item.value.name_th == null ||
        method_item.value.name_short == "" ||
        method_item.value.name_short == null ||
        method_item.value.unit_th == "" ||
        method_item.value.unit_th == null ||
        method_item.value.unit_en == "" ||
        method_item.value.unit_en == null ||
        method_item.value.member1_price == "" ||
        method_item.value.member1_price == null ||
        method_item.value.member2_price == "" ||
        method_item.value.member2_price == null ||
        method_item.value.member3_price == "" ||
        method_item.value.member3_price == null
    ) {
        useToast("โปรดระบุข้อมูลให้ครบถ้วน", "error");
        return;
    }

    let type_object = {
        text_success: "เพิ่มรายการเสร็จสิ้น",
        method: "post",
        url: runtimeConfig.public.apiBase + "/equipment-method/",
    };

    if (type_submit.value == "edit") {
        type_object = {
            text_success: "แก้ไขรายการเสร็จสิ้น",
            method: "put",
            url: type_object.url + method_item.value.id,
        };
    }

    await $fetch(type_object.url, {
        method: type_object.method,
        body: {
            ...method_item.value,
            equipment_id: route.params.id,
            name_en: method_item.value.name_th,
            name_en: method_item.value.name_th,
            is_fixrate: 1, //method_item.value.is_fixrate.value,
            is_publish: method_item.value.is_publish.value,
            member1_price: method_item.value.member1_price,
            member2_price: method_item.value.member2_price,
            member3_price: method_item.value.member3_price,
        },
    })
        .then((res) => {
            if (res.msg == "success") {
                useToast(type_object.text_success, "success");
                modalForm.hide();
                fetchMethodItems();
            } else {
                throw new Error("ERROR");
            }
        })
        .catch((error) => error.data);
};

useHead({
    title: "Equipment",
});

definePageMeta({
    middleware: "auth",
});
</script>

<style scoped>
.breadcrumb__title {
    font-size: 50px;
}
</style>
