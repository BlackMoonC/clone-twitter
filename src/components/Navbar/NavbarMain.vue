<template>
  <nav class="bg-blue-lightshade flex justify-between items-center px-5 py-2">
    <h1><a href="#">Simple Twitter with Vue</a></h1>
    <div class="user-profile flex">
      <div class="mr-5">
        <p>{{ fullname }}</p>
        <p class="text-[#EEF1FF]">{{ username }}</p>
      </div>
      <BorderImg :url="avatarDataUrl" width="40" height="40" />
    </div>
  </nav>
</template>

<script>
import BorderImg from "../BorderImg.vue";
export default {
  name: "NavbarMain",
  components: {
    BorderImg,
  },
  data() {
    return {
      avatarDataUrl: this.avatarUrl,
    };
  },
  inject: ["fullname", "username", "avatarUrl"],
};
</script>
