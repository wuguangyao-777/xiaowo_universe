"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toLike() {
      common_vendor.index.navigateTo({
        url: "/pages/Message/MessageBox/Like"
      });
    },
    toComment() {
      common_vendor.index.navigateTo({
        url: "/pages/Message/MessageBox/Comment"
      });
    },
    toAttention() {
      common_vendor.index.navigateTo({
        url: "/pages/Message/MessageBox/Attention"
      });
    },
    toByAt() {
      common_vendor.index.navigateTo({
        url: "/pages/Message/MessageBox/ByAt"
      });
    },
    toReferenced() {
      common_vendor.index.navigateTo({
        url: "/pages/Message/MessageBox/Referenced"
      });
    },
    toSystemNotification() {
      common_vendor.index.navigateTo({
        url: "/pages/Message/MessageBox/SystemNotification"
      });
    },
    toChatting() {
      common_vendor.index.navigateTo({
        url: "/pages/Message/Chatting/Chatting"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.toLike()),
    b: common_vendor.o(($event) => $options.toComment()),
    c: common_vendor.o(($event) => $options.toAttention()),
    d: common_vendor.o(($event) => $options.toByAt()),
    e: common_vendor.o(($event) => $options.toReferenced()),
    f: common_vendor.o(($event) => $options.toSystemNotification()),
    g: common_vendor.o(($event) => $options.toChatting())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "R:/小蜗宇宙/小蜗宇宙/pages/Message/Message.vue"]]);
wx.createPage(MiniProgramPage);
