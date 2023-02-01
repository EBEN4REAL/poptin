<template>
  <div>
    <div class="popin-bg-wrapper" ref="popin-bg-wrapper">
      <i
        class="fa fa-times close-btn"
        @click="closePopin"
        aria-hidden="true"
      ></i>
    </div>
    <div class="popin-wrapper" ref="popin-wrapper">
      <div
        class="popin-container"
        ref="popin-container"
        @click="hideContextMenu()"
        @contextmenu.prevent="showContextMenu($event)"
        :style="{ backgroundColor: popinBgStateData.backgroundColor }"
      >
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
              <span ref="headerText" v-if="popinData?.attributes?.headerText">
                {{ popinData?.attributes?.headerText }}
              </span>
              <span v-else ref="headerText">
                All the text and elements in this popup should be editable and
                dragable
              </span>
            </div>
          </div>
          <form class="popin-form-wrapper">
            <div class="poppin-input-wrapper position-relative">
              <input
                class="popin-input"
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
          <div
            class="text-center text-white mt-3 position-relative"
            ref="footerText"
          >
            <span
              class="footerText"
              contenteditable="true"
              v-if="popinData?.attributes?.footerText"
              >{{ popinData?.attributes?.footerText }}</span
            >
            <span v-else class="footerText" contenteditable="true">
              No credit card required. No Surprises
            </span>
          </div>
        </div>
      </div>

      <ki-context
        ref="kiContext"
        minWidth="1em"
        maxWidth="15em"
        backgroundColor="#fbfbfb"
        fontSize="15px"
        textColor="#35495e"
        iconColor="#41b883"
        borderRadius="0.1"
      />

      <input type="color" v-if="showColorInput" @change="handleColorChange" />

      <div class="floating-button" v-if="showSaveBtn" @click="savechanges">
        <button>Save changes</button>
      </div>
    </div>
    <div class="loader-container" v-if="showLoader">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
import {
  getPoptin,
  saveTextChanges,
  getElementsPositions,
  saveElementsPositions,
  createElementsPositions,
  createText,
} from "../Services/Popin";
import { config } from "../Config";

