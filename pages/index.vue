<template>
  <HomeBanner />
  <HomeProject />
  <HomeNews />
</template>

<script setup>
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

useHead({
  title:
    "ศูนย์เครื่องมือวิทยาศาสตร์และถ่ายทอดเทคโนโลยี คณะวิทยาศาสตร์ประยุกต์",
  meta: [
    {
      name: "Scientific Instrument and Technological Transfer Center : SITT, Faculty of Applied Science",
      content: "Faculty of Applied Science",
    },
  ],
});

if (process.client) {
  if (localStorage.getItem("login")) {
    useToast("เข้าสู่ระบบเสร็จสิ้น", "success");
    localStorage.removeItem("login");
  }

  //   if (localStorage.getItem("logout")) {
  //     useToast("ออกจากระบบเสร็จสิ้น", "success");
  //     localStorage.removeItem("logout");
  //   }
}

definePageMeta({
  middleware: "auth",
});
</script>
