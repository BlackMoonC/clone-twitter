<template>
  <img
    :src="url"
    :style="{ width: scale + 'px', height: scale + 'px' }"
    class="rounded-full border-2"
  />
</template>

<script>
export default {
  props: {
    url: String,
    scale: String,
  },
};
</script>
