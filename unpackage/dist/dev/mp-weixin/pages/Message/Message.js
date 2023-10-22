"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_tab = require("../tab.js");
const _sfc_main = {
  data() {
    return {
      currentTab: pages_tab.tab.value
    };
  },
  computed: {
    tabAImage() {
      if (this.currentTab === "/pages/Square/Square")
        return "/static/tabBar/square_c.png";
      return "/static/tabBar/square_r.png";
    },
    tabBImage() {
      if (this.currentTab === "/pages/Square/Square")
        return "/static/tabBar/message_l.png";
      if (this.currentTab === "/pages/Message/Message")
        return "/static/tabBar/message_c.png";
      return "/static/tabBar/message_r.png";
    },
    tabCImage() {
      if (this.currentTab === "/pages/My/My")
        return "/static/tabBar/my_c.png";
      return "/static/tabBar/my_l.png";
    }
  },
  methods: {
    switchTab(tab) {
      pages_tab.updateTab(tab);
      common_vendor.index.switchTab({
        url: tab
      });
    },
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
    g: common_vendor.o(($event) => $options.toChatting()),
    h: $options.tabAImage,
    i: common_vendor.o(($event) => $options.switchTab("/pages/Square/Square")),
    j: $options.tabBImage,
    k: common_vendor.o(($event) => $options.switchTab("/pages/Message/Message")),
    l: $options.tabCImage,
    m: common_vendor.o(($event) => $options.switchTab("/pages/My/My"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "R:/小蜗宇宙/XiaoWo_Universe/pages/Message/Message.vue"]]);
wx.createPage(MiniProgramPage);
