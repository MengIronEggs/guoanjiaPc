export default class {
  constructor() {

  }
  install(Vue, options) {
    this.installPrototype(Vue);
  }
  installPrototype(Vue) {
    //   成功的提示消息
    Vue.prototype.$showMsgTip = function (msg, type = 'success') {
      this.$message({
        message: msg,
        type: type,
        customClass: 'form-error',
        showClose: true,
        duration: 2000,
      });
    };
    // 错误的提示消息
    Vue.prototype.$showErrorTip = function (msg) {
      this.$message.error({
        message: msg,
        customClass: 'form-error',
        showClose: true,
        duration: 2000,
      });
    };
    // Confirm 提示消息
    Vue.prototype.$showConfirm = function (msg, cb = () => {}, type = 'warning') {
      this.$confirm(msg, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: type
      }).then(() => {
        cb();
      }).catch(() => {
        this.$message({
          message: "取消操作",
          type: 'info',
          customClass: 'form-error',
          showClose: true,
          duration: 2000,
        });
      });
    };
  }
}
