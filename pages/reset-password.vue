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
                <p>Reset Password</p>
              </div>
              <div class="login__form" v-if="textError == ''">
                <!-- form start -->
                <form @submit.prevent="handleSubmit">
                  <div class="login__input-wrapper">
                    <div class="login__input-item">
                      <div class="login__input">
                        <label for="email">Email : </label>
                        {{ item.email }}
                      </div>
                    </div>
                  </div>
                  <div class="login__input-wrapper">
                    <div class="login__input-item">
                      <div class="login__input">
                        <!-- <label for="email">Password</label> -->
                        <input
                          v-model="item.password"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="login__input-wrapper">
                    <div class="login__input-item">
                      <div class="login__input">
                        <!-- <label for="email">Confirm Password</label> -->
                        <input
                          v-model="item.confirm_password"
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="login__btn">
                    <button type="submit" class="tp-btn w-100">
                      Reset Password
                    </button>
                    <!-- <button type="submit" class="tp-btn w-100">
                      Login
                    </button> -->
                  </div>
                </form>
              </div>
              <div class="login__top mb-30 text-center" v-if="textError != ''">
                <h3 class="login__title">{{ textError }}</h3>
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
import LoginShapes from "~~/components/login-register/LoginShapes.vue";
const runtimeConfig = useRuntimeConfig();
const router = useRouter();
const route = useRoute();

const item = ref({
  id: route.query.id,
  email: route.query.email,
  secret_confirm_email: route.query.secret_confirm_email,
});
const textError = ref("");

// Check Secrey Key ถ้าผ่านให้นำข้อมุลไปใส่ใน Item แล้วทำการ

const fetchUser = async () => {
  if (
    !route.query.id ||
    !route.query.email ||
    !route.query.secret_confirm_email
  ) {
    textError.value = "Data is Wrong";
    return;
  }

  await $fetch(`${runtimeConfig.public.apiBase}/user`, {
    method: "get",
    params: item.value,
  })
    .then((res) => {
      if (res.msg == "success") {
        if (res.data.length == 0) {
          textError.value = "Data is Wrong";
          return;
        }
        textError.value = "";
      } else {
        textError.value = "Data is Wrong";
      }
    })
    .catch((error) => {
      console.log(error);
      textError.value = "Data is Wrong";
    });
};

fetchUser();

const handleSubmit = async () => {
  if (item.value.password != item.value.confirm_password) {
    useToast("ยืนยันรหัสผ่านไม่ถูกต้อง", "error");
    return;
  }

  await $fetch(`${runtimeConfig.public.apiBase}/user/reset-password`, {
    method: "post",
    body: item.value,
  })
    .then((res) => {
      if (res.msg == "success") {
        textError.value = "Success";
        useToast(
          "ระบบได้ทำการรีเซ็ตรหัสผ่านแล้ว โปรด Login ด้วยอีเมลของท่าน",
          "success"
        );
        router.push({
          path: "/login",
        });
      } else {
        textError.value = "Data is Wrong";
      }
    })
    .catch((error) => {
      console.log(error.data);
      textError.value = "Data is Wrong";
    });
};

// definePageMeta({
//   layout: false,
// });
</script>
