"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toSquare() {
      common_vendor.index.switchTab({
        url: "/pages/Square/Square"
      });
    },
    toIdSel() {
      common_vendor.index.redirectTo({
        url: "/pages/Register/IdentitySelection"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.toSquare()),
    b: common_vendor.o(($event) => $options.toIdSel())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "R:/小蜗宇宙/XiaoWo_Universe/pages/Register/Register.vue"]]);
wx.createPage(MiniProgramPage);
