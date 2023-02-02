<template>
  <div class="popin-inner-container">
    <div class="popin-stars-wrapper">
      <div class="popin-stars position-relative">
        <div>
          <i
            class="fa fa-star popin-star popin-star--small star1"
            aria-hidden="true"
            v-drag
            ref="star1"
          ></i>
        </div>
        <div class="popin-center-star star-2">
          <i
            class="fa fa-star popin-star popin-star--big star2"
            v-drag
            aria-hidden="true"
            ref="star2"
          ></i>
        </div>
        <div class="star-3">
          <i
            class="fa fa-star popin-star popin-star--small star3"
            v-drag
            aria-hidden="true"
            ref="star3"
          ></i>
        </div>
      </div>
    </div>
    <div class="popin-para-container">
      <div
        class="popin-para text-white text-center"
        v-on:dblclick="handleTextChange"
        contenteditable="true"
      >
        <span
          ref="headerText"
          class="headerText"
          v-if="popinData?.attributes?.headerText"
        >
          {{ popinData?.attributes?.headerText }}
        </span>
        <span v-else ref="headerText">
          <span class="headerText">
            All the text and elements in this popup should be editable and
            dragable
          </span>
        </span>
      </div>
    </div>
    <form class="popin-form-wrapper">
      <div class="poppin-input-wrapper position-relative">
        <input
          class="popin-input draggableElement"
          type="text"
          v-drag
          placeholder="E-mail"
          id="popin-input"
          ref="popinInput"
        />
      </div>
      <div class="poppin-btn-wrapper position-relative">
         <button
          class="poptin-btn"
          v-drag
          @click="(e) => e.preventDefault()"
          id="popinBtn"
          ref="poptinBtn"
          
        >
          SIGNUP NOW
        </button>
      </div>
    </form>
    <div class="text-center text-white mt-3 position-relative" ref="footerText">
      <span
        class="footerText"
        contenteditable="true"
        v-if="popinData?.attributes?.footerText"
        :style="{top: '53px'}"
        >{{ popinData?.attributes?.footerText }}</span
      >
      <span v-else class="footerText" contenteditable="true">
        No credit card required. No Surprises
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopinContainer",
  props: {
    popinData: Object,
    envMode: String,
  },
  mounted() {
    const $refs = {
      popinInput: this.$refs.popinInput,
      popinBtn: this.$refs.poptinBtn,
      star1: this.$refs.star1,
      star2: this.$refs.star2,
      star3: this.$refs.star3,
      headerText: this.$refs.headerText,
      footerText: this.$refs.footerText,
    };
    this.$emit("getRefs", $refs);
  },
  methods: {
    handleTextChange() {
      this.$emit("handleTextChange");
    },
  },
};
</script>





