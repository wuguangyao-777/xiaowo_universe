"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toPerson() {
      common_vendor.index.redirectTo({
        url: "/pages/Register/Person/PersonalInformationVerification"
      });
    },
    toOtherPerson() {
      common_vendor.index.redirectTo({
        url: "/pages/Register/OtherPerson/PersonalInformationVerification"
      });
    },
    toOrganization() {
      common_vendor.index.redirectTo({
        url: "/pages/Register/Organization/OrganizationalDataFilling"
      });
    }
  }
};
if (!Array) {
  const _component_test = common_vendor.resolveComponent("test");
  _component_test();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.toPerson()),
    b: common_vendor.o(($event) => $options.toOtherPerson()),
    c: common_vendor.o(($event) => $options.toOrganization())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Chinglish/Desktop/xiaowo_universe/pages/Register/IdentitySelection.vue"]]);
wx.createPage(MiniProgramPage);
