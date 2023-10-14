"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toVis() {
      common_vendor.index.navigateTo({
        url: "/pages/Square/Topic/Edit/Vis_Pub/VisibleArea"
      });
    },
    toPub() {
      common_vendor.index.navigateTo({
        url: "/pages/Square/Topic/Edit/Vis_Pub/PublishArea"
      });
    },
    Finish() {
      common_vendor.index.navigateTo({
        url: "/pages/Square/Topic/Topic"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.toVis()),
    b: common_vendor.o(($event) => $options.toPub()),
    c: common_vendor.o(($event) => $options.Finish())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Chinglish/Desktop/xiaowo_universe/pages/Square/Topic/Edit/Edit.vue"]]);
wx.createPage(MiniProgramPage);
