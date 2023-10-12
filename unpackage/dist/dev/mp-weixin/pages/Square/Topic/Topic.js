"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toEdit() {
      common_vendor.index.navigateTo({
        url: "/pages/Square/Topic/Edit/Edit"
      });
    },
    toPost() {
      common_vendor.index.navigateTo({
        url: "/pages/Square/Post/Post"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.toEdit()),
    b: common_vendor.o(($event) => $options.toPost())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "R:/小蜗宇宙/XiaoWo_Universe/pages/Square/Topic/Topic.vue"]]);
wx.createPage(MiniProgramPage);
