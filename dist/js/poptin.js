

function showPopup() {
  // Create the pop-up element
  let popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
  <div class="popin-bg-wrapper" ref="popin-bg-wrapper">
    <div class="close-button">
        <span class="close-butto">&times;</span>
    </div>
    </div>
    <div class="popin-wrapper" ref="popin-wrapper">
    <div
    class="popin-container"
    ref="popin-container"
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
            aria-hidden="true"
            ref="star3"
            ></i>
        </div>
        </div>
    </div>
    <div class="popin-para-container">
        <div
        class="popin-para text-white text-center"
        contenteditable="false"
        >
        <span  ref="headerText">
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
            placeholder="E-mail"
            id="popin-input"
            ref="popinInput"
        />
        </div>
        <div class="poppin-btn-wrapper position-relative">
        <button
            class="poptin-btn"
            id="popinBtn"
            ref="poptinBtn"
        >
            SIGNUP NOW
        </button>
        </div>
    </form>
    <div class="text-center text-white mt-3 position-relative" ref="footerText">
        <span class="footerText" contenteditable="false" style="top: 53px">
        No credit card required. No Surprises
        </span>
    </div>
    </div>
    </div>
    </div>
    `;

  // Append the pop-up element to the body
  let popinBgWrapper = document.querySelector(".popin-bg-wrapper");
  popinBgWrapper.style.display = "block";
  popinBgWrapper.classList.add("show-element");
  const popinElement = document.querySelector(".popin-wrapper");
  popinElement.classList.add("popin-wrapper-slide-in");
  

  setTimeout(() => {
    document.body.appendChild(popup);
  }, 1000)
}

/**
 * Minified by jsDelivr using Terser v5.15.1.
 * Original file: /npm/@clayui/modal@3.86.0/lib/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
("use strict");
function _typeof(e) {
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    _typeof(e)
  );
}
Object.defineProperty(exports, "__esModule", { value: !0 }),
  Object.defineProperty(exports, "ClayModalProvider", {
    enumerable: !0,
    get: function () {
      return _Provider.default;
    },
  }),
  Object.defineProperty(exports, "Context", {
    enumerable: !0,
    get: function () {
      return _Provider.Context;
    },
  }),
  (exports.default = void 0),
  Object.defineProperty(exports, "useModal", {
    enumerable: !0,
    get: function () {
      return _useModal.useModal;
    },
  });
var _Modal = _interopRequireDefault(require("./Modal")),
  _Provider = _interopRequireWildcard(require("./Provider")),
  _useModal = require("./useModal");
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var t = new WeakMap(),
    r = new WeakMap();
  return (_getRequireWildcardCache = function (e) {
    return e ? r : t;
  })(e);
}
function _interopRequireWildcard(e, t) {
  if (!t && e && e.__esModule) return e;
  if (null === e || ("object" !== _typeof(e) && "function" != typeof e))
    return { default: e };
  var r = _getRequireWildcardCache(t);
  if (r && r.has(e)) return r.get(e);
  var o = {},
    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
      var i = n ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(o, u, i) : (o[u] = e[u]);
    }
  return (o.default = e), r && r.set(e, o), o;
}
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
var _default = _Modal.default;
exports.default = _default;
//# sourceMappingURL=/sm/020275e52c007c4c5f6f5b5814ca483ffacad541abc5a3cfdb2dc04a971ad0a9.map
