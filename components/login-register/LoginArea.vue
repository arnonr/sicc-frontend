<template>
  <section class="login__area pt-180 pb-110">
    <div class="container">
      <div class="login__inner p-relative z-index-1">
        <login-shapes />
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-8 col-md-10">
            <div class="login__wrapper">
              <div class="login__top mb-30 text-center">
                <img
                  src="~/assets/img/iconwebtechnopark/logo-sitt.png"
                  alt="shape"
                  style="width:60%"
                />
                <img
                  class="offcanvas__shape-1"
                  src="~/assets/img/iconwebtechnopark/bg-login.jpeg"
                  alt="shape"
                />
              </div>
              <div class="login__form">
                <!-- form start -->
                <form @submit.prevent="handleSubmit">
                  <div class="login__input-wrapper">
                    <div class="login__input-item">
                      <div class="login__input">
                        <label for="email">Email</label>
                        <input
                          v-model="login.email"
                          type="text"
                          placeholder="Email or Username"
                        />
                      </div>
                    </div>
                    <div class="login__input-item">
                      <div class="login__input">
                        <label for="email">Password</label>
                        <input
                          v-model="login.password"
                          type="password"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="login__option mb-25 d-sm-flex justify-content-between"
                  >
                    <div class="login__remember">
                      <input
                        v-model="login.isChecked"
                        type="checkbox"
                        id="tp-remember"
                      />
                      <label for="tp-remember">Remember me</label>
                    </div>
                    <div class="login__forgot">
                      <nuxt-link href="/forgot">forgot password?</nuxt-link>
                    </div>
                  </div>
                  <div class="login__btn">
                    <button type="submit" class="tp-btn w-100">Sign In</button>
                  </div>
                </form>

                <!-- form end -->
                <!-- <div class="login__social text-center">
                  <h3 class="login__social-header">Or Sign in with</h3>
                  <login-with-social />
                </div> -->
                <div class="login__register-now">
                  <p>
                    Don’t have an account?
                    <nuxt-link href="/register">Register Now</nuxt-link>
                  </p>

                  <p>
                    Resend Confirm
                    <nuxt-link href="/resend-confirm-email">Email</nuxt-link>
                  </p>
                </div>
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
// import LoginForm from "../forms/LoginForm.vue";

import LoginShapes from "./LoginShapes.vue";
// import LoginWithSocial from "./LoginWithSocial.vue";
import { storeToRefs } from "pinia"; // import storeToRefs helper hook from pinia
import { useAuthStore } from "~/store/auth"; // import the auth store we just created
const { authenticateUser, logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs
const router = useRouter();

const login = ref({
  email: "",
  password: "",
  isChecked: false,
});

const handleSubmit = async () => {
  login.value.username = login.value.email;
  await authenticateUser(login.value); // call authenticateUser and pass the user object
  // redirect to homepage if user is authenticated
  if (authenticated.value == true) {
    localStorage.setItem("login", true);
    router.push("/");
  } else {
    useToast("Data is Wrong", "error");
  }
};
</script>
