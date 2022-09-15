<template>
  <div
    class="border-2 rounded-sm container text-center w-8/12 mt-10 rounded-xl"
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
      <div class="fle">
        <button class="bg-red-700 px-7 py-1 rounded-sm" v-if="closed">
          Close
        </button>
        <button
          class="bg-blue-400 px-7 py-1 rounded-sm disabled:bg-blue-300 disabled:text-white"
          :disabled="isButtonDisabled"
          @click="checked"
        >
          Tweet
        </button>
      </div>
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
  props: {
    closed: Boolean,
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
  mounted() {
    this.$refs.inputan.focus();
    console.info(this.closed);
    console.info(typeof this.closed);
  },
};
</script>
<style scoped></style>
