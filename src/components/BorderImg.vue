<template>
  <div>
    <img
      :src="url"
      :style="{ width: width + 'px', height: height + 'px' }"
      class="rounded-full border-2"
    />
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    width: String,
    height: String,
  },
};
</script>
