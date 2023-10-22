"use strict";
const common_vendor = require("../common/vendor.js");
const tab = common_vendor.ref("/pages/Square/Square");
function updateTab(newTab) {
  tab.value = newTab;
}
exports.tab = tab;
exports.updateTab = updateTab;
