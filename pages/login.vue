<template>
  <div>
    <login-area/>
  </div>
</template>

<script>
import LoginArea from '~~/components/login-register/LoginArea.vue';

export default {
  components: {
    LoginArea,
  },
  setup() {
    useHead({
      title: "Login SITT",
    });
  },
};
</script>

<script setup>

definePageMeta({
  layout: false,
});

</script>
