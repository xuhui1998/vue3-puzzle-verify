import { mergeModels as C, useModel as U, openBlock as t, createElementBlock as o, createElementVNode as e, renderSlot as W, defineComponent as N, ref as a, onMounted as Q, Fragment as J, createVNode as q, Transition as K, withCtx as L, withDirectives as V, normalizeClass as z, unref as r, normalizeStyle as M, vShow as S, createCommentVNode as n, createBlock as Y } from "vue";
const O = "data:image/svg+xml,%3csvg%20t='1735183612108'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='1450'%20width='200'%20height='200'%3e%3cpath%20d='M505.6%20121.6l396.8%20339.2c32%2025.6%2032%2070.4%200%2096l-396.8%20339.2c-25.6%2025.6-70.4%2019.2-89.6-6.4l0%200c-25.6-25.6-19.2-70.4%206.4-89.6L768%20512%20422.4%20217.6C396.8%20198.4%20390.4%20153.6%20416%20128l0%200C441.6%20102.4%20480%2096%20505.6%20121.6z'%20fill='%23fff'%20p-id='1451'%3e%3c/path%3e%3cpath%20d='M204.8%20121.6l396.8%20339.2c32%2025.6%2032%2070.4%200%2096l-396.8%20339.2c-25.6%2025.6-70.4%2019.2-89.6-6.4l0%200c-25.6-25.6-19.2-70.4%206.4-89.6L460.8%20512%20115.2%20217.6C89.6%20198.4%2089.6%20153.6%20108.8%20128l0%200C134.4%20102.4%20172.8%2096%20204.8%20121.6z'%20fill='%23fff'%20p-id='1452'%3e%3c/path%3e%3c/svg%3e", E = "data:image/svg+xml,%3csvg%20t='1735183685296'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='2434'%20width='200'%20height='200'%3e%3cpath%20d='M913.017%20237.02c-25.311-25.312-66.349-25.312-91.66%200l-412.475%20412.474-206.237-206.237c-25.312-25.312-66.35-25.312-91.661%200s-25.312%2066.35%200%2091.66l252.067%20252.067c0.729%200.73%201.439%201.402%202.134%202.029%2025.434%2023.257%2064.913%2022.585%2089.527-2.029l458.303-458.303c25.313-25.312%2025.313-66.35%200.001-91.661z'%20fill='%23fff'%20p-id='2435'%3e%3c/path%3e%3c/svg%3e", R = "data:image/svg+xml,%3csvg%20t='1737879873464'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='9159'%20width='200'%20height='200'%3e%3cpath%20d='M831.3856%20107.264a60.3392%2060.3392%200%200%201%2085.3376%2085.3504L597.3376%20512%20916.736%20831.3856a60.352%2060.352%200%200%201%202.432%2082.7648l-2.432%202.5728a60.3392%2060.3392%200%200%201-85.3376%200L512%20597.3376%20192.6144%20916.736a60.352%2060.352%200%200%201-82.7648%202.432l-2.5728-2.432a60.3392%2060.3392%200%200%201%200-85.3376L426.6624%20512%20107.264%20192.6144a60.352%2060.352%200%200%201-2.432-82.7648l2.432-2.5728a60.3392%2060.3392%200%200%201%2085.3376%200L512%20426.6624%20831.3856%20107.264z'%20fill='%23ffffff'%20p-id='9160'%3e%3c/path%3e%3c/svg%3e", P = "data:image/svg+xml,%3csvg%20t='1738747760234'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='17010'%20width='200'%20height='200'%3e%3cpath%20d='M1024%20512c0%20282.72-229.28%20512-512%20512S0%20794.72%200%20512%20229.28%200%20512%200s512%20229.28%20512%20512'%20fill='%235A89FF'%20p-id='17011'%3e%3c/path%3e%3cpath%20d='M690.72%20812l-24.96-41.76c90.56-54.08%20146.72-152.96%20146.72-258.24%200-165.6-134.72-300.48-300.48-300.48v-48.64c192.48%200%20349.12%20156.64%20349.12%20349.12%200%20122.24-65.28%20237.28-170.4%20300z'%20fill='%23FFFFFF'%20p-id='17012'%3e%3c/path%3e%3cpath%20d='M558.72%20295.52l-66.56-94.4c-3.68-5.28-5.28-11.84-4.16-18.24%201.12-6.4%204.64-12%209.92-15.84l94.4-66.56%2028.16%2039.84-74.4%2052.48%2052.48%2074.4-39.84%2028.32zM512%20861.12c-192.48%200-349.12-156.64-349.12-349.12%200-126.24%2068.48-243.04%20178.56-304.8l23.84%2042.56c-94.88%2053.12-153.76%20153.6-153.76%20262.24%200%20165.6%20134.72%20300.48%20300.48%20300.48v48.64z'%20fill='%23FFFFFF'%20p-id='17013'%20data-spm-anchor-id='a313x.search_index.0.i16.472a3a81Xnqcy5'%20class=''%3e%3c/path%3e%3cpath%20d='M431.68%20923.2l-28.16-39.84%2074.4-52.48-52.48-74.4%2039.84-28%2066.56%2094.4c3.68%205.28%205.28%2011.84%204.16%2018.24-1.12%206.4-4.64%2012-9.92%2015.84l-94.4%2066.24z'%20fill='%23FFFFFF'%20p-id='17014'%3e%3c/path%3e%3c/svg%3e", $ = (d, h) => {
  const m = d.__vccOpts || d;
  for (const [i, c] of h)
    m[i] = c;
  return m;
}, Z = { class: "modal-content" }, e2 = { class: "modal-body" }, l2 = {
  __name: "index",
  props: {
    modelValue: { type: Boolean, default: !1 },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ C(["update:visible"], ["update:modelValue"]),
  setup(d, { emit: h }) {
    const m = h;
    U(d, "modelValue");
    const i = () => {
      m("update:visible", !1);
    }, c = (l) => {
      l.target === l.currentTarget && i();
    };
    return (l, y) => (t(), o("div", {
      class: "modal-mask",
      onClick: c
    }, [
      e("div", Z, [
        e("div", { class: "modal-header" }, [
          e("span", {
            class: "modal-close",
            onClick: i
          })
        ]),
        e("div", e2, [
          W(l.$slots, "default", {}, void 0, !0)
        ])
      ])
    ]));
  }
}, s2 = /* @__PURE__ */ $(l2, [["__scopeId", "data-v-963fa108"]]), t2 = ["src"], c2 = { class: "img-bg" }, a2 = ["src"], o2 = ["src"], n2 = ["src"], i2 = { class: "img-bg" }, u2 = ["src"], r2 = ["src"], d2 = ["src"], v2 = ["src"], m2 = ["src"], g2 = {
  key: 0,
  class: "slider-tips"
}, p2 = { class: "puzzle-wrapper" }, f2 = ["src"], h2 = { class: "img-bg" }, k2 = ["src"], w2 = ["src"], b2 = ["src"], _2 = ["src"], x2 = ["src"], y2 = {
  key: 0,
  class: "slider-tips"
}, I2 = /* @__PURE__ */ N({
  name: "PuzzleVerify",
  __name: "index",
  props: /* @__PURE__ */ C({
    type: { default: "insert" },
    visible: { type: Boolean }
  }, {
    modelValue: { default: !1, type: Boolean },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ C(["onSuccess", "onFail", "onDrag", "onDragEnd"], ["update:modelValue"]),
  setup(d, { expose: h, emit: m }) {
    const i = m, c = U(d, "modelValue"), l = a("default"), y = a(), b = a(), _ = a(), k = a(!1), u = a({
      backImg: "../../assets/images/bg/1.jpg",
      blockImg: "../../assets/images/bg-block/1.png",
      x: 120
    }), g = a({
      left: "0px"
    }), w = a(!1), p = a(!1), A = a(0);
    let v = a(0);
    const H = [
      {
        backImg: "http://lc-uwPGwsAs.cn-n1.lcfile.com/59Cu4kNYM1mj7dhB9IAD0DrcPdgzXeAv/bg-1.jpg",
        blockImg: "http://lc-uwPGwsAs.cn-n1.lcfile.com/P6ffi1OdnJ0kUTgzj4Mek4d897XmvxKI/block-1.png",
        x: 120
      },
      {
        backImg: "http://lc-uwPGwsAs.cn-n1.lcfile.com/1q5iWUnzfUOxRLE68LM27Ogm4uz8ctOg/bg-2.jpg",
        blockImg: "http://lc-uwPGwsAs.cn-n1.lcfile.com/hgLgLgxr0wzlHxAUFCF1QO6u4F8I8waj/block-2.png",
        x: 86
      },
      {
        backImg: "http://lc-uwPGwsAs.cn-n1.lcfile.com/D5ILHWHJWu6I2PQ4ltCujxjkl5S4o0Io/bg-3.jpg",
        blockImg: "http://lc-uwPGwsAs.cn-n1.lcfile.com/X554G805mj9H58D3cv1FISOCq9kpwh5K/block-3.png",
        x: 150
      },
      {
        backImg: "http://lc-uwPGwsAs.cn-n1.lcfile.com/sx4Wr4PDISAxe3DWwyxXK9Gp4PkPXoUm/bg-4.jpg",
        blockImg: "http://lc-uwPGwsAs.cn-n1.lcfile.com/g1EzR0l04lwvPpa43pQjsLeTdjSdHODF/block-4.png",
        x: 142
      },
      {
        backImg: "http://lc-uwPGwsAs.cn-n1.lcfile.com/zukCx9wdRl4Ld39rN8cXJqofetp4aFLH/bg-5.jpg",
        blockImg: "http://lc-uwPGwsAs.cn-n1.lcfile.com/hKi4kiBdGe6SMMPtQlOcrf8RYKkVxcdy/block-5.png",
        x: 186
      },
      {
        backImg: "http://lc-uwPGwsAs.cn-n1.lcfile.com/89rCBs76bghwC0QIsxfXxfjUxQTwT1u5/bg-6.jpg",
        blockImg: "http://lc-uwPGwsAs.cn-n1.lcfile.com/MRFz26fh9AL1CmjlwXBMxEd4pRN6B8XR/block-6.png",
        x: 155
      },
      {
        backImg: "http://lc-uwPGwsAs.cn-n1.lcfile.com/lmxXBSBy76cUgDCWUWuslWvHwOICtm3x/bg-7.jpg",
        blockImg: "http://lc-uwPGwsAs.cn-n1.lcfile.com/X91NtOkw0FugeDSyi3l9nRuRr2d2O9XE/block-7.png",
        x: 153
      },
      {
        backImg: "http://lc-uwPGwsAs.cn-n1.lcfile.com/4CUht3QeNkqe93JFX275TfBunVfbb3Wh/bg-8.jpg",
        blockImg: "http://lc-uwPGwsAs.cn-n1.lcfile.com/uezXcJVHACn8x9sxtH5eGao3OIAJM05z/block-8.png",
        x: 150
      }
    ], T = () => {
      k.value = !0;
    }, B = () => {
      k.value = !1;
    }, X = (s) => {
      w.value && (p.value = !0, v.value = s.pageX - A.value, !(v.value < 0 || v.value > 261) && (b.value.style.transform = `translateX(${v.value}px)`, g.value.left = `${v.value}px`, _.value.style.width = v.value + 25 + "px", i("onDrag")));
    }, D = (s) => {
      c.value || (w.value = !0, p.value = !0, A.value = s.clientX, document.addEventListener("mousemove", X), document.addEventListener("mouseup", j));
    }, G = () => {
      l.value = "default", b.value.style.transform = "translateX(0px)", g.value.left = "5px", _.value.style.width = "0px";
    }, j = () => {
      w.value = !1, p.value = !1, i("onDragEnd"), v.value >= u.value.x - 2 && v.value <= u.value.x + 2 ? (c.value = !0, l.value = "success", setTimeout(() => {
        B();
      }, 1e3), i("onSuccess", c.value)) : (c.value = !1, i("onFail", c.value), l.value = "fail", setTimeout(() => {
        G(), I();
      }, 1e3)), document.removeEventListener("mousemove", X), document.removeEventListener("mouseup", j);
    }, I = () => {
      const s = Math.floor(Math.random() * 8);
      u.value = H[s], g.value.left = "5px";
    }, x = () => {
      I(), c.value = !1, G();
    };
    return h({
      reset: x,
      open: T,
      close: B,
      modelValue: c.value
    }), Q(() => {
      I();
    }), (s, f) => (t(), o(J, null, [
      s.type === "insert" || s.type === "popover" ? (t(), o("div", {
        key: 0,
        class: "puzzle-wrapper",
        onMousemove: f[0] || (f[0] = (F) => p.value = !0),
        onMouseleave: f[1] || (f[1] = (F) => p.value = !1)
      }, [
        q(K, { name: "slide-up-down" }, {
          default: L(() => [
            V(e("div", {
              class: z({ popover: s.type === "popover" })
            }, [
              e("img", {
                src: r(P),
                class: "refresh",
                onClick: x,
                alt: ""
              }, null, 8, t2),
              e("div", c2, [
                e("img", {
                  src: u.value.backImg,
                  alt: ""
                }, null, 8, a2)
              ]),
              e("div", {
                class: "img-block",
                style: M({ left: g.value.left })
              }, [
                e("img", {
                  src: u.value.blockImg,
                  alt: ""
                }, null, 8, o2)
              ], 4)
            ], 2), [
              [S, p.value && s.type === "popover"]
            ])
          ]),
          _: 1
        }),
        V(e("div", null, [
          e("img", {
            src: r(P),
            class: "refresh",
            onClick: x,
            alt: ""
          }, null, 8, n2),
          e("div", i2, [
            e("img", {
              src: u.value.backImg,
              alt: ""
            }, null, 8, u2)
          ]),
          e("div", {
            class: "img-block",
            style: M({ left: g.value.left })
          }, [
            e("img", {
              src: u.value.blockImg,
              alt: ""
            }, null, 8, r2)
          ], 4)
        ], 512), [
          [S, s.type === "insert"]
        ]),
        e("div", {
          class: z(["drag", `drag-${l.value}`]),
          ref_key: "drag",
          ref: y
        }, [
          e("div", {
            class: "slider-fill",
            ref_key: "sliderFill",
            ref: _
          }, null, 512),
          e("div", {
            class: "slider-thumb",
            ref_key: "sliderBlock",
            ref: b,
            onMousedown: D
          }, [
            l.value === "default" ? (t(), o("img", {
              key: 0,
              src: r(O),
              class: "slider-icon"
            }, null, 8, d2)) : n("", !0),
            l.value === "success" ? (t(), o("img", {
              key: 1,
              src: r(E),
              class: "slider-icon"
            }, null, 8, v2)) : n("", !0),
            l.value === "fail" ? (t(), o("img", {
              key: 2,
              src: r(R),
              class: "slider-icon"
            }, null, 8, m2)) : n("", !0)
          ], 544),
          l.value === "default" && !w.value ? (t(), o("div", g2, "按住按钮完成验证")) : n("", !0)
        ], 2)
      ], 32)) : n("", !0),
      s.type === "modal" && k.value ? (t(), Y(s2, {
        key: 1,
        visible: k.value,
        "onUpdate:visible": f[2] || (f[2] = (F) => k.value = F)
      }, {
        default: L(() => [
          e("div", p2, [
            e("img", {
              src: r(P),
              class: "refresh",
              onClick: x,
              alt: ""
            }, null, 8, f2),
            e("div", h2, [
              e("img", {
                src: u.value.backImg,
                alt: ""
              }, null, 8, k2)
            ]),
            e("div", {
              class: "img-block",
              style: M({ left: g.value.left })
            }, [
              e("img", {
                src: u.value.blockImg,
                alt: ""
              }, null, 8, w2)
            ], 4),
            e("div", {
              class: z(["drag", `drag-${l.value}`]),
              ref_key: "drag",
              ref: y
            }, [
              e("div", {
                class: "slider-fill",
                ref_key: "sliderFill",
                ref: _
              }, null, 512),
              e("div", {
                class: "slider-thumb",
                ref_key: "sliderBlock",
                ref: b,
                onMousedown: D
              }, [
                l.value === "default" ? (t(), o("img", {
                  key: 0,
                  src: r(O),
                  class: "slider-icon"
                }, null, 8, b2)) : n("", !0),
                l.value === "success" ? (t(), o("img", {
                  key: 1,
                  src: r(E),
                  class: "slider-icon"
                }, null, 8, _2)) : n("", !0),
                l.value === "fail" ? (t(), o("img", {
                  key: 2,
                  src: r(R),
                  class: "slider-icon"
                }, null, 8, x2)) : n("", !0)
              ], 544),
              l.value === "default" && !w.value ? (t(), o("div", y2, "按住按钮完成验证")) : n("", !0)
            ], 2)
          ])
        ]),
        _: 1
      }, 8, ["visible"])) : n("", !0)
    ], 64));
  }
}), F2 = /* @__PURE__ */ $(I2, [["__scopeId", "data-v-3751d711"]]), z2 = function(d) {
  d.component("PuzzleVerify", F2);
}, P2 = { install: z2 };
export {
  F2 as PuzzleVerify,
  P2 as default
};
