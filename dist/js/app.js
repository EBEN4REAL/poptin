(function () {
  "use strict";
  var t = {
      2867: function (t, e, n) {
        var s = n(7195),
          o = function () {
            var t = this,
              e = t._self._c;
            return e("div", { attrs: { id: "app" } }, [e("Popin")], 1);
          },
          i = [],
          a = function () {
            var t = this,
              e = t._self._c;
            return e("div", [
              e(
                "div",
                { ref: "popin-bg-wrapper", staticClass: "popin-bg-wrapper" },
                [
                  e("i", {
                    staticClass: "fa fa-times close-btn",
                    attrs: { "aria-hidden": "true" },
                    on: { click: t.closePopin },
                  }),
                ]
              ),
              e(
                "div",
                { ref: "popin-wrapper", staticClass: "popin-wrapper" },
                [
                  e(
                    "div",
                    {
                      ref: "popin-container",
                      staticClass: "popin-container",
                      style: {
                        backgroundColor: t.popinBgStateData.backgroundColor,
                      },
                      on: {
                        click: function (e) {
                          return t.hideContextMenu();
                        },
                        contextmenu: function (e) {
                          return e.preventDefault(), t.showContextMenu(e);
                        },
                      },
                    },
                    [
                      e("PopinContainer", {
                        attrs: { popinData: t.popinData, envMode: t.envMode },
                        on: {
                          handleTextChange: t.handleTextChange,
                          getRefs: t.setRefs,
                        },
                      }),
                    ],
                    1
                  ),
                  e("ki-context", {
                    ref: "kiContext",
                    attrs: {
                      minWidth: "1em",
                      maxWidth: "15em",
                      backgroundColor: "#fbfbfb",
                      fontSize: "15px",
                      textColor: "#35495e",
                      iconColor: "#41b883",
                      borderRadius: "0.1",
                    },
                  }),
                  t.showColorInput
                    ? e("input", {
                        attrs: { type: "color" },
                        on: { change: t.handleColorChange },
                      })
                    : t._e(),
                  t.showSaveBtn
                    ? e(
                        "div",
                        {
                          staticClass: "floating-button",
                          on: { click: t.savechanges },
                        },
                        [e("button", [t._v("Save changes")])]
                      )
                    : t._e(),
                ],
                1
              ),
              t.showLoader
                ? e("div", { staticClass: "loader-container" }, [
                    e("div", { staticClass: "loader" }),
                  ])
                : t._e(),
            ]);
          },
          r = [];
        async function p(t) {
          const e = await f(t);
          return e.data;
        }
        async function l(t, e) {
          const n = await m(t, e);
          return n.data;
        }
        async function c(t, e) {
          const n = await m(t, e);
          return n.data;
        }
        async function h(t) {
          const e = await f(t);
          return e.data;
        }
        async function u(t) {
          const e = await v(t);
          return e.data;
        }
        async function d(t, e) {
          const n = await v(t, e);
          return n.data;
        }
        function f(t) {
          return new Promise((e) => {
            fetch(t).then((t) => {
              e(t.json());
            });
          });
        }
        function m(t, e) {
          return new Promise((n) => {
            fetch(t, {
              method: "PUT",
              body: JSON.stringify(e),
              headers: { "Content-type": "application/json; charset=UTF-8" },
            })
              .then((t) => {
                n(t.json());
              })
              .catch((t) => console.error("Error:", t));
          });
        }
        function v(t, e) {
          return new Promise((n) => {
            fetch(t, {
              method: "POST",
              body: JSON.stringify(e),
              headers: { "Content-type": "application/json; charset=UTF-8" },
            })
              .then((t) => {
                n(t.json());
              })
              .catch((t) => console.error("Error:", t));
          });
        }
        const g = {
          API_BASE_URL: "https://poptin-strapi-backend.herokuapp.com/api",
        };
        var C = function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "popin-inner-container" }, [
              e("div", { staticClass: "popin-stars-wrapper" }, [
                e("div", { staticClass: "popin-stars position-relative" }, [
                  e("div", [
                    e("i", {
                      directives: [{ name: "drag", rawName: "v-drag" }],
                      ref: "star1",
                      staticClass:
                        "fa fa-star popin-star popin-star--small star1",
                      attrs: { "aria-hidden": "true" },
                    }),
                  ]),
                  e("div", { staticClass: "popin-center-star star-2" }, [
                    e("i", {
                      directives: [{ name: "drag", rawName: "v-drag" }],
                      ref: "star2",
                      staticClass:
                        "fa fa-star popin-star popin-star--big star2",
                      attrs: { "aria-hidden": "true" },
                    }),
                  ]),
                  e("div", { staticClass: "star-3" }, [
                    e("i", {
                      directives: [{ name: "drag", rawName: "v-drag" }],
                      ref: "star3",
                      staticClass:
                        "fa fa-star popin-star popin-star--small star3",
                      attrs: { "aria-hidden": "true" },
                    }),
                  ]),
                ]),
              ]),
              e("div", { staticClass: "popin-para-container" }, [
                e(
                  "div",
                  {
                    staticClass: "popin-para text-white text-center",
                    attrs: { contenteditable: "true" },
                    on: { dblclick: t.handleTextChange },
                  },
                  [
                    t.popinData?.attributes?.headerText
                      ? e(
                          "span",
                          { ref: "headerText", staticClass: "headerText" },
                          [
                            t._v(
                              " " +
                                t._s(t.popinData?.attributes?.headerText) +
                                " "
                            ),
                          ]
                        )
                      : e("span", { ref: "headerText" }, [
                          e("span", { staticClass: "headerText" }, [
                            t._v(
                              " All the text and elements in this popup should be editable and dragable "
                            ),
                          ]),
                        ]),
                  ]
                ),
              ]),
              e("form", { staticClass: "popin-form-wrapper" }, [
                e(
                  "div",
                  { staticClass: "poppin-input-wrapper position-relative" },
                  [
                    e("input", {
                      directives: [{ name: "drag", rawName: "v-drag" }],
                      ref: "popinInput",
                      staticClass: "popin-input draggableElement",
                      attrs: {
                        type: "text",
                        placeholder: "E-mail",
                        id: "popin-input",
                      },
                    }),
                  ]
                ),
                e(
                  "div",
                  { staticClass: "poppin-btn-wrapper position-relative" },
                  [
                    e(
                      "button",
                      {
                        directives: [{ name: "drag", rawName: "v-drag" }],
                        ref: "poptinBtn",
                        staticClass: "poptin-btn",
                        attrs: { id: "popinBtn" },
                        on: { click: (t) => t.preventDefault() },
                      },
                      [t._v(" SIGNUP NOW ")]
                    ),
                  ]
                ),
              ]),
              e(
                "div",
                {
                  ref: "footerText",
                  staticClass: "text-center text-white mt-3 position-relative",
                },
                [
                  t.popinData?.attributes?.footerText
                    ? e(
                        "span",
                        {
                          staticClass: "footerText",
                          attrs: { contenteditable: "true" },
                        },
                        [t._v(t._s(t.popinData?.attributes?.footerText))]
                      )
                    : e(
                        "span",
                        {
                          staticClass: "footerText",
                          attrs: { contenteditable: "true" },
                        },
                        [t._v(" No credit card required. No Surprises ")]
                      ),
                ]
              ),
            ]);
          },
          x = [],
          b = {
            name: "PopinContainer",
            props: { popinData: Object, envMode: String },
            mounted() {
              const t = {
                popinInput: this.$refs.popinInput,
                popinBtn: this.$refs.poptinBtn,
                star1: this.$refs.star1,
                star2: this.$refs.star2,
                star3: this.$refs.star3,
                headerText: this.$refs.headerText,
                footerText: this.$refs.footerText,
              };
              this.$emit("getRefs", t);
            },
            methods: {
              handleTextChange() {
                this.$emit("handleTextChange");
              },
            },
          },
          w = b,
          y = n(1001),
          E = (0, y.Z)(w, C, x, !1, null, null, null),
          P = E.exports,
          T = {
            name: "PopinConponent",
            components: { PopinContainer: P },
            data() {
              return {
                showColorInput: !1,
                showLoader: !0,
                showSaveBtn: !1,
                popinBgOptions: [
                  {
                    icon: "arrow-up",
                    text: "Edit background",
                    click: () => {
                      (this.showColorInput = !0), this.hideContextMenu();
                    },
                  },
                ],
                popinBgStateData: { backgroundColor: "#e85f5b" },
                popinData: {},
                popinElementsPositions: {},
                $refsElements: {},
                envMode: "production",
              };
            },
            mounted() {
              setTimeout(() => {
                let t = document.querySelector(".popin-bg-wrapper");
                t.classList.add("show-element");
                const e = document.querySelector(".popin-wrapper");
                e.classList.add("popin-wrapper-slide-in"),
                  (this.showSaveBtn = !0),
                  this.getPopinContent(),
                  this.getPoptinElementsPositions();
              }, 1e3);
            },
            methods: {
              getElementsPositions() {
                const t = this.$refsElements.popinInput,
                  e = this.$refsElements.popinBtn,
                  n = this.$refsElements.star1,
                  s = this.$refsElements.star2,
                  o = this.$refsElements.star3,
                  i = {
                    data: {
                      poptinInput: { left: t.style.left, top: t.style.top },
                      poptinBtn: { left: e.style.left, top: e.style.top },
                      poptinStars: {
                        star1: { left: n.style.left, top: n.style.top },
                        star2: { left: s.style.left, top: s.style.top },
                        star3: { left: o.style.left, top: o.style.top },
                      },
                    },
                  };
                return i;
              },
              createElements() {
                const t = this.getElementsPositions();
                u(`${g.API_BASE_URL}/elements-positions`, t).then(() => {
                  this.showLoader = !1;
                });
              },
              saveElements() {
                const t = this.getElementsPositions();
                c(
                  `${g.API_BASE_URL}/elements-positions/${this.popinElementsPositions.id}`,
                  t
                ).then(() => {
                  this.showLoader = !1;
                });
              },
              getPoptinElementsPositions() {
                h(`${g.API_BASE_URL}/elements-positions`).then((t) => {
                  if (t.length) {
                    this.popinElementsPositions = t[t.length - 1];
                    const e =
                        this.popinElementsPositions?.attributes?.poptinInput,
                      n = this.popinElementsPositions?.attributes?.poptinBtn,
                      s = this.popinElementsPositions?.attributes?.poptinStars;
                    this.popinElementsPositions?.attributes;
                    let o = this.$refsElements.popinInput,
                      i = this.$refsElements.popinBtn,
                      a = this.$refsElements.star1,
                      r = this.$refsElements.star2,
                      p = this.$refsElements.star3;
                    e?.left &&
                      e?.top &&
                      ((o.style.left = e.left), (o.style.top = e.top)),
                      n?.left &&
                        n?.top &&
                        ((i.style.left = n.left), (i.style.top = n.top)),
                      s?.star1 &&
                        s?.star2 &&
                        s?.star3 &&
                        ((a.style.left = s.star1.left),
                        (a.style.top = s.star1.top),
                        (r.style.left = s.star2.left),
                        (r.style.top = s.star2.top),
                        (p.style.left = s.star3.left),
                        (p.style.top = s.star3.top));
                  }
                  this.showLoader = !1;
                });
              },
              savechanges(t) {
                t.preventDefault(),
                  (this.showLoader = !0),
                  this.popinElementsPositions?.id
                    ? this.saveElements()
                    : this.createElements(),
                  this.saveTexts();
              },
              createTexts() {
                const t = {
                  data: {
                    headerText: this.$refsElements.headerText.textContent,
                    footerText: this.$refsElements.footerText.textContent,
                    popupBg: this.popinBgStateData.backgroundColor,
                  },
                };
                d(`${g.API_BASE_URL}/poptins`, t).then((t) => {
                  this.popinData = t;
                });
              },
              saveTexts() {
                const t = {
                  data: {
                    headerText: this.$refsElements.headerText.textContent,
                    footerText: this.$refsElements.footerText.textContent,
                    popupBg: this.popinBgStateData.backgroundColor,
                  },
                };
                l(`${g.API_BASE_URL}/poptins/${this.popinData.id}`, t).then(
                  (t) => {
                    this.popinData = t;
                  }
                );
              },
              getPopinContent() {
                p(`${g.API_BASE_URL}/poptins`).then((t) => {
                  t.length &&
                    ((this.popinData = t[t.length - 1]),
                    (this.popinBgStateData.backgroundColor =
                      t[t.length - 1]?.attributes.popupBg)),
                    (this.showLoader = !1);
                });
              },
              closePopin() {
                const t = document.querySelector(".popin-wrapper");
                t.classList.add("popin-wrapper-slide-out");
                let e = document.querySelector(".popin-bg-wrapper");
                e.classList.remove("show-element"), (this.showSaveBtn = !1);
              },
              showContextMenu(t) {
                this.$refs.kiContext.show(t, this.popinBgOptions);
              },
              hideContextMenu() {
                this.$refs.kiContext.hide();
              },
              handleColorChange(t) {
                (this.popinBgStateData.backgroundColor = t.target.value),
                  (this.showColorInput = !1);
              },
              handleTextChange() {
                const t = document.querySelector(".popin-para");
                t.contentEditable = !0;
              },
              setRefs(t) {
                this.$refsElements = t;
              },
            },
          },
          $ = T,
          _ = (0, y.Z)($, a, r, !1, null, null, null),
          S = _.exports,
          B = { name: "App", components: { Popin: S } },
          k = B,
          D = (0, y.Z)(k, o, i, !1, null, null, null),
          I = D.exports,
          L = n(689),
          O = n(7979),
          A = n(4984),
          j = n(9946),
          N = n(134),
          R = n.n(N);
        O.vI.add(j.eFW, j.acZ, j.FPD, j.r5q),
          s.ZP.component("font-awesome-icon", A.GN),
          s.ZP.use(R()),
          (s.ZP.config.productionTip = !1),
          s.ZP.use(L.Z),
          new s.ZP({ render: (t) => t(I) }).$mount("#app");
      },
    },
    e = {};
  function n(s) {
    var o = e[s];
    if (void 0 !== o) return o.exports;
    var i = (e[s] = { exports: {} });
    return t[s].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.m = t),
    (function () {
      var t = [];
      n.O = function (e, s, o, i) {
        if (!s) {
          var a = 1 / 0;
          for (c = 0; c < t.length; c++) {
            (s = t[c][0]), (o = t[c][1]), (i = t[c][2]);
            for (var r = !0, p = 0; p < s.length; p++)
              (!1 & i || a >= i) &&
              Object.keys(n.O).every(function (t) {
                return n.O[t](s[p]);
              })
                ? s.splice(p--, 1)
                : ((r = !1), i < a && (a = i));
            if (r) {
              t.splice(c--, 1);
              var l = o();
              void 0 !== l && (e = l);
            }
          }
          return e;
        }
        i = i || 0;
        for (var c = t.length; c > 0 && t[c - 1][2] > i; c--) t[c] = t[c - 1];
        t[c] = [s, o, i];
      };
    })(),
    (function () {
      n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return n.d(e, { a: e }), e;
      };
    })(),
    (function () {
      n.d = function (t, e) {
        for (var s in e)
          n.o(e, s) &&
            !n.o(t, s) &&
            Object.defineProperty(t, s, { enumerable: !0, get: e[s] });
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      var t = { 143: 0 };
      n.O.j = function (e) {
        return 0 === t[e];
      };
      var e = function (e, s) {
          var o,
            i,
            a = s[0],
            r = s[1],
            p = s[2],
            l = 0;
          if (
            a.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (o in r) n.o(r, o) && (n.m[o] = r[o]);
            if (p) var c = p(n);
          }
          for (e && e(s); l < a.length; l++)
            (i = a[l]), n.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
          return n.O(c);
        },
        s = (self["webpackChunkpopin_form"] =
          self["webpackChunkpopin_form"] || []);
      s.forEach(e.bind(null, 0)), (s.push = e.bind(null, s.push.bind(s)));
    })();
  var s = n.O(void 0, [998], function () {
    return n(2867);
  });
  s = n.O(s);
})();
//# sourceMappingURL=app.js.map











