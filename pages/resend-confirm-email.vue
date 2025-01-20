<template>
  <section class="login__area pt-180 pb-110">
    <div class="container">
      <div class="login__inner p-relative z-index-1">
        <login-shapes />
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-8 col-md-10">
            <div class="login__wrapper">
              <div class="login__top mb-30 text-center">
                <h3 class="login__title">SITT</h3>
                <p>Enter your email account.</p>
              </div>
              <div class="login__form">
                <!-- form start -->
                <form @submit.prevent="handleSubmit">
                  <div class="login__input-wrapper">
                    <div class="login__input-item">
                      <div class="login__input">
                        <label for="email">Email</label>
                        <input
                          v-model="item.email"
                          type="text"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="login__btn">
                    <button type="submit" class="tp-btn w-100">
                      Resend Email
                    </button>
                    <!-- <button type="submit" class="tp-btn w-100">
                      Login
                    </button> -->
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- <script>
  import LoginForm from "../forms/LoginForm.vue";
  import LoginShapes from "./LoginShapes.vue";
  import LoginWithSocial from "./LoginWithSocial.vue";
  
  export default {
    components: { LoginForm, LoginWithSocial, LoginShapes },
    data() {
      return {
        formValue: {
          email: "",
          password: "",
          isChecked: false,
        },
      };
    },
    methods: {
      handleSubmit() {
        console.log(this.formValue);
        this.formValue = {};
      },
    },
  };
  </script> -->

<script setup>
const runtimeConfig = useRuntimeConfig();
const router = useRouter();
import LoginShapes from "~~/components/login-register/LoginShapes.vue";
const item = ref({
  email: "",
});
const textError = ref("");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const handleSubmit = async () => {
  if (item.value.email == "" || item.value.email == null) {
    useToast("โปรดระบุข้อมูลให้ครบถ้วน", "error");
    return;
  }
  if (!validateEmail(item.value.email)) {
    useToast("รูปแบบอีเมลไม่ถูกต้อง", "error");
    return;
  }

  await $fetch(`${runtimeConfig.public.apiBase}/user/resend-confirm-email`, {
    method: "post",
    body: item.value,
  })
    .then((res) => {
      if (res.msg == "success") {
        textError.value = "Success";
        useToast(
          "ระบบได้ทำการส่งข้อมูลยืนยันไปยังอีเมล โปรดตรวจสอบอีเมลของท่าน",
          "success"
        );
        router.push({
          path: "/login",
        });
      } else {
        textError.value = "Email is Wrong";
      }
    })
    .catch((error) => {
      console.log(error.data);
      textError.value = "Email is Wrong";
    });
};

definePageMeta({
  layout: false,
});
</script>
