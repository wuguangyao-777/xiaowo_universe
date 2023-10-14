"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isTrue: false
    };
  },
  onLoad() {
    if (this.isTrue) {
      common_vendor.index.navigateTo({
        url: "/pages/Register/OtherPerson/ApplicationApproved"
      });
    } else {
      common_vendor.index.navigateTo({
        url: "/pages/Register/OtherPerson/ApplicationNotApproved"
      });
    }
  },
  methods: {
    SuccessToPass() {
      common_vendor.index.switchTab({
        url: "/pages/Square/Square"
      });
    },
    FailToPass() {
      common_vendor.index.navigateTo({
        url: "/pages/Register/OtherPerson/PersonalInformationVerification"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Chinglish/Desktop/xiaowo_universe/pages/Register/OtherPerson/ApplicationSubmitted.vue"]]);
wx.createPage(MiniProgramPage);
