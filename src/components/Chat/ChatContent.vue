<template>
  <div
    class="ma-0 pb-3 pt-5 pl-2 pr-2"
    v-chat-scroll
    ref="chatContent"
    style="
      height: 80vh;
      overflow-y: scroll;
      width: 100%;
      background-repeat: round;
      background-image: url(http://doot-light.react.themesbrand.com/static/media/pattern-05.ffd181cd.png);
    "
  >
    <div class="mb-5">
      <div class="d-flex justify-start">
        <div class="white pa-2 elevation-3" style="width: 50%">
          <label
            >Sunt sint in id sint. In eu non aliquip non nisi ipsum ullamco esse
            est sit duis aliqua irure. Voluptate occaecat Lorem eiusmod mollit
            qui qui dolore magna do aliquip sint et sint deserunt. Ex voluptate
            adipisicing qui nulla sunt dolor eiusmod do elit elit ex nulla
            laboris. Elit minim proident mollit fugiat reprehenderit commodo
            magna anim nulla nisi.</label
          >
        </div>

        <v-btn fab x-small class="my-auto" text>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </div>

      <div class="d-flex mt-2">
        <img
          style="width: 32px; height: 32px; border-radius: 16px"
          :src="this.$store.state.currentUser.photoURL"
        />
        <label style="font-size: 12px" class="font-weight-medium my-auto ml-3"
          >Naveen Dhananjaya</label
        ><label style="color: gray; font-size: 12px" class="my-auto ml-2"
          >06:37pm</label
        >
      </div>
    </div>

    <div class="mb-5">
      <div class="d-flex justify-end">
        <v-btn fab x-small class="my-auto" text>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <div class="white pa-2 elevation-3" style="width: 50%">
          <label
            >Sunt sint in id sint. In eu non aliquip non nisi ipsum ullamco esse
            est sit duis aliqua irure. Voluptate occaecat Lorem eiusmod mollit
            qui qui dolore magna do aliquip sint et sint deserunt. Ex voluptate
            adipisicing qui nulla sunt dolor eiusmod do elit elit ex nulla
            laboris. Elit minim proident mollit fugiat reprehenderit commodo
            magna anim nulla nisi.</label
          >
        </div>
      </div>

      <div class="d-flex mt-2 justify-end">
        <label style="font-size: 12px" class="font-weight-medium my-auto ml-3"
          >You</label
        ><label style="color: gray; font-size: 12px" class="my-auto ml-2 mr-2"
          >06:37pm</label
        >
        <img
          style="width: 32px; height: 32px; border-radius: 16px"
          src="https://avatars.githubusercontent.com/u/48654030?s=64&v=4"
        />
      </div>
    </div>

    <div class="mb-5">
      <div class="d-flex justify-end">
        <v-btn fab x-small class="my-auto" text>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <div class="white pa-2 elevation-3" style="width: 50%">
          <label
            >Sunt sint in id sint. In eu non aliquip non nisi ipsum ullamco esse
            est sit duis aliqua irure. Voluptate occaecat Lorem eiusmod mollit
            qui qui dolore magna do aliquip sint et sint deserunt. Ex voluptate
            adipisicing qui nulla sunt dolor eiusmod do elit elit ex nulla
            laboris. Elit minim proident mollit fugiat reprehenderit commodo
            magna anim nulla nisi.</label
          >
        </div>
      </div>

      <div class="d-flex mt-2 justify-end">
        <label style="font-size: 12px" class="font-weight-medium my-auto ml-3"
          >You</label
        ><label style="color: gray; font-size: 12px" class="my-auto ml-2 mr-2"
          >06:37pm</label
        >
        <img
          style="width: 32px; height: 32px; border-radius: 16px"
          src="https://avatars.githubusercontent.com/u/48654030?s=64&v=4"
        />
      </div>
    </div>

    <div class="mb-5">
      <div class="d-flex justify-end">
        <v-btn fab x-small class="my-auto" text>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <div class="white pa-2 elevation-3" style="width: 50%">
          <label
            >Sunt sint in id sint. In eu non aliquip non nisi ipsum ullamco esse
            est sit duis aliqua irure. Voluptate occaecat Lorem eiusmod mollit
            qui qui dolore magna do aliquip sint et sint deserunt. Ex voluptate
            adipisicing qui nulla sunt dolor eiusmod do elit elit ex nulla
            laboris. Elit minim proident mollit fugiat reprehenderit commodo
            magna anim nulla nisi.</label
          >
        </div>
      </div>

      <div class="d-flex mt-2 justify-end">
        <label style="font-size: 12px" class="font-weight-medium my-auto ml-3"
          >You</label
        ><label style="color: gray; font-size: 12px" class="my-auto ml-2 mr-2"
          >06:37pm</label
        >
        <img
          style="width: 32px; height: 32px; border-radius: 16px"
          src="https://avatars.githubusercontent.com/u/48654030?s=64&v=4"
        />
      </div>
    </div>

    <div class="mb-5">
      <div class="d-flex justify-end">
        <v-btn fab x-small class="my-auto" text>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <div class="white pa-2 elevation-3" style="width: 50%">
          <label
            >Sunt sint in id sint. In eu non aliquip non nisi ipsum ullamco esse
            est sit duis aliqua irure. Voluptate occaecat Lorem eiusmod mollit
            qui qui dolore magna do aliquip sint et sint deserunt. Ex voluptate
            adipisicing qui nulla sunt dolor eiusmod do elit elit ex nulla
            laboris. Elit minim proident mollit fugiat reprehenderit commodo
            magna anim nulla nisi.</label
          >
        </div>
      </div>

      <div class="d-flex mt-2 justify-end">
        <label style="font-size: 12px" class="font-weight-medium my-auto ml-3"
          >You</label
        ><label style="color: gray; font-size: 12px" class="my-auto ml-2 mr-2"
          >06:37pm</label
        >
        <img
          style="width: 32px; height: 32px; border-radius: 16px"
          src="https://avatars.githubusercontent.com/u/48654030?s=64&v=4"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contact"],

  mounted() {
    // this.scrollToBottom();
  },

  methods: {
    scrollToBottom() {
      this.$refs.chatContent.scrollIntoView({ behavior: "smooth" });
    },

    forceUpdate() {
      this.$forceUpdate();
    },
  },
};
</script>