"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_upload2 = common_vendor.resolveComponent("u-upload");
  _easycom_u_upload2();
}
const _easycom_u_upload = () => "../../uni_modules/uview-plus/components/u-upload/u-upload.js";
if (!Math) {
  _easycom_u_upload();
}
const _sfc_main = {
  __name: "Register",
  setup(__props) {
    const fileList1 = common_vendor.ref([]);
    const deletePic = (event) => {
      fileList1.value.splice(event.index, 1);
    };
    const afterRead = async (event) => {
      let lists = [].concat(event.file);
      let fileListLen = fileList1.value.length;
      lists.map((item) => {
        fileList1.value.push({
          ...item,
          status: "uploading",
          message: "上传中"
        });
      });
      for (let i = 0; i < lists.length; i++) {
        const result = await uploadFilePromise(lists[i].url);
        let item = fileList1.value[fileListLen];
        fileList1.value.splice(fileListLen, 1, {
          ...item,
          status: "success",
          message: "",
          url: result
        });
        fileListLen++;
      }
    };
    const uploadFilePromise = (url) => {
      return new Promise((resolve, reject) => {
        common_vendor.index.uploadFile({
          url: "http://192.168.2.21:7001/upload",
          // 仅为示例，非真实的接口地址
          filePath: url,
          name: "file",
          formData: {
            user: "test"
          },
          success: (res) => {
            setTimeout(() => {
              resolve(res.data.data);
            }, 1e3);
          }
        });
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(afterRead),
        b: common_vendor.o(deletePic),
        c: common_vendor.p({
          fileList: fileList1.value,
          name: "1",
          multiple: true,
          maxCount: 9,
          previewFullImage: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/Chinglish/Desktop/xiaowo_universe/pages/Register/Register.vue"]]);
wx.createPage(MiniProgramPage);
