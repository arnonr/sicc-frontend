<template>
  <section class="login__area pt-180 pb-110">
    <div class="container">
      <div class="login__inner p-relative z-index-1">
        <login-shapes />
        <div class="row justify-content-center">
          <div class="col-xl-6 col-lg-8 col-md-10">
            <div class="login__wrapper" v-if="textError == 'Success'">
              <div class="login__top mb-30 text-center">
                <h3 class="login__title">SITT</h3>
                <p>Confirm Email Success</p>
              </div>
              <div class="login__form">
                <div class="login__btn">
                  <button
                    type="submit"
                    class="tp-btn w-100"
                    @click="
                      () => {
                        $router.push({ path: '/login' });
                      }
                    "
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
            <div class="login__wrapper" v-if="textError != '' && textError != 'Success'">
              <div class="login__top mb-30 text-center">
                <h3 class="login__title">SITT</h3>
                <p>{{ textError }}</p>
              </div>
              <div class="login__form">
                <div class="login__btn">
                  <!-- <button
                    type="submit"
                    class="tp-btn w-100"
                    @click="
                      () => {
                        router.push({ path: '/login' });
                      }
                    "
                  >
                    Sign In
                  </button> -->
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
// import LoginForm from "../forms/LoginForm.vue";

import LoginShapes from "~~/components/login-register/LoginShapes.vue";
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const router = useRouter();

const item = ref({});
const textError = ref("");
onMounted(async () => {
  if (
    !route.query.id ||
    !route.query.email ||
    !route.query.secret_confirm_email
  ) {
    textError.value = "Data is Wrong";
    return;
  }

  item.value = {
    id: route.query.id,
    email: route.query.email,
    secret_confirm_email: route.query.secret_confirm_email,
  };


  await $fetch(`${runtimeConfig.public.apiBase}/user/confirm-email`, {
    method: "post",
    body: item.value,
  })
    .then((res) => {
      if (res.msg == "success") {
        textError.value = "Success";
      } else {
        textError.value = "Data is Wrong";
      }
    })
    .catch((error) => {
      console.log(error.data);
      textError.value = "Data is Wrong";
    });
});

definePageMeta({
  layout: false,
});
</script>
