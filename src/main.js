import Vue from "vue";
import App from "./App.vue";
import drag from "v-drag";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faArrowRight,
  faArrowLeft,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import kiContext from "@kiyoaki_w/vue-context";

library.add(faArrowRight, faArrowLeft, faArrowUp, faArrowDown);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(kiContext);

Vue.config.productionTip = false;

Vue.use(drag);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
