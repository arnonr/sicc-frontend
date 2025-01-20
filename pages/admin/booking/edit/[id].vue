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
                                <NuxtLink href="/admin/booking">
                                    รายการจอง
                                </NuxtLink></span
                            >
                            <span class="dvdr"
                                ><i class="fa-solid fa-circle-small"></i
                            ></span>
                            <span> แก้ไขข้อมูล </span>
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
                                            <!-- <h3>{{ item.equipment_department.name }}</h3> -->
                                            <h3>{{ item.title_en }}</h3>
                                            <h3>{{ item.title_th }}</h3>
                                        </div>

                                        <div
                                            class="mt-30 pl-10 pt-15 pb-10 bg-grey"
                                        >
                                            <h4>
                                                <i
                                                    class="fa-solid fa-microscope"
                                                ></i>
                                                <span class="ml-10">{{
                                                    $t("Booking")
                                                }}</span>
                                            </h4>
                                        </div>

                                        <div
                                            class="postbox__details-content-wrapper mt-20 row"
                                        >
                                            <div
                                                class="col-xxl-12 col-xl-12 col-lg-12"
                                            >
                                                <div>
                                                    <form-wizard
                                                        hide-buttons
                                                        disable-back
                                                        color="#ffcb05"
                                                        ref="formStep"
                                                        finishButtonText="SUBMIT ORDER"
                                                    >
                                                        <tab-content
                                                            :title="
                                                                $t(
                                                                    'Method Lists'
                                                                )
                                                            "
                                                        >
                                                            <div
                                                                class="card"
                                                                style="
                                                                    border: none;
                                                                "
                                                            >
                                                                <div
                                                                    class="card-body"
                                                                >
                                                                    <div
                                                                        class="form-group row"
                                                                    >
                                                                        <label
                                                                            for="staticEmail"
                                                                            class="col-sm-3 col-form-label"
                                                                            ><span
                                                                                class="text-danger"
                                                                                >*</span
                                                                            >ระบุวันที่/Date
                                                                            :
                                                                        </label>
                                                                        <div
                                                                            class="col-sm-9"
                                                                        >
                                                                            <VueDatePicker
                                                                                v-model="
                                                                                    booking.booking_date
                                                                                "
                                                                                :enable-time-picker="
                                                                                    false
                                                                                "
                                                                                :locale="
                                                                                    useCookie(
                                                                                        'lang'
                                                                                    )
                                                                                        .value ==
                                                                                    'en'
                                                                                        ? 'en'
                                                                                        : 'th'
                                                                                "
                                                                                auto-apply
                                                                                :format="
                                                                                    format
                                                                                "
                                                                            >
                                                                                <template
                                                                                    #year-overlay-value="{
                                                                                        text,
                                                                                    }"
                                                                                >
                                                                                    {{
                                                                                        useCookie(
                                                                                            "lang"
                                                                                        )
                                                                                            .value ==
                                                                                        "en"
                                                                                            ? text
                                                                                            : parseInt(
                                                                                                  text
                                                                                              ) +
                                                                                              543
                                                                                    }}
                                                                                </template>

                                                                                <template
                                                                                    #year="{
                                                                                        value,
                                                                                    }"
                                                                                >
                                                                                    {{
                                                                                        useCookie(
                                                                                            "lang"
                                                                                        )
                                                                                            .value ==
                                                                                        "en"
                                                                                            ? value
                                                                                            : value +
                                                                                              543
                                                                                    }}
                                                                                </template>
                                                                            </VueDatePicker>
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        class="form-group row mt-10"
                                                                    >
                                                                        <label
                                                                            for="staticEmail"
                                                                            class="col-sm-3 col-form-label"
                                                                            ><span
                                                                                class="text-danger"
                                                                                >*</span
                                                                            >เลือกช่วงเวลา/Period
                                                                            Time
                                                                            :
                                                                        </label>
                                                                        <div
                                                                            class="col-sm-9"
                                                                        >
                                                                            <v-select
                                                                                :label="
                                                                                    useCookie(
                                                                                        'lang'
                                                                                    ) ==
                                                                                    'en'
                                                                                        ? 'name_en'
                                                                                        : 'name_th'
                                                                                "
                                                                                placeholder="ช่วงเวลา/Period Time"
                                                                                :options="
                                                                                    selectOptions.period_times
                                                                                "
                                                                                id="slt-period_time"
                                                                                v-model="
                                                                                    booking.period_time
                                                                                "
                                                                                class="form-control v-select-no-border"
                                                                                :clearable="
                                                                                    true
                                                                                "
                                                                                :selectable="
                                                                                    (
                                                                                        option
                                                                                    ) =>
                                                                                        option.available ==
                                                                                        true
                                                                                "
                                                                                item-value="id"
                                                                            ></v-select>
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        class="form-group row mt-10"
                                                                    >
                                                                        <label
                                                                            for="staticEmail"
                                                                            class="col-sm-3 col-form-label"
                                                                            ><span
                                                                                class="text-danger"
                                                                                >*</span
                                                                            >ข้อมูลตัวอย่าง/Example
                                                                            :
                                                                        </label>
                                                                        <div
                                                                            class="col-sm-9"
                                                                        >
                                                                            <textarea
                                                                                class="form-control"
                                                                                placeholder="ข้อมูลตัวอย่างที่นำมาวิเคราะห์"
                                                                                id="txt-example"
                                                                                style="
                                                                                    height: 100px;
                                                                                "
                                                                                v-model="
                                                                                    booking.example
                                                                                "
                                                                            ></textarea>
                                                                        </div>
                                                                    </div>

                                                                    <hr />

                                                                    <h5
                                                                        class="card-title"
                                                                    >
                                                                        <span
                                                                            class="text-danger"
                                                                            >*</span
                                                                        >{{
                                                                            $t(
                                                                                "Method Lists"
                                                                            )
                                                                        }}
                                                                        :
                                                                    </h5>

                                                                    <div
                                                                        class="table-responsive"
                                                                        v-if="
                                                                            equipmentMethod.length !=
                                                                            0
                                                                        "
                                                                    >
                                                                        <table
                                                                            class="table table-responsive table-bordered mt-20 table-method"
                                                                        >
                                                                            <thead>
                                                                                <tr>
                                                                                    <th
                                                                                        class="text-center"
                                                                                        style="
                                                                                            width: 50px;
                                                                                        "
                                                                                    >
                                                                                        {{
                                                                                            $t(
                                                                                                "Choose"
                                                                                            )
                                                                                        }}
                                                                                    </th>
                                                                                    <th>
                                                                                        {{
                                                                                            $t(
                                                                                                "Lists"
                                                                                            )
                                                                                        }}
                                                                                    </th>
                                                                                    <th
                                                                                        class="text-center"
                                                                                    >
                                                                                        {{
                                                                                            $t(
                                                                                                "Method"
                                                                                            )
                                                                                        }}
                                                                                    </th>
                                                                                    <th
                                                                                        class="text-center"
                                                                                        style="
                                                                                            width: 100px;
                                                                                        "
                                                                                    >
                                                                                        {{
                                                                                            $t(
                                                                                                "Quantity"
                                                                                            )
                                                                                        }}
                                                                                    </th>
                                                                                    <th
                                                                                        class="text-center"
                                                                                        style="
                                                                                            width: 100px;
                                                                                        "
                                                                                    >
                                                                                        {{
                                                                                            $t(
                                                                                                "Unit"
                                                                                            )
                                                                                        }}
                                                                                    </th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr
                                                                                    v-for="(
                                                                                        it,
                                                                                        index
                                                                                    ) in equipmentMethod"
                                                                                    :key="
                                                                                        index
                                                                                    "
                                                                                >
                                                                                    <td
                                                                                        class="text-center"
                                                                                    >
                                                                                        <input
                                                                                            class="form-check-input"
                                                                                            type="checkbox"
                                                                                            :id="
                                                                                                'equipment-method-no-' +
                                                                                                it.id
                                                                                            "
                                                                                            :checked="
                                                                                                false
                                                                                            "
                                                                                            @click="
                                                                                                onSelectMethod(
                                                                                                    it,
                                                                                                    $event
                                                                                                        .target
                                                                                                        .checked
                                                                                                )
                                                                                            "
                                                                                        />
                                                                                    </td>
                                                                                    <td>
                                                                                        {{
                                                                                            it.name
                                                                                        }}
                                                                                    </td>
                                                                                    <td
                                                                                        class="text-center"
                                                                                    >
                                                                                        {{
                                                                                            it.name_short
                                                                                        }}
                                                                                    </td>
                                                                                    <td
                                                                                        class="text-center"
                                                                                    >
                                                                                        <input
                                                                                            type="number"
                                                                                            :id="
                                                                                                'equipment-method-quantity-' +
                                                                                                it.id
                                                                                            "
                                                                                            disabled="true"
                                                                                            class="form-control text-quantity"
                                                                                            value="0"
                                                                                            min="0"
                                                                                            @change="
                                                                                                onChangeQuantity(
                                                                                                    it.id,
                                                                                                    $event
                                                                                                        .target
                                                                                                        .value
                                                                                                )
                                                                                            "
                                                                                        />
                                                                                    </td>
                                                                                    <td
                                                                                        class="text-center"
                                                                                    >
                                                                                        {{
                                                                                            it.unit
                                                                                        }}
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </tab-content>
                                                        <tab-content
                                                            :title="
                                                                $t('Billing')
                                                            "
                                                        >
                                                            <div
                                                                class="card"
                                                                style="
                                                                    border: none;
                                                                "
                                                            >
                                                                <div
                                                                    class="card-body"
                                                                >
                                                                    <div
                                                                        class="form-group row"
                                                                    >
                                                                        <label
                                                                            for="staticEmail"
                                                                            class="col-sm-3 col-form-label"
                                                                            ><span
                                                                                class="text-danger"
                                                                                >*</span
                                                                            >ชื่อ-นามสกุล/Name
                                                                            Surname
                                                                            :
                                                                        </label>
                                                                        <div
                                                                            class="col-sm-9"
                                                                        >
                                                                            <div
                                                                                class="row"
                                                                            >
                                                                                <div
                                                                                    class="col-md-2"
                                                                                >
                                                                                    <input
                                                                                        type="text"
                                                                                        class="form-control form-control-plaintext"
                                                                                        id="txt-prefix"
                                                                                        v-model="
                                                                                            booking.prefix
                                                                                        "
                                                                                        placeholder="คำนำหน้า"
                                                                                    />
                                                                                </div>
                                                                                <div
                                                                                    class="col-md-5"
                                                                                >
                                                                                    <input
                                                                                        type="text"
                                                                                        class="form-control form-control-plaintext"
                                                                                        id="txt-firstname"
                                                                                        v-model="
                                                                                            booking.firstname
                                                                                        "
                                                                                        placeholder="ชื่อ"
                                                                                    />
                                                                                </div>
                                                                                <div
                                                                                    class="col-md-5"
                                                                                >
                                                                                    <input
                                                                                        type="text"
                                                                                        class="form-control form-control-plaintext"
                                                                                        id="txt-surname"
                                                                                        v-model="
                                                                                            booking.surname
                                                                                        "
                                                                                        placeholder="นามสกุล"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        class="form-group row mt-10"
                                                                    >
                                                                        <label
                                                                            for="staticEmail"
                                                                            class="col-sm-3 col-form-label"
                                                                            ><span
                                                                                class="text-danger"
                                                                                >*</span
                                                                            >สถานะ/Member
                                                                            Status
                                                                            :
                                                                        </label>
                                                                        <div
                                                                            class="col-sm-9"
                                                                        >
                                                                            <v-select
                                                                                :label="
                                                                                    useCookie(
                                                                                        'lang'
                                                                                    ) ==
                                                                                    'en'
                                                                                        ? 'name_en'
                                                                                        : 'name_th'
                                                                                "
                                                                                placeholder="สถานะ/Member Status"
                                                                                :options="
                                                                                    selectOptions.member_statuses
                                                                                "
                                                                                id="slt-member-status"
                                                                                v-model="
                                                                                    booking.member_status
                                                                                "
                                                                                class="form-control v-select-no-border"
                                                                                :clearable="
                                                                                    true
                                                                                "
                                                                            ></v-select>
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        class="form-group row mt-10"
                                                                    >
                                                                        <label
                                                                            for="staticEmail"
                                                                            class="col-sm-4 col-form-label"
                                                                            >ชื่อหน่วยงาน/Organization
                                                                            :
                                                                        </label>
                                                                        <div
                                                                            class="col-sm-8"
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                class="form-control form-control-plaintext"
                                                                                id="txt-organization"
                                                                                v-model="
                                                                                    booking.organization
                                                                                "
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        class="form-group row mt-10"
                                                                    >
                                                                        <label
                                                                            for="staticEmail"
                                                                            class="col-sm-4 col-form-label"
                                                                            >ที่อยู่ที่สามารถติดต่อได้/Contact
                                                                            Address
                                                                            :
                                                                        </label>
                                                                        <div
                                                                            class="col-sm-8"
                                                                        >
                                                                            <textarea
                                                                                class="form-control"
                                                                                placeholder=""
                                                                                id="txt-contact-address"
                                                                                style="
                                                                                    height: 70px;
                                                                                "
                                                                                v-model="
                                                                                    booking.contact_address
                                                                                "
                                                                            ></textarea>
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        class="form-group row mt-10"
                                                                    >
                                                                        <label
                                                                            for="staticEmail"
                                                                            class="col-sm-3 col-form-label"
                                                                            ><span
                                                                                class="text-danger"
                                                                                >*</span
                                                                            >โทรศัพท์/Phone
                                                                            :
                                                                        </label>
                                                                        <div
                                                                            class="col-sm-9"
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                class="form-control form-control-plaintext"
                                                                                id="txt-phone"
                                                                                v-model="
                                                                                    booking.phone
                                                                                "
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        class="form-group row mt-10"
                                                                    >
                                                                        <label
                                                                            for="staticEmail"
                                                                            class="col-sm-3 col-form-label"
                                                                            ><span
                                                                                class="text-danger"
                                                                                >*</span
                                                                            >E-mail
                                                                            :
                                                                        </label>
                                                                        <div
                                                                            class="col-sm-9"
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                class="form-control form-control-plaintext"
                                                                                id="txt-email"
                                                                                v-model="
                                                                                    booking.email
                                                                                "
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <hr />

                                                                    <div
                                                                        class="mb-3 form-check"
                                                                    >
                                                                        <input
                                                                            type="checkbox"
                                                                            class="form-check-input"
                                                                            id="exampleCheck1"
                                                                            v-model="
                                                                                sameAddress.value
                                                                            "
                                                                            @change="
                                                                                checkSameAddress
                                                                            "
                                                                        />
                                                                        <label
                                                                            class="form-check-label"
                                                                            for="exampleCheck1"
                                                                            >ใช้ที่อยู่เดียวกัน</label
                                                                        >
                                                                    </div>

                                                                    <div
                                                                        class="form-group row mt-10"
                                                                    >
                                                                        <label
                                                                            for="staticEmail"
                                                                            class="col-sm-4 col-form-label"
                                                                            >ที่อยู่ออกใบกำกับภาษี/
                                                                            Invoice
                                                                            Address
                                                                            :
                                                                        </label>
                                                                        <div
                                                                            class="col-sm-8"
                                                                        >
                                                                            <textarea
                                                                                class="form-control"
                                                                                placeholder=""
                                                                                id="txt-invoice-address"
                                                                                style="
                                                                                    height: 70px;
                                                                                "
                                                                                v-model="
                                                                                    booking.invoice_address
                                                                                "
                                                                            ></textarea>
                                                                        </div>
                                                                    </div>

                                                                    <!-- <div class="form-group row mt-10">
                                    <label
                                      for="ProvinceAmphurTumbol"
                                      class="col-sm-4 col-form-label"
                                      ><span class="text-danger">*</span
                                      >ตำบล/อำเภอ/จังหวัด :
                                    </label>
                                    <div class="col-sm-8">
                                      <v-select
                                        :label="'label'"
                                        placeholder="จังหวัด/อำเภอ/ตำบล"
                                        :options="selectOptions.address_all"
                                        item-value="id"
                                        id="slt-province-amphur-tumbol"
                                        v-model="booking.address_all"
                                        class="form-control v-select-no-border"
                                        :clearable="true"
                                      ></v-select>
                                    </div>
                                  </div> -->

                                                                    <div
                                                                        class="form-group row mt-10"
                                                                    >
                                                                        <label
                                                                            for="staticEmail"
                                                                            class="col-sm-4 col-form-label"
                                                                            ><span
                                                                                class="text-danger"
                                                                                >*</span
                                                                            >โทรศัพท์ที่สามารถติดต่อได้/Phone
                                                                            :
                                                                        </label>
                                                                        <div
                                                                            class="col-sm-8"
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                class="form-control form-control-plaintext"
                                                                                id="txt-phone2"
                                                                                v-model="
                                                                                    booking.phone2
                                                                                "
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div
                                                                        class="form-group row mt-10"
                                                                    >
                                                                        <label
                                                                            for="staticEmail"
                                                                            class="col-sm-3 col-form-label"
                                                                            >เลขประจำตัวผู้เสียภาษี/Tax
                                                                            ID :
                                                                        </label>
                                                                        <div
                                                                            class="col-sm-9"
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                class="form-control form-control-plaintext"
                                                                                id="txtTaxID"
                                                                                v-model="
                                                                                    booking.tax_id
                                                                                "
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </tab-content>
                                                        <tab-content
                                                            :title="
                                                                $t('Summary')
                                                            "
                                                        >
                                                            <div
                                                                v-if="
                                                                    checkSummary ==
                                                                    true
                                                                "
                                                            >
                                                                <div
                                                                    class="card"
                                                                    style="
                                                                        border: none;
                                                                    "
                                                                >
                                                                    <div
                                                                        class="card-body row"
                                                                    >
                                                                        <div
                                                                            class="col-lg-12"
                                                                        >
                                                                            <span
                                                                                class="fw-bold text-dark"
                                                                                >เครื่องมือ/Scientific
                                                                                Instrument
                                                                                : </span
                                                                            ><span
                                                                                class="text-color-primary fw-bold"
                                                                                >{{
                                                                                    item.title
                                                                                }}</span
                                                                            >

                                                                            <hr
                                                                                class="hr-dotted"
                                                                            />
                                                                        </div>
                                                                        <div
                                                                            class="col-lg-12 mt-10"
                                                                        >
                                                                            <span
                                                                                class="fw-bold text-dark"
                                                                                >วันที่จอง/Booking
                                                                                Date
                                                                                : </span
                                                                            ><span
                                                                                class="text-color-primary fw-bold"
                                                                                >{{
                                                                                    useCookie(
                                                                                        "lang"
                                                                                    ) ==
                                                                                    "en"
                                                                                        ? dayjs(
                                                                                              booking.booking_date
                                                                                          ).format(
                                                                                              "DD/MM/YYYY"
                                                                                          )
                                                                                        : dayjs(
                                                                                              booking.booking_date
                                                                                          )
                                                                                              .locale(
                                                                                                  "th"
                                                                                              )
                                                                                              .format(
                                                                                                  "DD MMM BBBB"
                                                                                              )
                                                                                }}</span
                                                                            >
                                                                            <hr
                                                                                class="hr-dotted"
                                                                            />
                                                                        </div>

                                                                        <div
                                                                            class="col-lg-12 mt-10"
                                                                        >
                                                                            <span
                                                                                class="fw-bold text-dark"
                                                                                >ข้อมูลตัวอย่าง/Example
                                                                                : </span
                                                                            ><span
                                                                                class="text-color-primary fw-bold"
                                                                                >{{
                                                                                    booking.example
                                                                                }}</span
                                                                            >
                                                                            <hr
                                                                                class="hr-dotted"
                                                                            />
                                                                        </div>

                                                                        <div
                                                                            class="col-lg-12 mt-10"
                                                                        >
                                                                            <span
                                                                                class="fw-bold text-dark"
                                                                                >รายการวิเคราะห์/Method
                                                                                List
                                                                                :
                                                                            </span>
                                                                            <br />

                                                                            <div
                                                                                class="mt-20"
                                                                            >
                                                                                <div
                                                                                    class="row"
                                                                                    v-for="(
                                                                                        it,
                                                                                        index
                                                                                    ) in booking.equipment_booking_method"
                                                                                    :key="
                                                                                        index
                                                                                    "
                                                                                >
                                                                                    <div
                                                                                        class="col-lg-6 col-md-6"
                                                                                    >
                                                                                        <span
                                                                                            :style="
                                                                                                index ===
                                                                                                0
                                                                                                    ? 'padding-right: 12px'
                                                                                                    : 'padding-right: 8px'
                                                                                            "
                                                                                            >{{
                                                                                                index +
                                                                                                1
                                                                                            }}.</span
                                                                                        >
                                                                                        <span
                                                                                            >{{
                                                                                                it.name +
                                                                                                " " +
                                                                                                it.name_short
                                                                                            }}</span
                                                                                        >
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-3 col-6"
                                                                                    >
                                                                                        <span
                                                                                            >{{
                                                                                                $t(
                                                                                                    "Quantity"
                                                                                                )
                                                                                            }}
                                                                                            {{
                                                                                                it.quantity
                                                                                            }}
                                                                                            {{
                                                                                                it.unit
                                                                                            }}</span
                                                                                        >
                                                                                    </div>
                                                                                    <div
                                                                                        class="col-lg-3 col-md-3 col-6"
                                                                                    >
                                                                                        <span>
                                                                                            {{
                                                                                                $t(
                                                                                                    "Price"
                                                                                                )
                                                                                            }}
                                                                                            {{
                                                                                                it.total_price.toLocaleString(
                                                                                                    "en-US"
                                                                                                )
                                                                                            }}.00

                                                                                            {{
                                                                                                $t(
                                                                                                    "Bath"
                                                                                                )
                                                                                            }}</span
                                                                                        >
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            <div>
                                                                                <h4
                                                                                    class="fw-bold text-center mt-20 mb-20 pt-20 pb-20 text-dark"
                                                                                    style="
                                                                                        background-color: #eee;
                                                                                    "
                                                                                >
                                                                                    {{
                                                                                        $t(
                                                                                            "Total Price"
                                                                                        )
                                                                                    }}
                                                                                    {{
                                                                                        booking.total_price.toLocaleString(
                                                                                            "en-US"
                                                                                        )
                                                                                    }}.00
                                                                                    {{
                                                                                        $t(
                                                                                            "Bath"
                                                                                        )
                                                                                    }}
                                                                                </h4>
                                                                            </div>

                                                                            <hr
                                                                                class="hr-dotted"
                                                                            />
                                                                        </div>

                                                                        <div
                                                                            class="col-lg-12 mt-10"
                                                                        >
                                                                            <span
                                                                                class="fw-bold text-dark"
                                                                                >ชื่อ-นามสกุล/Name
                                                                                Surname
                                                                                : </span
                                                                            ><span
                                                                                class="text-color-primary fw-bold"
                                                                                >{{
                                                                                    booking.prefix +
                                                                                    booking.firstname +
                                                                                    " " +
                                                                                    booking.surname
                                                                                }}</span
                                                                            >
                                                                            <hr
                                                                                class="hr-dotted"
                                                                            />
                                                                        </div>

                                                                        <div
                                                                            class="col-lg-12 mt-10"
                                                                        >
                                                                            <span
                                                                                class="fw-bold text-dark"
                                                                                >สถานะ/Member
                                                                                Status
                                                                                : </span
                                                                            ><span
                                                                                class="text-color-primary fw-bold"
                                                                            >
                                                                                {{
                                                                                    booking
                                                                                        .member_status
                                                                                        .name_th
                                                                                }}
                                                                            </span>
                                                                            <hr
                                                                                class="hr-dotted"
                                                                            />
                                                                        </div>

                                                                        <div
                                                                            class="col-lg-12 mt-10"
                                                                        >
                                                                            <span
                                                                                class="fw-bold text-dark"
                                                                                >ชื่อหน่วยงาน/Organization
                                                                                : </span
                                                                            ><span
                                                                                class="text-color-primary fw-bold"
                                                                                >{{
                                                                                    booking.organization
                                                                                }}</span
                                                                            >
                                                                            <hr
                                                                                class="hr-dotted"
                                                                            />
                                                                        </div>

                                                                        <div
                                                                            class="col-lg-12 mt-10"
                                                                        >
                                                                            <span
                                                                                class="fw-bold text-dark"
                                                                                >ที่อยู่ที่สามารถติดต่อได้/Contact
                                                                                Address
                                                                                : </span
                                                                            ><span
                                                                                class="text-color-primary fw-bold"
                                                                                >{{
                                                                                    booking.contact_address
                                                                                }}</span
                                                                            >
                                                                            <hr
                                                                                class="hr-dotted"
                                                                            />
                                                                        </div>

                                                                        <div
                                                                            class="col-lg-6 mt-10"
                                                                        >
                                                                            <span
                                                                                class="fw-bold text-dark"
                                                                                >โทรศัพท์/Phone
                                                                                : </span
                                                                            ><span
                                                                                class="text-color-primary fw-bold"
                                                                                >{{
                                                                                    booking.phone
                                                                                }}</span
                                                                            >
                                                                            <hr
                                                                                class="hr-dotted"
                                                                            />
                                                                        </div>

                                                                        <div
                                                                            class="col-lg-6 mt-10"
                                                                        >
                                                                            <span
                                                                                class="fw-bold text-dark"
                                                                                >E-mail
                                                                                : </span
                                                                            ><span
                                                                                class="text-color-primary fw-bold"
                                                                                >{{
                                                                                    booking.email
                                                                                }}</span
                                                                            >
                                                                            <hr
                                                                                class="hr-dotted"
                                                                            />
                                                                        </div>

                                                                        <div
                                                                            class="col-lg-12 mt-10"
                                                                        >
                                                                            <span
                                                                                class="fw-bold text-dark"
                                                                                >เลขประจำตัวผู้เสียภาษี/Tax
                                                                                ID
                                                                                : </span
                                                                            ><span
                                                                                class="text-color-primary fw-bold"
                                                                                >{{
                                                                                    booking.tax_id
                                                                                }}</span
                                                                            >
                                                                            <hr
                                                                                class="hr-dotted"
                                                                            />
                                                                        </div>

                                                                        <div
                                                                            class="col-lg-12 mt-10"
                                                                        >
                                                                            <span
                                                                                class="fw-bold text-dark"
                                                                                >ที่อยู่ในการออกใบกำกับภาษี/
                                                                                Invoice
                                                                                Address
                                                                                : </span
                                                                            ><span
                                                                                class="text-color-primary fw-bold"
                                                                                >{{
                                                                                    booking.invoice_address
                                                                                }}</span
                                                                            >
                                                                            <hr
                                                                                class="hr-dotted"
                                                                            />
                                                                        </div>

                                                                        <!-- <div class="col-lg-12 mt-10">
                                      <span class="fw-bold text-dark"
                                        >ตำบล/จังหวัด/อำเภอ : </span
                                      ><span
                                        class="text-color-primary fw-bold"
                                        >{{ booking.address_all.label }}</span
                                      >
                                      <hr class="hr-dotted" />
                                    </div> -->

                                                                        <div
                                                                            class="col-lg-12 mt-10"
                                                                        >
                                                                            <span
                                                                                class="fw-bold text-dark"
                                                                                >โทรศัพท์ที่สามารถติดต่อได้/Phone
                                                                                : </span
                                                                            ><span
                                                                                class="text-color-primary fw-bold"
                                                                                >{{
                                                                                    booking.phone2
                                                                                }}</span
                                                                            >
                                                                            <hr
                                                                                class="hr-dotted"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div v-else>
                                                                <h2
                                                                    class="text-center mt-50 text-danger"
                                                                >
                                                                    {{
                                                                        text_summary_error
                                                                    }}
                                                                </h2>
                                                            </div>
                                                        </tab-content>

                                                        <div class="text-end">
                                                            <button
                                                                v-if="
                                                                    currentStep !==
                                                                    0
                                                                "
                                                                type="button"
                                                                @click="
                                                                    prevStep
                                                                "
                                                                class="tp-btn-border-brown text-uppercase mr-15"
                                                            >
                                                                Previous
                                                            </button>
                                                            <button
                                                                v-if="
                                                                    currentStep !==
                                                                    stepLength
                                                                "
                                                                type="submit"
                                                                @click="
                                                                    nextStep(
                                                                        currentStep
                                                                    )
                                                                "
                                                                class="tp-btn-border-yellow text-uppercase mr-15"
                                                            >
                                                                Next
                                                            </button>
                                                            <button
                                                                v-if="
                                                                    currentStep ===
                                                                    stepLength
                                                                "
                                                                type="submit"
                                                                @click="
                                                                    onConfirmSubmit()
                                                                "
                                                                class="tp-btn-border-yellow text-uppercase mr-15"
                                                            >
                                                                Finish
                                                            </button>
                                                        </div>
                                                    </form-wizard>
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
</template>

