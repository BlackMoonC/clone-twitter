<template>
  <nav class="bg-blue-lightshade flex justify-between items-center px-5 py-2">
    <h1><a href="#">Simple Twitter with Vue</a></h1>
    <div class="user-profile flex">
      <div class="mr-5">
        <p>{{ fullname }}</p>
        <p class="text-[#EEF1FF]">@cakra_ksera</p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        class="w-10 h-10 rounded-full border-2"
      />
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarMain",
  inject: ["fullname", "username", "avatarUrl"],
};
</script>
