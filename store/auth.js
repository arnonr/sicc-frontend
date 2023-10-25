import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async authenticateUser({ email, password }) {
      // useFetch from nuxt 3
      const runtimeConfig = useRuntimeConfig();

      const { data, pending } = await useFetch(
        `${runtimeConfig.public.apiBase}/user/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: {
            email,
            password,
          },
        }
      );
      this.loading = pending;

      if (data.value) {
        const token = useCookie("token"); // useCookie new hook in nuxt 3
        token.value = data?.value?.token; // set token to cookie
        const user = useCookie("user");

        user.value = {
          id: data?.value?.id,
          email: data?.value?.email,
          firstname: data?.value?.profile.firstname,
          surname: data?.value?.profile.surname,
          group_id: data?.value?.profile.group_id,
        };

        this.authenticated = true; // set authenticated  state value to true
      }
    },
    logUserOut() {
      const token = useCookie("token"); // useCookie new hook in nuxt 3
      const user = useCookie("user"); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
      user.value = null; // clear the token cookie
      console.log("Logout Success");
    },
  },
});
