"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toRNameA() {
      common_vendor.index.navigateTo({
        url: "/pages/Register/Person/RealNameAuthentication"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.toRNameA())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Chinglish/Desktop/xiaowo_universe/pages/Register/Person/CommunityInformation.vue"]]);
wx.createPage(MiniProgramPage);
