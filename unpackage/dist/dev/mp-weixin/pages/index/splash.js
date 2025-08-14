"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  _easycom_uv_icon2();
}
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
if (!Math) {
  (uniSwiperDot + _easycom_uv_icon)();
}
const uniSwiperDot = () => "../../node-modules/@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot.js";
const _sfc_main = {
  __name: "splash",
  setup(__props) {
    const info = common_vendor.ref([1, 2, 3]);
    const currentIndex = common_vendor.ref(0);
    const dotsStyles = {
      backgroundColor: "rgba(255, 255, 255, .3)",
      border: "1px rgba(255, 255, 255, .3) solid",
      color: "#fff",
      selectedBackgroundColor: "rgba(255, 255, 255, .9)",
      selectedBorder: "1px rgba(255, 255, 255, .9) solid"
    };
    const changeSwiper = (e) => {
      currentIndex.value = e.detail.current;
    };
    const nextSwiper = () => {
      if (currentIndex.value < 2) {
        currentIndex.value++;
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/index/login"
        });
      }
    };
    const skip = () => {
      common_vendor.index.navigateTo({
        url: "/pages/index/login"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(skip),
        b: currentIndex.value,
        c: common_vendor.o(changeSwiper),
        d: common_vendor.p({
          info: info.value,
          mode: "round",
          dotsStyles,
          current: currentIndex.value
        }),
        e: common_vendor.p({
          name: "arrow-rightward",
          color: "#ffffff",
          size: "20"
        }),
        f: common_vendor.o(nextSwiper)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-830e1569"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/splash.js.map
