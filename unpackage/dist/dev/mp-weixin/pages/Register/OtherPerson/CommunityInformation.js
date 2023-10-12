"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toSubmitted() {
      common_vendor.index.navigateTo({
        url: "/pages/Register/OtherPerson/ApplicationSubmitted"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.toSubmitted())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "R:/小蜗宇宙/XiaoWo_Universe/pages/Register/OtherPerson/CommunityInformation.vue"]]);
wx.createPage(MiniProgramPage);
