<template>
  <main>
    <NavbarMain />
    <h1 class="text-sky-500">{{ user.fullname }}</h1>
  </main>
</template>

<script>
import NavbarMain from "./components/Navbar/NavbarMain.vue";
import { computed } from "vue";

export default {
  name: "App",
  components: {
    NavbarMain,
  },
  data() {
    return {
      user: {
        fullname: "Rakhel Cakra Kusumadinata Sera",
        username: "@cakra_ksera",
        avatarUrl:
          "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    };
  },
  provide() {
    return {
      fullname: computed(() => this.user.fullname),
      username: computed(() => this.user.username),
      avatarUrl: computed(() => this.user.avatarUrl),
    };
  },
};
</script>

<style>
@import "./style.css";
</style>
