<template>
  <div>
    <div class="bg-blue-lightshade rounded-md">
      <div class="flex">
        <BorderImg
          url="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          scale="70"
        />
        <div>
          <div class="flex ml-5">
            <h3>Molloy Hudson</h3>
            <p class="ml-2">@mhudson</p>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
            iusto quia. Ex numquam dignissimos iure quae quia magni sit hic
            repellendus unde fuga, nihil voluptas nisi saepe recusandae
            molestias consequuntur.
          </p>
          <div class="flex">
            <div class="flex">
              <p @click="like++">Like</p>
              <p>{{ like }}</p>
            </div>
            <div class="flex">
              <p class="ml-3" @click="retweet++">Retwitter</p>
              <p>{{ retweet }}</p>
            </div>
          </div>
        </div>
      </div>
      <button
        class="bg-purple-lightshade border-2 w-full rounded-md mx-6"
        @click="conditionReply"
        v-if="!reply"
      >
        Reply
      </button>
      <InputTwitter
        :closed="true"
        v-if="reply"
        @conditionReply="conditionReply"
      />
    </div>
  </div>
</template>

<script>
import BorderImg from "../BorderImg.vue";
import InputTwitter from "../InputTwitter/InputTwitter.vue";
export default {
  components: { BorderImg, InputTwitter },
  data() {
    return {
      like: 0,
      retweet: 0,
      reply: false,
    };
  },
  methods: {
    conditionReply() {
      console.info("Working Closed");
      this.reply = !this.reply;
    },
    conditionClosed() {},
  },
};
</script>