<script setup>
import booking_data from "~~/mixins/bookingData";
import address_all_data from "~~/mixins/addressAllData";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
dayjs.extend(buddhistEra);

import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import Swal from "sweetalert2";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import { FormWizard, TabContent } from "vue3-form-wizard";
import "vue3-form-wizard/dist/style.css";
// import { object, string, number, date } from "yup";

const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

const formStep = ref(null);
const currentStep = ref(0);
const stepLength = ref(2);

// Equipment
const item = ref(null);

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
    invoice_address: "",
    address_all: "",
    district_code: "",
    tax_id: "",
    total_price: 0,
    status_id: 1,
    is_publish: 1,
});
const equipmentMethod = ref([]);
const checkSummary = ref(false);
const text_summary_error = ref("โปรดระบุข้อมูลให้ครบถ้วน");
const mount = ref(false);

const address_all = ref([]);

address_all.value = address_all_data.data().addresses.map((el) => {
    el.label =
        el.district +
        " > " +
        el.amphoe +
        " > " +
        el.province +
        " > " +
        el.zipcode;
    return el;
});

const selectOptions = ref({
    member_statuses: booking_data.data().member_statuses,
    period_times: booking_data.data().period_times,
    address_all: address_all,
});

const format = (date) => {
    if (useCookie("lang").value == "th") {
        const day = dayjs(date).locale("th").format("DD");
        const month = dayjs(date).locale("th").format("MMM");
        const year = date.getFullYear() + 543;
        return `${day} ${month} ${year}`;
    } else {
        const day = dayjs(date).format("DD");
        const month = dayjs(date).format("MMM");
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    }
};

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

