(function () {
  "use strict";
  var t = {
      9953: function (t, e, n) {
        var r = n(7195),
          i = function () {
            var t = this,
              e = t._self._c;
            return e("div", { attrs: { id: "app" } }, [e("Popin")], 1);
          },
          o = [],
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
                {
                  ref: "popin-wrapper",
                  staticClass: "popin-wrapper",
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
                  e(
                    "div",
                    { ref: "popin-container", staticClass: "popin-container" },
                    [
                      e("div", { staticClass: "popin-inner-container" }, [
                        e("div", { staticClass: "popin-stars-wrapper" }, [
                          e("div", { staticClass: "popin-stars" }, [
                            e("div", [
                              e("i", {
                                directives: [
                                  { name: "drag", rawName: "v-drag" },
                                ],
                                staticClass:
                                  "fa fa-star popin-star popin-star--small",
                                attrs: { "aria-hidden": "true" },
                              }),
                            ]),
                            e("div", { staticClass: "popin-center-star" }, [
                              e("i", {
                                directives: [
                                  { name: "drag", rawName: "v-drag" },
                                ],
                                staticClass:
                                  "fa fa-star popin-star popin-star--big",
                                attrs: { "aria-hidden": "true" },
                              }),
                            ]),
                            e("div", [
                              e("i", {
                                directives: [
                                  { name: "drag", rawName: "v-drag" },
                                ],
                                staticClass:
                                  "fa fa-star popin-star popin-star--small",
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
                              e("span", [
                                t._v(
                                  " All the text and elements in this popup should be editable and dragable "
                                ),
                              ]),
                            ]
                          ),
                        ]),
                        e("form", { staticClass: "popin-form-wrapper" }, [
                          e("div", { staticClass: "poppin-input-wrapper" }, [
                            e("input", {
                              directives: [{ name: "drag", rawName: "v-drag" }],
                              staticClass: "popin-input",
                              attrs: { type: "text", placeholder: "E-mail" },
                            }),
                          ]),
                          e("div", { staticClass: "poppin-btn-wrapper" }, [
                            e(
                              "button",
                              {
                                directives: [
                                  { name: "drag", rawName: "v-drag" },
                                ],
                                staticClass: "poptin-btn",
                                on: { click: (t) => t.preventDefault() },
                              },
                              [t._v(" SIGNUP NOW ")]
                            ),
                          ]),
                        ]),
                        e(
                          "div",
                          {
                            staticClass: "text-center text-white mt-3",
                            attrs: { contenteditable: "true" },
                          },
                          [t._v(" No credit card required. No Surprises ")]
                        ),
                      ]),
                    ]
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
                ],
                1
              ),
            ]);
          },
          s = [],
          p = {
            name: "PopinConponent",
            components: {},
            data() {
              return {
                showColorInput: !1,
                popinBgOptions: [
                  {
                    icon: "arrow-up",
                    text: "Edit background",
                    click: () => {
                      this.showColorInput = !0;
                    },
                  },
                ],
              };
            },
            mounted() {
              setTimeout(function () {
                let t = document.querySelector(".popin-bg-wrapper");
                t.classList.add("show-element");
                const e = document.querySelector(".popin-wrapper");
                e.classList.add("popin-wrapper-slide-in");
              }, 1e3);
            },
            methods: {
              closePopin() {
                const t = document.querySelector(".popin-wrapper");
                t.classList.add("popin-wrapper-slide-out");
                let e = document.querySelector(".popin-bg-wrapper");
                e.classList.remove("show-element");
              },
              showContextMenu(t) {
                this.$refs.kiContext.show(t, this.popinBgOptions);
              },
              hideContextMenu() {
                this.$refs.kiContext.hide();
              },
              handleColorChange(t) {
                const e = document.querySelector(".popin-container");
                (e.style.background = t.target.value),
                  (this.showColorInput = !1);
              },
              handleTextChange() {
                const t = document.querySelector(".popin-para");
                t.contentEditable = !0;
              },
            },
          },
          c = p,
          l = n(1001),
          u = (0, l.Z)(c, a, s, !1, null, null, null),
          d = u.exports,
          f = { name: "App", components: { Popin: d } },
          h = f,
          v = (0, l.Z)(h, i, o, !1, null, null, null),
          m = v.exports,
          C = n(3118),
          w = n(7979),
          b = n(4984),
          g = n(9946),
          x = n(134),
          k = n.n(x);
        w.vI.add(g.eFW, g.acZ, g.FPD, g.r5q),
          r.ZP.component("font-awesome-icon", b.GN),
          r.ZP.use(k()),
          (r.ZP.config.productionTip = !1),
          r.ZP.use(C.Z),
          new r.ZP({ render: (t) => t(m) }).$mount("#app");
      },
    },
    e = {};
  function n(r) {
    var i = e[r];
    if (void 0 !== i) return i.exports;
    var o = (e[r] = { exports: {} });
    return t[r].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = t),
    (function () {
      var t = [];
      n.O = function (e, r, i, o) {
        if (!r) {
          var a = 1 / 0;
          for (l = 0; l < t.length; l++) {
            (r = t[l][0]), (i = t[l][1]), (o = t[l][2]);
            for (var s = !0, p = 0; p < r.length; p++)
              (!1 & o || a >= o) &&
              Object.keys(n.O).every(function (t) {
                return n.O[t](r[p]);
              })
                ? r.splice(p--, 1)
                : ((s = !1), o < a && (a = o));
            if (s) {
              t.splice(l--, 1);
              var c = i();
              void 0 !== c && (e = c);
            }
          }
          return e;
        }
        o = o || 0;
        for (var l = t.length; l > 0 && t[l - 1][2] > o; l--) t[l] = t[l - 1];
        t[l] = [r, i, o];
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
        for (var r in e)
          n.o(e, r) &&
            !n.o(t, r) &&
            Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
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
      var e = function (e, r) {
          var i,
            o,
            a = r[0],
            s = r[1],
            p = r[2],
            c = 0;
          if (
            a.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (i in s) n.o(s, i) && (n.m[i] = s[i]);
            if (p) var l = p(n);
          }
          for (e && e(r); c < a.length; c++)
            (o = a[c]), n.o(t, o) && t[o] && t[o][0](), (t[o] = 0);
          return n.O(l);
        },
        r = (self["webpackChunkpopin_form"] =
          self["webpackChunkpopin_form"] || []);
      r.forEach(e.bind(null, 0)), (r.push = e.bind(null, r.push.bind(r)));
    })();
  var r = n.O(void 0, [998], function () {
    return n(9953);
  });
  r = n.O(r);
})();
//# sourceMappingURL=app.c08a08e3.js.map
