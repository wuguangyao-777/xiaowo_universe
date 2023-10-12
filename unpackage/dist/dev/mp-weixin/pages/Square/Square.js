"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toTopics() {
      common_vendor.index.navigateTo({
        url: "/pages/Square/Topic/Topic"
      });
    },
    toPost() {
      common_vendor.index.navigateTo({
        url: "/pages/Square/Post/Post"
      });
    },
    toEditPost() {
      common_vendor.index.navigateTo({
        url: "/pages/Square/EditPost/EditPost"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.toTopics()),
    b: common_vendor.o(($event) => $options.toPost()),
    c: common_vendor.o(($event) => $options.toEditPost())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "R:/小蜗宇宙/XiaoWo_Universe/pages/Square/Square.vue"]]);
wx.createPage(MiniProgramPage);