booking.value.address_all = address_all.value.find((x) => {
    return x.district_code == booking.value.district_code;
});

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
const onCheckBookingDate = async () => {
    if (booking.value.booking_date == null) {
        return;
    }

    await $fetch(`${runtimeConfig.public.apiBase}/booking/check-booking-date`, {
        method: "get",
        params: {
            not_id: booking.value.id,
            booking_date: dayjs(booking.value.booking_date).format(
                "YYYY-MM-DD"
            ),
        },
    })
        .then((res) => {
            if (res.msg == "success") {
                let pt = selectOptions.value.period_times.map((x) => {
                    let pt_db = res.period_available.find((p) => {
                        return p.id == x.id;
                    });
                    x.available = pt_db.available;
                    return x;
                });

                selectOptions.value.period_times = [...pt];
            } else {
                throw new Error("ERROR");
            }
        })
        .catch((error) => error.data);
};

const onSelectMethod = (it, event) => {
    if (event == true) {
        let quantity_input = document.getElementById(
            "equipment-method-quantity-" + it.id
        );
        quantity_input.removeAttribute("disabled");
        booking.value.equipment_booking_method.push({
            equipment_method_id: it.id,
            name: it.name,
            name_short: it.name_short,
            is_fixrate: it.is_fixrate,
            //   price: 0,
            price_normal: {
                member1_price: it.member1_price,
                member2_price: it.member2_price,
                member3_price: it.member3_price,
            },
            unit: it.unit,
            quantity: 0,
        });
    } else {
        let quantity_input = document.getElementById(
            "equipment-method-quantity-" + it.id
        );
        quantity_input.value = 0;
        quantity_input.setAttribute("disabled", true);

        let filtered = booking.value.equipment_booking_method.filter((x) => {
            return x.equipment_method_id != it.id;
        });

        booking.value.equipment_booking_method = filtered;
    }
};

