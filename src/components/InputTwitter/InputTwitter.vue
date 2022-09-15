<template>
  <div
    class="border-2 rounded-sm container text-center mx-auto w-8/12 mt-10 rounded-xl"
  >
    <textarea
      class="mb-10 mt-9 rounded-sm"
      placeholder="Write Something"
      v-model="message"
      rows="4"
      cols="50"
      ref="inputan"
    ></textarea>
    <div class="flex justify-between px-10 pb-6">
      <p class="text-white">{{ message.length }}/10</p>
      <button
        class="bg-blue-400 px-7 py-1 rounded-sm disabled:bg-blue-300 disabled:text-white"
        :disabled="isButtonDisabled"
        @click="checked"
      >
        Tweet
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      inputLimit: 0,
    };
  },
  methods: {
    checked() {
      console.info("Jalan");
    },
  },
  computed: {
    isButtonDisabled() {
      if (this.message.length >= 10) {
        console.info("Jalan Up");
        return true;
      } else {
        console.info("Jalan Down");
        return false;
      }
    },
  },
};
</script>
<style scoped></style>
