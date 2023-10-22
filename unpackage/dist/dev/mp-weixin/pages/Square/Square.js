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
    a: common_vendor.o((...args) => $options.toTopics && $options.toTopics(...args)),
    b: common_vendor.o((...args) => $options.toPost && $options.toPost(...args)),
    c: common_vendor.o((...args) => $options.toEditPost && $options.toEditPost(...args)),
    d: $options.tabAImage,
    e: common_vendor.o(($event) => $options.switchTab("/pages/Square/Square")),
    f: $options.tabBImage,
    g: common_vendor.o(($event) => $options.switchTab("/pages/Message/Message")),
    h: $options.tabCImage,
    i: common_vendor.o(($event) => $options.switchTab("/pages/My/My"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "R:/小蜗宇宙/XiaoWo_Universe/pages/Square/Square.vue"]]);
wx.createPage(MiniProgramPage);