const onLoadEquipmentBookingMethod = () => {
    if (booking.value.equipment_booking_method.length != 0) {
        booking.value.equipment_method =
            booking.value.equipment_booking_method.map((x) => {
                let equipment_method = equipmentMethod.value.find((em) => {
                    return x.equipment_method_id == em.id;
                });

                x.name = equipment_method.name;
                x.name_short = equipment_method.name_short;
                // x.price = equipment_method.price;
                x.price_normal = equipment_method.price;
                x.unit = equipment_method.unit;

                let no_input = document.getElementById(
                    "equipment-method-no-" + equipment_method.id
                );
                no_input.checked = true;

                let quantity_input = document.getElementById(
                    "equipment-method-quantity-" + equipment_method.id
                );

                quantity_input.removeAttribute("disabled");
                quantity_input.value = x.quantity;

                return x;
            });

        booking.value.total_price = booking.value.price;
    }
};

// onLoadEquipmentBookingMethod();

onMounted(() => {
    booking.value.equipment_method = [];
    if (booking.value.period_time) {
        let period_time = booking.value.period_time;
        booking.value.period_time =
            selectOptions.value.period_times[period_time - 1];
    }
    if (booking.value.booking_date) {
        booking.value.booking_date = dayjs(booking.value.booking_date);
        setTimeout(() => {
            mount.value = true;
            onCheckBookingDate();
        }, 2000);
    }

    if (booking.value.member_status) {
        let member_status = booking.value.member_status;
        booking.value.member_status =
            selectOptions.value.member_statuses[member_status - 1];
    }

    onLoadEquipmentBookingMethod();
});

