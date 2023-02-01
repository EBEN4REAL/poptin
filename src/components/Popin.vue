<template>
 <div>
    <div class="popin-bg-wrapper" ref="popin-bg-wrapper">
        <i class="fa fa-times close-btn" @click="closePopin" aria-hidden="true"></i>
    </div>
    <div class="popin-wrapper" ref="popin-wrapper" >
        <div class="popin-container" ref="popin-container" 
            @click="hideContextMenu()"
            @contextmenu.prevent="showContextMenu($event)" 
            :style="{backgroundColor: popinBgStateData.backgroundColor}">
            
            <div class="popin-inner-container">
                <div class="popin-stars-wrapper">
                    <div class="popin-stars">
                        <div>
                            <i class="fa fa-star popin-star popin-star--small" aria-hidden="true" v-drag></i>
                        </div>
                        <div class="popin-center-star">
                            <i class="fa fa-star popin-star popin-star--big" v-drag aria-hidden="true"></i>
                        </div>
                        <div>
                            <i class="fa fa-star popin-star popin-star--small" v-drag aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="popin-para-container">
                    <div class="popin-para text-white text-center" v-on:dblclick="handleTextChange"
                        contenteditable="true">
                        <span>
                            All the text and elements in this popup should be editable and
                            dragable
                            <!-- {{popinData.headerText}} -->
                        </span>
                    </div>
                </div>
                <form class="popin-form-wrapper">
                    <div class="poppin-input-wrapper">
                        <input class="popin-input" type="text" v-drag placeholder="E-mail" />
                    </div>
                    <div class="poppin-btn-wrapper">
                        <button class="poptin-btn" v-drag @click="(e) => e.preventDefault()">
                            SIGNUP NOW
                        </button>
                    </div>
                </form>
                <div class="text-center text-white mt-3" contenteditable="true">
                    <!-- {{popinData.footerText}} -->
                    No credit card required. No Surprises
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
        <div class="floating-button" v-if="showSaveBtn">
            <button>Save changes</button>
        </div>
    </div>
    <div class="loader-container" v-if="showLoader">
        <div class="loader"></div>
    </div>
</div>
</template>

<script>
import {getPoptin} from "../Services/Popin"
import {config} from "../Config"

export default {
  name: "PopinConponent",
  components: {},
  data() {
    return {
      showColorInput: false,
      showLoader: false,
      showSaveBtn: false,
      popinBgOptions: [
        {
          icon: "arrow-up",
          text: "Edit background",
          click: () => {
            this.showColorInput = true;
            this.hideContextMenu()
          },
        },
      ],
      popinBgStateData: {
        backgroundColor: '#e85f5b'
      },
      popinData: []
    };
  },
  created() {
    this.getPopinContent()
  },
  mounted() {
    setTimeout(() => {
      let popinBgWrapper = document.querySelector(".popin-bg-wrapper");
      popinBgWrapper.classList.add("show-element");
      const popinElement = document.querySelector(".popin-wrapper");
      popinElement.classList.add("popin-wrapper-slide-in");
      this.showSaveBtn = true
    }, 1000);
  },
  methods: {
    getPopinContent() {
        getPoptin(`${config.API_BASE_URL}/poptins`).then((data) => {
            this.popinData = data[0].attributes
            this.showLoader = false
        })
    },
    closePopin() {
      const popinForm = document.querySelector(".popin-wrapper");
      popinForm.classList.add("popin-wrapper-slide-out");
      let popinBgWrapper = document.querySelector(".popin-bg-wrapper");
      popinBgWrapper.classList.remove("show-element");
      this.showSaveBtn = false
    },
    showContextMenu(event) {
      this.$refs.kiContext.show(event, this.popinBgOptions);
    },
    hideContextMenu() {
      this.$refs.kiContext.hide();
    },
    handleColorChange(e) {
      const popinForm = document.querySelector(".popin-container");
      popinForm.style.background = e.target.value;
      this.showColorInput = false;
    },
    handleTextChange() {
      const popintParaText = document.querySelector(".popin-para");
      popintParaText.contentEditable = true;
    },
  },
};
</script>