export default {
  name: "PopinConponent",
  components: {},
  data() {
    return {
      showColorInput: false,
      showLoader: true,
      showSaveBtn: false,
      popinBgOptions: [
        {
          icon: "arrow-up",
          text: "Edit background",
          click: () => {
            this.showColorInput = true;
            this.hideContextMenu();
          },
        },
      ],
      popinBgStateData: {
        backgroundColor: "#e85f5b",
      },
      popinData: [],
      popinElementsPositions: {},
    };
  },
  mounted() {
    setTimeout(() => {
      let popinBgWrapper = document.querySelector(".popin-bg-wrapper");
      popinBgWrapper.classList.add("show-element");
      const popinElement = document.querySelector(".popin-wrapper");
      popinElement.classList.add("popin-wrapper-slide-in");
      this.showSaveBtn = true;

      this.getPopinContent();
      this.getPoptinElementsPositions();
    }, 1000);
  },
  methods: {
    getElementsPositions() {
      const popinInput = this.$refs.popinInput;
      const popinBtnElement = this.$refs.poptinBtn;
      const popinStar_1 = this.$refs.star1;
      const popinStar_2 = this.$refs.star2;
      const popinStar_3 = this.$refs.star3;

      const payLoad = {
        data: {
          poptinInput: {
            left: popinInput.style.left,
            top: popinInput.style.top,
          },
          poptinBtn: {
            left: popinBtnElement.style.left,
            top: popinBtnElement.style.top,
          },
          poptinStars: {
            star1: {
              left: popinStar_1.style.left,
              top: popinStar_1.style.top,
            },
            star2: {
              left: popinStar_2.style.left,
              top: popinStar_2.style.top,
            },
            star3: {
              left: popinStar_3.style.left,
              top: popinStar_3.style.top,
            },
          },
        },
      };

      return payLoad;
    },
    createElements() {
      const payload = this.getElementsPositions();
      createElementsPositions(
        `${config.API_BASE_URL}/elements-positions`,
        payload
      ).then(() => {
        this.showLoader = false;
      });
    },
    saveElements() {
      const payload = this.getElementsPositions();
      saveElementsPositions(
        `${config.API_BASE_URL}/elements-positions/${this.popinElementsPositions.id}`,
        payload
      ).then(() => {
        this.showLoader = false;
      });
    },
    getPoptinElementsPositions() {
      getElementsPositions(`${config.API_BASE_URL}/elements-positions`).then(
        (data) => {
          if (data.length) {
            this.popinElementsPositions = data[data.length - 1];
            const poptinInput =
              this.popinElementsPositions?.attributes?.poptinInput;
            const poptinBtn =
              this.popinElementsPositions?.attributes?.poptinBtn;
            const poptinStars =
              this.popinElementsPositions?.attributes?.poptinStars;
            this.popinElementsPositions?.attributes;

            let popinInputElement = this.$refs.popinInput;
            let popinBtnElement = this.$refs.poptinBtn;
            let popinStar_1 = this.$refs.star1;
            let popinStar_2 = this.$refs.star2;
            let popinStar_3 = this.$refs.star3;

            if (poptinInput?.left && poptinInput?.top) {
              popinInputElement.style.left = poptinInput.left;
              popinInputElement.style.top = poptinInput.top;
            }

            if (poptinBtn?.left && poptinBtn?.top) {
              popinBtnElement.style.left = poptinBtn.left;
              popinBtnElement.style.top = poptinBtn.top;
            }

            if (
              poptinStars?.star1 &&
              poptinStars?.star2 &&
              poptinStars?.star3
            ) {
              popinStar_1.style.left = poptinStars.star1.left;
              popinStar_1.style.top = poptinStars.star1.top;

              popinStar_2.style.left = poptinStars.star2.left;
              popinStar_2.style.top = poptinStars.star2.top;

              popinStar_3.style.left = poptinStars.star3.left;
              popinStar_3.style.top = poptinStars.star3.top;
            }
          }

          this.showLoader = false;
        }
      );
    },
    savechanges(e) {
      e.preventDefault();
      this.showLoader = true;
      if (this.popinElementsPositions?.id) {
        this.saveElements();
      } else {
        this.createElements();
      }
      this.saveTexts();
    },
    createTexts() {
      const payLoad = {
        data: {
          headerText: this.$refs.headerText.textContent,
          footerText: this.$refs.footerText.textContent,
          popupBg: this.popinBgStateData.backgroundColor,
        },
      };
      createText(`${config.API_BASE_URL}/poptins`, payLoad).then((data) => {
        this.popinData = data;
      });
    },
    saveTexts() {
      const payLoad = {
        data: {
          headerText: this.$refs.headerText.textContent,
          footerText: this.$refs.footerText.textContent,
          popupBg: this.popinBgStateData.backgroundColor,
        },
      };
      saveTextChanges(
        `${config.API_BASE_URL}/poptins/${this.popinData.id}`,
        payLoad
      ).then((data) => {
        this.popinData = data;
      });
    },
    getPopinContent() {
      getPoptin(`${config.API_BASE_URL}/poptins`).then((data) => {
        if (data.length) {
          this.popinData = data[data.length - 1];
          this.popinBgStateData.backgroundColor =
            data[data.length - 1]?.attributes.popupBg;
        }

        this.showLoader = false;
      });
    },
    closePopin() {
      const popinForm = document.querySelector(".popin-wrapper");
      popinForm.classList.add("popin-wrapper-slide-out");
      let popinBgWrapper = document.querySelector(".popin-bg-wrapper");
      popinBgWrapper.classList.remove("show-element");
      this.showSaveBtn = false;
    },
    showContextMenu(event) {
      this.$refs.kiContext.show(event, this.popinBgOptions);
    },
    hideContextMenu() {
      this.$refs.kiContext.hide();
    },
    handleColorChange(e) {
      this.popinBgStateData.backgroundColor = e.target.value;
      this.showColorInput = false;
    },
    handleTextChange() {
      const popintParaText = document.querySelector(".popin-para");
      popintParaText.contentEditable = true;
    },
  },
};
</script>