const onChangeQuantity = (id, event) => {
    booking.value.equipment_booking_method =
        booking.value.equipment_booking_method.map((x) => {
            if (x.equipment_method_id == id) {
                x.quantity = parseInt(event);
            }
            return x;
        });
};

const calPrice = () => {
    booking.value.total_price = 0;
    booking.value.equipment_booking_method =
        booking.value.equipment_booking_method.map((x) => {
            let percent = 1;
            if (booking.value.member_status.id == 1) {
                x.price_normal_real = x.price_normal.member1_price;
                // percent = 0.3;
            } else if (booking.value.member_status.id == 2) {
                x.price_normal_real = x.price_normal.member2_price;
                // percent = 0.5;
            }  else {
                x.price_normal_real = x.price_normal.member3_price;
                // percent = 1;
            }
            x.total_price = x.quantity * (x.price_normal_real * percent);

            booking.value.total_price =
                parseInt(booking.value.total_price) + parseInt(x.total_price);

            return x;
        });
};

const onConfirmSubmit = async () => {
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
        ...booking.value,
        equipment_id: item.value.id,
        // user_id: useCookie("user").value.id,
        member_status: booking.value.member_status.id,
        period_time: booking.value.period_time.id,
        booking_date:
            booking.value.booking_date != ""
                ? dayjs(booking.value.booking_date).format("YYYY-MM-DD")
                : dayjs().format("YYYY-MM-DD"),
        price: booking.value.total_price,
    };

    await $fetch(`${runtimeConfig.public.apiBase}/booking/${route.params.id}`, {
        method: "put",
        body: data,
    })
        .then((res) => {
            if (res.msg == "success") {
                useToast("แก้ไขรายการเสร็จสิ้น", "success");
                router.push({
                    path: "/admin/booking/" + res.id,
                });
            } else {
                console.log("error");
            }
        })
        .catch((error) => error.data);
};

