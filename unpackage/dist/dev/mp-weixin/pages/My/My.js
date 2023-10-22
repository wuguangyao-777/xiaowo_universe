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
    toEdit() {
      common_vendor.index.navigateTo({
        url: "/pages/My/Edit/Edit",
        success: (res) => {
        },
        fail: () => {
        },
        complete: () => {
        }
      });
    },
    toFans() {
      common_vendor.index.navigateTo({
        url: "/pages/My/F_A_D/Fans"
      });
    },
    toAttention() {
      common_vendor.index.navigateTo({
        url: "/pages/My/F_A_D/Attention"
      });
    },
    toPost() {
      common_vendor.index.navigateTo({
        url: "/pages/My/ContentCenter/Post"
      });
    },
    toCollection() {
      common_vendor.index.navigateTo({
        url: "/pages/My/ContentCenter/Collection"
      });
    },
    toLike() {
      common_vendor.index.navigateTo({
        url: "/pages/My/ContentCenter/Like"
      });
    },
    toHide() {
      common_vendor.index.navigateTo({
        url: "/pages/My/ContentCenter/Hide"
      });
    },
    toCommnet() {
      common_vendor.index.navigateTo({
        url: "/pages/My/ContentCenter/Comment"
      });
    },
    toBlock() {
      common_vendor.index.navigateTo({
        url: "/pages/My/ContentCenter/Block"
      });
    },
    toFeedback() {
      common_vendor.index.navigateTo({
        url: "/pages/My/MoreServices/Feedback"
      });
    },
    toMessagePush() {
      common_vendor.index.navigateTo({
        url: "/pages/My/MoreServices/MessagePush"
      });
    },
    toCoorperation() {
      common_vendor.index.navigateTo({
        url: "/pages/My/MoreServices/Coorperation"
      });
    },
    toAboutUs() {
      common_vendor.index.navigateTo({
        url: "/pages/My/MoreServices/AboutUs"
      });
    },
    toExit() {
      common_vendor.index.redirectTo({
        url: "/pages/Register/Register"
      });
    },
    toLogOff() {
      common_vendor.index.redirectTo({
        url: "/pages/Register/Register"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.toEdit()),
    b: common_vendor.o(($event) => $options.toFans()),
    c: common_vendor.o(($event) => $options.toAttention()),
    d: common_vendor.o(($event) => $options.toPost()),
    e: common_vendor.o(($event) => $options.toCollection()),
    f: common_vendor.o(($event) => $options.toLike()),
    g: common_vendor.o(($event) => $options.toHide()),
    h: common_vendor.o(($event) => $options.toCommnet()),
    i: common_vendor.o(($event) => $options.toBlock()),
    j: common_vendor.o(($event) => $options.toFeedback()),
    k: common_vendor.o(($event) => $options.toMessagePush()),
    l: common_vendor.o(($event) => $options.toCoorperation()),
    m: common_vendor.o(($event) => $options.toAboutUs()),
    n: common_vendor.o(($event) => $options.toExit()),
    o: common_vendor.o(($event) => $options.toLogOff()),
    p: $options.tabAImage,
    q: common_vendor.o(($event) => $options.switchTab("/pages/Square/Square")),
    r: $options.tabBImage,
    s: common_vendor.o(($event) => $options.switchTab("/pages/Message/Message")),
    t: $options.tabCImage,
    v: common_vendor.o(($event) => $options.switchTab("/pages/My/My"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "R:/小蜗宇宙/XiaoWo_Universe/pages/My/My.vue"]]);
wx.createPage(MiniProgramPage);
