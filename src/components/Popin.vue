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
        <PopinContainer
          :popinData="popinData"
          :envMode="envMode"
          @handleTextChange="handleTextChange"
          @getRefs="setRefs"
        />
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
import PopinContainer from "../components/PopinContainer.vue";

export default {
  name: "PopinConponent",
  components: {
    PopinContainer,
  },
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
      popinData: {},
      popinElementsPositions: {},
      $refsElements: {},
      envMode: process.env.NODE_ENV
    };
  },

  mounted() {
    setTimeout(() => {
      let popinBgWrapper = document.querySelector(".popin-bg-wrapper");
      popinBgWrapper.classList.add("show-element");
      const popinElement = document.querySelector(".popin-wrapper");
      popinElement.classList.add("popin-wrapper-slide-in");
      this.showSaveBtn = true;

    //   this.getPopinContent();
    //   this.getPoptinElementsPositions();
    }, 1000);
  },

  methods: {
    getElementsPositions() {
      const popinInput = this.$refsElements.popinInput;
      const popinBtnElement = this.$refsElements.popinBtn;
      const popinStar_1 = this.$refsElements.star1;
      const popinStar_2 = this.$refsElements.star2;
      const popinStar_3 = this.$refsElements.star3;

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

            let popinInputElement = this.$refsElements.popinInput;
            let popinBtnElement = this.$refsElements.popinBtn;
            let popinStar_1 = this.$refsElements.star1;
            let popinStar_2 = this.$refsElements.star2;
            let popinStar_3 = this.$refsElements.star3;

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
          headerText: this.$refsElements.headerText.textContent,
          footerText: this.$refsElements.footerText.textContent,
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
          headerText: this.$refsElements.headerText.textContent,
          footerText: this.$refsElements.footerText.textContent,
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
    setRefs($refsElements) {
      this.$refsElements = $refsElements;
    },
  },
};
</script>