const prevStep = () => {
    if (currentStep.value <= 0) {
        return;
    }

    currentStep.value--;
    // previous step function to move to the previous step
    formStep.value?.prevTab();
};

const nextStep = async (step) => {
    if (currentStep.value === stepLength.value) {
        alert("Submit Success");
        return;
    }

    if (step == 0) {
        if (
            booking.value.booking_date == "" ||
            booking.value.booking_date == null
        ) {
            useToast(
                "โปรดระบุข้อมูลวันที่จอง/Booking Date is Require",
                "error"
            );
            checkSummary.value = false;
            return;
        }

        if (
            booking.value.period_time == null ||
            booking.value.period_time.id == null
        ) {
            useToast("โปรดระบุข้อมูลช่วงเวลา/Period Time is Require", "error");
            checkSummary.value = false;
            return;
        }

        if (booking.value.example == "" || booking.value.example == null) {
            useToast("โปรดระบุข้อมูลตัวอย่าง/Example is Require", "error");
            checkSummary.value = false;
            return;
        }

        if (booking.value.equipment_booking_method.length == 0) {
            useToast("โปรดเลือกรายการวิเคราะห์", "error");
            checkSummary.value = false;
            return;
        }

        let checkQuantity = booking.value.equipment_booking_method.find((x) => {
            return x.quantity == 0;
        });

        if (checkQuantity) {
            useToast("โปรดเลือกจำนวนรายการวิเคราะห์", "error");
            checkSummary.value = false;
            return;
        }
    }

    if (step == 1) {
        if (
            booking.value.member_status == "" ||
            booking.value.member_status == null ||
            booking.value.prefix == "" ||
            booking.value.prefix == null ||
            booking.value.firstname == "" ||
            booking.value.firstname == null ||
            booking.value.surname == "" ||
            booking.value.surname == null ||
            // booking.value.organization == "" ||
            // booking.value.organization == null ||
            // booking.value.contact_address == "" ||
            // booking.value.contact_address == null ||
            booking.value.phone == "" ||
            booking.value.phone == null ||
            booking.value.email == "" ||
            booking.value.email == null ||
            booking.value.phone2 == "" ||
            booking.value.phone2 == null
            // booking.value.invoice_address == "" ||
            // booking.value.invoice_address == null ||
            // booking.value.tax_id == "" ||
            // booking.value.tax_id == null
        ) {
            useToast("โปรดระบุข้อมูลให้ครบถ้วน", "error");
            checkSummary.value = false;
            return;
        }
        calPrice();
        checkSummary.value = true;
    }

    currentStep.value++;
    // next step function to move to the next step
    formStep.value?.nextTab();
};

const sameAddress = ref(false);
const checkSameAddress = () => {
    if (sameAddress.value == true) {
        booking.value.invoice_address = booking.value.contact_address;
    } else {
        booking.value.invoice_address = "";
    }
};

// watch
watch(
    () => booking.value.booking_date,
    (new_value, old_value) => {
        if (mount.value == true) {
            if (new_value != old_value) {
                if (old_value != null) {
                    booking.value.period_time = null;
                }
                onCheckBookingDate();
            }
        }
    },
    { deep: true }
);

watch(
    () => booking.value.address_all,
    (new_value) => {
        booking.value.district_code = new_value.district_code;
    },
    { deep: true }
);

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
